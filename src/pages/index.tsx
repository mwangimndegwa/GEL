// Modal for BELM Program Launch
function BELMProgramModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const handleSubmitInquiry = () => {
    window.location.href =
      'mailto:info@globaleducatedleaders.org?subject=BELM%20Partnership%20Outreach%202026';
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full px-8 py-10 animate-fadeIn border-t-8 border-[#B5651D]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#FFF6EC] text-[#B5651D] text-3xl">
            {/* Icon for Institutional Mandate */}
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="M3 12L16 3l13 9"/><path d="M5 10v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V10"/></svg>
          </span>
          <div>
            <div className="font-heading text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Institutional Mandate</div>
            <div className="uppercase text-xs font-semibold tracking-wider text-[#B5651D] mt-0.5">Partnership Outreach 2026</div>
          </div>
        </div>
        <div className="text-[15px] font-body text-gray-800 mb-4 mt-2">
          Following the successful launch of our flagship leadership mandate, we are scaling our infrastructure to bridge the knowledge gap for emerging civic leaders. Our objective is to provide curated knowledge resources and mentorship to a student cohort of <span className="font-bold">500 – 700 students</span>.
        </div>
        <div className="bg-[#F6F8FA] rounded-xl p-5 mb-5 border border-[#E5E7EB]">
          <div className="flex items-center gap-2 mb-3">
            <svg width="18" height="18" fill="none" stroke="#B5651D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="9" cy="9" r="8"/><line x1="9" y1="13" x2="9" y2="9"/><line x1="9" y1="7" x2="9" y2="7"/></svg>
            <span className="font-heading text-sm font-semibold text-[#B5651D] tracking-wide uppercase">Eligibility Criteria</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-[15px]">
            <div className="bg-white rounded-lg p-3 border border-[#E5E7EB]">
              <div className="text-xs font-semibold text-gray-500 mb-1">Region</div>
              <div className="font-bold text-gray-900">Kenya (National Wide)</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-[#E5E7EB]">
              <div className="text-xs font-semibold text-gray-500 mb-1">Institution Type</div>
              <div className="font-bold text-gray-900">Primary / High Schools</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-[#E5E7EB]">
              <div className="text-xs font-semibold text-gray-500 mb-1">Teacher Ratio</div>
              <div className="font-bold text-gray-900">60+ Avg Students/Teacher</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-[#E5E7EB]">
              <div className="text-xs font-semibold text-gray-500 mb-1">Resource Ratio</div>
              <div className="font-bold text-gray-900">1:8 Textbook/Student</div>
            </div>
          </div>
        </div>
        <div className="text-[15px] font-body text-gray-800 mb-6">
          We are actively scouting for institutions that meet these specific criteria to help us deliver high-impact leadership and educational toolkits. If your school fits this profile, we invite you to register your interest immediately.
        </div>
        <div className="flex gap-3 mt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-900 font-semibold hover:bg-gray-100 transition-colors text-base"
          >
            Return
          </button>
          <button
            onClick={handleSubmitInquiry}
            className="px-5 py-2.5 rounded-lg bg-[#B5651D] text-white font-semibold hover:bg-[#8A5830] transition-colors text-base"
          >
            Submit Inquiry
          </button>
        </div>
        <style>{`
          .animate-fadeIn { animation: fadeIn 0.25s ease; }
          @keyframes fadeIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        `}</style>
      </div>
    </div>
  );
}
// Modal for Talented Engagement: Vetted Outreach
function VettedOutreachModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full px-7 py-8 animate-fadeIn border-t-8 border-[#FFD166]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FFF7E0] text-[#FFD166] text-2xl">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check"><path d="M8 18v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
          </span>
          <div>
            <div className="font-heading text-xl md:text-2xl font-bold text-gray-900 leading-tight">Volunteer Absorption</div>
            <div className="uppercase text-xs font-semibold tracking-wider text-[#FFD166] mt-0.5">Phased Process</div>
          </div>
        </div>
        <div className="text-[15px] font-body text-gray-800 mb-4 mt-2">
          Thank you for your patience and continued interest in our mission. To ensure every contributor is effectively integrated, our volunteer absorption is being conducted in <span className="font-semibold">deliberate phases</span>.
        </div>
        <blockquote className="border-l-4 border-[#B6C6E3] bg-[#F6F8FA] text-[15px] text-gray-700 italic px-4 py-2 mb-4">
          "Currently, we are reaching out to candidates who expressed a specific interest in the <span className='font-semibold'>education sector</span> during last year's application cycle."
        </blockquote>
        <div className="text-[15px] font-body text-gray-800 mb-6">
          We are excited to begin engaging this cohort in our upcoming education initiatives and learning hub expansions. If your interests lie in other sectors, please stay tuned as we roll out subsequent engagement phases throughout 2026.
        </div>
        <button
          onClick={onClose}
          className="w-full mt-2 px-5 py-2.5 rounded-lg bg-[#232B36] text-white font-semibold hover:bg-[#1a202c] transition-colors text-base"
        >
          Understood
        </button>
        <style>{`
          .animate-fadeIn { animation: fadeIn 0.25s ease; }
          @keyframes fadeIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        `}</style>
      </div>
    </div>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Sprout, Cpu, Target, ArrowRight, TrendingUp, Award, Globe, UserCheck } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
// Simple modal component for 'Coming soon!'
function ComingSoonModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-2xl px-8 py-8 max-w-xs w-full text-center relative animate-fadeIn">
        <h3 className="text-2xl font-heading font-bold mb-2 text-[#B5651D]">Coming soon!</h3>
        <p className="font-body text-gray-700 mb-4">This feature will be available soon.</p>
        <button
          onClick={onClose}
          className="mt-2 px-5 py-2 rounded-lg bg-[#003366] text-white font-semibold hover:bg-[#264F80] transition-colors"
        >
          Close
        </button>
      </div>
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.25s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}
import HeroBackground from '@/components/HeroBackground';

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
  const [showVettedModal, setShowVettedModal] = useState(false);
  const [showBELMModal, setShowBELMModal] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  // Removed unused isVisible state
  const [counts, setCounts] = useState({ leaders: 0, communities: 0, programs: 0 });

  useEffect(() => {
    // Animated counters for impact stats
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { leaders: 500, communities: 12, programs: 5 };
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
    category: 'Program Application',
    date: 'JAN 2026',
    icon: Award,
    description:
      'We successfully launched our flagship leadership mandate, expanding access to curated knowledge resources for 500+ emerging civic leaders.'
  },
  {
    title: 'Talented Engagement: Vetted Outreach',
    category: 'Strategic Milestone',
    date: 'JAN 2026',
    icon: UserCheck,
    description:
      'Following a rigorous vetting of our 2025 volunteer applications, we have begun personalized outreach to high-talent volunteers to spearhead our upcoming global initiatives.'
  },
  {
    title: 'Digital Horizon: 2026 Global Launch',
    category: 'News & Events',
    date: 'JAN 2026',
    icon: TrendingUp,
    description:
      'As of today, our digital ecosystem is live. This platform marks a new era for global collaboration, real-time impact tracking, and fellowship integration.'
  }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        {/* Centered Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Headline - Large, Bold, Serif Font */}
            <h1 className="text-white font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-center mb-6">
              Empowering Leaders, Transforming Communities
            </h1>
          {/* Subheadline - Body Font, Centered, Readable */}
            <p className="text-white text-lg md:text-xl text-center max-w-3xl mb-12">
              We are cultivating a global community of leaders who leverage data and technology to drive sustainable development, foster social impact, improve food security, and promote equitable economic opportunities.
            </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/our-work"
              className="w-full sm:w-auto font-semibold transition-opacity hover:opacity-90
                px-4 py-2 rounded-md text-base
                md:px-8 md:py-4 md:rounded-lg md:text-lg"
              style={{ backgroundColor: '#800000', color: '#FFFFFF' }}>
              Explore Our Work
            </a>
            <a
              href="/get-involved"
              className="w-full sm:w-auto bg-white font-semibold transition-colors hover:bg-gray-100
                px-4 py-2 rounded-md text-base
                md:px-8 md:py-4 md:rounded-lg md:text-lg"
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
              <div className="text-lg font-body opacity-90">Young Leaders Benefiting</div>
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

      {/* Founder Note Section */}
      <section className="relative py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <img
              src="https://i.ibb.co/rKFMdkw8/w-ELCOME.png"
              alt="Mwangi M. Ndegwa, Founder"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-contain shadow-2xl border-4 border-blue-900 bg-white"
              style={{ background: 'white' }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-900 mb-6">A Note from our Founder</h2>
            <div className="relative max-w-3xl mx-auto mb-6">
              <p
                className="font-serif italic text-base sm:text-base md:text-xl leading-relaxed text-[#0f1720] opacity-0 founder-quote-fadein"
                style={{ transition: 'opacity 1.2s ease', position: 'relative' }}
              >
                <span className="absolute -left-8 -top-2 text-[3rem] text-[#B5651D]/20 select-none hidden md:block" aria-hidden="true">“</span>
                Passion for community is at the heart of everything we do. We believe that leadership is not a title, but a responsibility to serve, and that technology is the greatest tool we have to scale that service across the globe.<br /><br />
                I founded ‘Global Educated Leaders’ to be a home for those who want to serve and dream of a more equitable, tech-forward, and innovative led world. Seeing the talent in our communities inspired me to create a space where that potential meets opportunity.<br /><br />
                We are so glad you’re here. Take a look at our initiatives, meet our team, and see how we can transform the future, together.
                <span className="absolute -right-8 -bottom-2 text-[3rem] text-[#B5651D]/20 select-none hidden md:block" aria-hidden="true">”</span>
              </p>
              <style>{`
                .founder-quote-fadein { animation: founderFadeIn 1.2s ease 0.1s forwards; }
                @keyframes founderFadeIn { to { opacity: 1; } }
              `}</style>
            </div>
            <div className="mt-3 text-right items-start">
              <span className="block font-serif text-xl font-semibold text-[#003366]">Mwangi M. Ndegwa</span>
              <span className="block font-sans text-sm text-[#003366]/80 uppercase tracking-wide">Founder/Executive Director</span>
            </div>
          </div>
        </div>
      </section>

            {/* Five Pillars Grid */}
      <section
        id="pillars"
        ref={pillarsSectionRef}
        className="relative pt-8 pb-20 md:pt-28 md:pb-28 bg-background overflow-hidden"
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
                onClick={() => setShowComingSoon(true)}
                type="button"
              >
                View all updates
              </Button>
              {/* Coming Soon Modal */}
              <ComingSoonModal open={showComingSoon} onClose={() => setShowComingSoon(false)} />
            </div>
          </div>

          {/* Updates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {updates.map((update) => {
            const Icon = update.icon;
            const isDigitalHorizon = update.title === 'Digital Horizon: 2026 Global Launch';
            const isVettedOutreach = update.title === 'Talented Engagement: Vetted Outreach';
            const isBELMProgram = update.title === 'BELM Program Launch';
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
                        backgroundColor: 'rgba(0, 51, 102, 0.08)',
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
                      backgroundColor: 'rgba(181, 101, 29, 0.12)',
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
                  {isDigitalHorizon ? (
                    <a
                      href="/"
                      className="font-body text-sm inline-flex items-center"
                      style={{ color: '#003366' }}
                    >
                      Explore Platform
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-[#B5651D]" />
                    </a>
                  ) : isVettedOutreach ? (
                    <button
                      type="button"
                      className="font-body text-sm inline-flex items-center"
                      style={{ color: '#003366' }}
                      onClick={() => setShowVettedModal(true)}
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-[#B5651D]" />
                    </button>
                  ) : isBELMProgram ? (
                    <Button
                      variant="link"
                      className="p-0 h-auto group/btn font-body"
                      onClick={() => setShowBELMModal(true)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <button
                      type="button"
                      className="font-body text-sm inline-flex items-center"
                      style={{ color: '#003366' }}
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-[#B5651D]" />
                    </button>
                  )}
                </CardContent>
              </Card>
            );
          })}
          {/* BELM Program Modal - render once outside the map */}
          <BELMProgramModal open={showBELMModal} onClose={() => setShowBELMModal(false)} />
          {/* Vetted Outreach Modal - render once outside the map */}
          <VettedOutreachModal open={showVettedModal} onClose={() => setShowVettedModal(false)} />
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
              <a
                href="/get-involved#partner"
                className="w-full h-full flex items-center justify-center text-lg px-8 py-6 group font-body"
                style={{ textDecoration: 'none' }}
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group font-body">
              <a
                href="/get-involved#donate"
                className="w-full h-full flex items-center justify-center text-lg px-8 py-6 group font-body"
                style={{ textDecoration: 'none' }}
              >
                Make a Donation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>);

}