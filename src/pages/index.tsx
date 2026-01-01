'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Sprout, Cpu, Target, ArrowRight, TrendingUp, Award, Globe } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const missionText =
"We are cultivating a global community of leaders who leverage data and technology to drive sustainable development, foster social impact, improve food security, and promote equitable economic opportunities.";

function useInView(options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // trigger once
          }
        });
      },
      options ?? { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, inView] as const;
}

function useTypewriter(text: string, speed: number = 40) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    let timerId: NodeJS.Timeout;

    function tick() {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i += 1;
        timerId = setTimeout(tick, speed);
      }
    }

    tick();

    return () => {
      clearTimeout(timerId);
    };
  }, [text, speed]);

  return displayText;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // When the section is completely below the viewport
      if (rect.top >= windowHeight) {
        setProgress(0);
        return;
      }
      // When the section is completely above the viewport
      if (rect.bottom <= 0) {
        setProgress(1);
        return;
      }

      // Rough progress of section through the viewport (0 → 1)
      const visible =
        Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
      const total = rect.height + windowHeight;
      const raw = visible / total;
      const clamped = Math.min(1, Math.max(0, raw));
      setProgress(clamped);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return [ref, progress] as const;
}


function MissionTypewriter({ className }: { className?: string; }) {
  const totalDuration = 2500; // 1.8 seconds target
  const charSpeed = Math.max(1, Math.floor(totalDuration / missionText.length));
  
  const text = useTypewriter(missionText, charSpeed);
  return <p className={className}>{text}</p>;
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ leaders: 0, communities: 0, programs: 0 });

  useEffect(() => {
    setIsVisible(true);

    // Animated counters for impact stats
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { leaders: 5000, communities: 50, programs: 15 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        leaders: Math.floor(targets.leaders * easeOut),
        communities: Math.floor(targets.communities * easeOut),
        programs: Math.floor(targets.programs * easeOut)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const pillars = [
  {
    icon: Target,
    title: 'Leadership',
    description:
      'Building Educated Leadership Minds (BELM) through mentorship and development programs.',
    image:
      'https://media.gettyimages.com/id/2226298625/photo/smiling-man-participating-in-a-collaborative-business-meeting-in-modern-office-setting.jpg?b=1&s=2048x2048&w=0&k=20&c=1uSmFUg2Oxc657ZlC6K9JyYieebiN4bCwPsAlgmiOgk=',
    color: 'primary'
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Strengthening communities through collaboration, empowerment, and sustainable development.',
    image:
      'https://media.gettyimages.com/id/2220761306/photo/young-friends-embraced-outdoors.jpg?b=1&s=2048x2048&w=0&k=20&c=lwDQ7CbOyBrDiHeATfoOKgWaQCtss1K7yLn2tI-SocM=',
    color: 'accent'
  },
  {
    icon: BookOpen,
    title: 'Education',
    description:
      'Curated Learning Hubs providing access to quality education and resources.',
    image:
      'https://media.gettyimages.com/id/2218093133/photo/portrait-of-a-schoolgirl-studying-in-the-classroom-at-school.jpg?b=1&s=2048x2048&w=0&k=20&c=wLJX8SLHX7V3GQ5BXmm52voZwZlUHxTRKISdAZHGccY=',
    color: 'secondary'
  },
  {
    icon: Cpu,
    title: 'Technology',
    description:
      'Empowering youth with digital skills and innovation for the future.',
    image:
      'https://media.gettyimages.com/id/2237526733/photo/teacher-guiding-a-group-of-kids-in-a-coding-class.jpg?b=1&s=2048x2048&w=0&k=20&c=TPEoX673s1rJ8xkgmD5foM4DQFyKKqrH_tPWMgpSCeU=',
    color: 'primary'
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    description:
      'Innovating sustainable farming practices and food security solutions.',
    image:
      'https://media.gettyimages.com/id/2214138348/photo/farmer-harvesting-eggplants-in-lush-green-garden.jpg?b=1&s=2048x2048&w=0&k=20&c=cPICs757KvR6ROhcMgoAcpB-4Rj4V70skrEzadgjsWA=',
    color: 'secondary'
  }
];

  const topPillars = pillars.slice(0, 2);
  const bottomPillars = pillars.slice(2);
  const [pillarsSectionRef, pillarsProgress] = useScrollProgress();
  const updates = [
  {
    title: 'BELM Program Launch',
    category: 'Impact Story',
    date: '2024',
    icon: Award,
    description:
      'Successfully launched our flagship leadership program in 5 countries, training 500+ emerging leaders.'
  },
  {
    title: 'Learning Hubs Expansion',
    category: 'Program Update',
    date: '2024',
    icon: TrendingUp,
    description:
      'Opened 10 new curated learning hubs providing access to quality education resources.'
  },
  {
    title: 'Innovation Challenge',
    category: 'News & Events',
    date: '2024',
    icon: Globe,
    description:
      'Hosted our first Innovate for Impact challenge with 200+ participants across 15 communities.'
  }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Full-width Hero Image */}
        <div className="absolute inset-0">
          <img
            src="https://media.gettyimages.com/id/2188069587/photo/confident-computer-programmer-smiling-with-crossed-arms-in-modern-office.jpg?b=1&s=2048x2048&w=0&k=20&c=FfAy9K0FWh1FwdEC_8UB7S6F_G4VCCUNhPebiDNo-L0="
            alt="African woman leader"
            className="w-full h-full object-cover" />

          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        
        {/* Centered Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Headline - Large, Bold, Serif Font */}
          <h1 className="text-sm font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Leaders, Transforming Communities
          </h1>
          
          {/* Subheadline - Body Font, Centered, Readable */}
          <MissionTypewriter className="font-body text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed" />
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/our-work"
              className="px-8 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#800000', color: '#FFFFFF' }}>

              Explore Our Work
            </a>
            <a
              href="/get-involved"
              className="px-8 py-4 bg-white rounded-lg font-semibold transition-colors hover:bg-gray-100"
              style={{ color: '#003366' }}>

              Get Involved
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                {counts.leaders.toLocaleString()}+
              </div>
              <div className="text-lg font-body opacity-90">Leaders Trained</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                {counts.communities.toLocaleString()}+
              </div>
              <div className="text-lg font-body opacity-90">Communities Impacted</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                {counts.programs.toLocaleString()}+
              </div>
              <div className="text-lg font-body opacity-90">Active Programs</div>
            </div>
          </div>
        </div>
      </section>

            {/* Five Pillars Grid */}
      <section
        id="pillars"
        ref={pillarsSectionRef}
        className="relative py-20 md:py-28 bg-background overflow-hidden"
      >
        {/* Scroll–reactive gradient background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(circle at top, rgba(0, 51, 102, 0.35) 0%, transparent 55%), radial-gradient(circle at bottom, rgba(128, 0, 0, 0.28) 0%, transparent 60%)',
            opacity: 0.15 + pillarsProgress * 0.6, // 0.15 → 0.75 as you scroll
            transform: `translateY(${20 - pillarsProgress * 20}px)`,
            transition: 'opacity 200ms linear, transform 200ms linear'
          }}
        />

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Five Pillars
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A holistic approach to sustainable development and community transformation.
            </p>
          </div>

          {/* 2 + 3 layout */}
          <div className="space-y-6 lg:space-y-8">
            {/* Top row: Leadership, Community */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 justify-center">
              {topPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const [ref, inView] = useInView({ threshold: 0.2 });

                return (
                  <div
                    key={pillar.title}
                    ref={ref}
                    style={{ transitionDelay: `${index * 150}ms` }} // slower stagger
                    className={`transition-all duration-1000 ease-out transform ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${pillar.color}/20 backdrop-blur-sm mb-3`}
                          >
                            <Icon className={`h-6 w-6 text-${pillar.color}-foreground`} />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-heading text-2xl font-bold mb-3">
                          {pillar.title}
                        </h3>
                        <p className="font-body text-muted-foreground mb-4">
                          {pillar.description}
                        </p>
                        <Button variant="link" className="p-0 h-auto group/btn font-body">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Bottom row: Education, Technology, Agriculture */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
              {bottomPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const [ref, inView] = useInView({ threshold: 0.2 });

                return (
                  <div
                    key={pillar.title}
                    ref={ref}
                    style={{
                      transitionDelay: `${(index + topPillars.length) * 150}ms`
                    }}
                    className={`transition-all duration-1000 ease-out transform ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${pillar.color}/20 backdrop-blur-sm mb-3`}
                          >
                            <Icon className={`h-6 w-6 text-${pillar.color}-foreground`} />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-heading text-2xl font-bold mb-3">
                          {pillar.title}
                        </h3>
                        <p className="font-body text-muted-foreground mb-4">
                          {pillar.description}
                        </p>
                        <Button variant="link" className="p-0 h-auto group/btn font-body">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Impact Section */}
      <section
        id="impact"
        className="pt-14 pb-20 md:pt-18 md:pb-24"
        style={{
          background:
            'linear-gradient(to bottom, #B5651D 0%, #B5651D 58%, #8A5830 75%, #264F80 98%, #003366 100%)'
        }}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div className="space-y-3 max-w-2xl">
              {/* Small Kicker */}
              <p className="font-body text-[11px] tracking-[0.28em] uppercase text-white/70">
                Global Impact & Stories
              </p>

              {/* main heading */}
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-tight text-white">
                Latest Impact
              </h2>

              {/* subheading */}
              <p className="font-body text-base md:text-lg leading-relaxed text-white/85">
                Our latest stories, achievements, and milestones from across our global work.
              </p>
            </div>

            {/* action */}
            <div className="flex items-start md:items-center">
              <Button
                variant="outline"
                className="font-body text-sm md:text-base rounded-full px-6 py-3 border-white/60 text-white hover:bg-white/10 hover:text-white"
              >
                View all updates
              </Button>
            </div>
          </div>

          {/* Updates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {updates.map((update) => {
            const Icon = update.icon;
            return (
              <Card
                key={update.title}
                className="group h-full rounded-2xl border border-white/30 bg-[#FFF6EC]/95 backdrop-blur-sm shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:-translate-y-3 hover:shadow-[0_26px_60px_rgba(0,0,0,0.25)] transition-all duration-500"
              >
                <CardContent className="p-7 flex flex-col h-full">
                  {/* meta row */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-body font-semibold tracking-wide"
                      style={{
                        backgroundColor: 'rgba(0, 51, 102, 0.08)',     // soft blue tint
                        color: '#003366'
                      }}
                    >
                      {update.category}
                    </span>
                    <span className="text-[11px] font-body uppercase tracking-[0.16em]" style={{ color: '#6C7887' }}>
                      {update.date}
                    </span>
                  </div>

                  {/* icon */}
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-5 group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: 'rgba(181, 101, 29, 0.12)',   // soft brown halo
                      color: '#B5651D'
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* title + description */}
                  <h3
                    className="font-body text-xl md:text-[1.35rem] font-semibold mb-3 leading-snug"
                    style={{ color: '#003366' }}
                  >
                    {update.title}
                  </h3>
                  <p
                    className="font-body text-sm md:text-[0.95rem] mb-5 flex-1 leading-relaxed"
                    style={{ color: '#3F4A57' }}
                  >
                    {update.description}
                  </p>

                  {/* link / CTA */}
                  <button
                    type="button"
                    className="font-body text-sm inline-flex items-center"
                    style={{ color: '#003366' }}
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-[#B5651D]" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="pt-14 pb-20 md:pt-16 md:pb-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Join Us in Transforming the World
          </h2>
          <p className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto opacity-95">
            Whether through volunteering, partnerships, or donations, your support creates lasting change in communities across the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group font-body">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group font-body">
              Make a Donation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>);

}