'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Target,
  BookOpen,
  Lightbulb,
  ArrowRight,
  Users,
  Award,
  Tablet,
  Cloud
} from 'lucide-react';

const BRAND_BROWN = '#B5651D';
const BRAND_BLUE = '#003366';

export default function OurWorkPage() {
  const [hoverPreview, setHoverPreview] = useState<string | null>(null);

  // small set of demo images — replace with preferred assets in public/assets
  const hoverImages: Record<string, string> = {
    hardware:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=60&auto=format&fit=crop',
    connectivity:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop',
    curriculum:
      'https://images.unsplash.com/photo-1528216311170-3b4f4b8da0a9?w=1200&q=60&auto=format&fit=crop',
    mentorship:
      'https://i.ibb.co/KxRP7W6h/B-pick.jpg'
  };

  const handleFindHub = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
          const data = await response.json();
          if (data.countryCode === 'KE') {
            window.location.href = 'https://www.smartacademy.go.ke/gok-digital-hubs/';
          } else {
            alert('Digital hubs are currently available in Kenya. For other locations, please check back later.');
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
          alert('Unable to determine your location. Please try again.');
        }
      }, (error) => {
        console.error('Geolocation error:', error);
        alert('Unable to get your location. Please enable location services and try again.');
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#003f6b] to-[#0b3b2f] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center transform -translate-y-4">
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-4">
              Our Impact &amp; Programs
            </h1>
            <p className="font-body text-lg md:text-xl opacity-95 mx-auto max-w-3xl">
              From classroom to community: how we are building the next generation of African
              problem-solvers.
            </p>
          </div>
        </div>

        {/* subtle pattern overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(180deg, rgba(181,101,29,0) 0%, rgba(0,0,0,0.06) 100%)',
            backgroundSize: '20px 20px, 100% 100%'
          }}
        />
      </section>

      {/* Section 1: BELM - Split screen with “The Reality” data viz */}
      <section id="belm" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: narrative */}
            <div>
              <Badge className="mb-4" style={{ background: `${BRAND_BROWN}/10`, color: BRAND_BROWN }}>
                Flagship Program
              </Badge>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Building Educated Leadership Minds (BELM)
              </h2>

              <h3 className="font-body text-lg text-muted-foreground mb-4 font-semibold">
                Closing the resource gap. Opening minds.
              </h3>

              <p className="font-body text-base text-gray-700 leading-relaxed mb-6">
                Talent is equally distributed, but opportunity is not. In many parts of East Africa,
                brilliant young minds are stifled by a critical lack of resources. 
                BELM is our flagship initiative in collaboration with Libraries and highly populated schools designed to dismantle these barriers. We don't just provide
                education; we provide the tools for self-directed learning and the framework for
                ethical leadership.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                    <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ring-1 ring-white/20"
                    style={{ background: `${BRAND_BROWN}20` }} // keeps subtle pill background
                    >
                    {/* keep inline style for exact brand color */}
                    <Target className="h-5 w-5" style={{ color: BRAND_BROWN }} />
                    </div>

                    <div>
                    {/* stronger heading color for readability */}
                    <h4 className="font-heading font-semibold mb-1 text-gray-900">
                        Strategic Leadership Training
                    </h4>

                    {/* stronger body color + a slightly larger leading for readability */}
                    <p className="font-body text-gray-700 leading-relaxed">
                        12-month intensive curriculum in strategic thinking, ethical leadership and
                        evidence-based decision making.
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${BRAND_BLUE}10` }}
                  >
                    <Users className="h-5 w-5" style={{ color: BRAND_BLUE }} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Mentorship Network</h4>
                    <p className="font-body text-gray-700 leading-relaxed">
                      One-on-one mentorship and access to a Global network of changemakers.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => (window.location.href = 'https://forms.gle/cwS5BgLH2rGEozTS8')}
                aria-label="Apply to BELM Program"
                className="bg-[#008000] border border-[#1a9a5a] text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors duration-200 ease-out hover:bg-red-600 hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a9a5a]/30"
              >
                Apply to BELM Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right: The Reality (data viz) */}
            <div className="rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-white p-8">
              <div className="mb-6">
                <h3 className="text-xl font-heading font-semibold">The Reality</h3>
                <p className="text-sm text-black">
                  Data points that shape our mission and the urgency of scale.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-extrabold" style={{ color: BRAND_BROWN }}>
                    60+
                  </div>
                  <div className="text-sm text-black mt-2">Avg students per teacher</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-extrabold" style={{ color: BRAND_BLUE }}>
                    1:8
                  </div>
                  <div className="text-sm text-black mt-2">Textbooks to students (ratio)</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-extrabold text-accent">
                    &lt;15%
                  </div>
                  <div className="text-sm text-black mt-2">With reliable digital access</div>
                </div>
              </div>

              {/* Graph / illustrative area */}
              <div className="mt-8 rounded-lg bg-gradient-to-b from-white to-gray-50 p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md bg-[url('/assets/classroom-muted.jpg')] bg-center bg-cover opacity-90 filter grayscale"></div>
                  <div>
                    <div className="font-heading text-lg font-semibold">STATISTICS</div>
                    <div className="text-sm text-black">(muted photo, high-quality — no sad imagery)</div>
                  </div>
                </div>
                <div className="mt-4">
                  {/* small infographic bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-black mb-1">
                        <span>Students per teacher</span>
                        <span>60+</span>
                      </div>
                      <div className="h-2 rounded bg-gray-200">
                        <div className="h-2 rounded" style={{ width: '90%', background: BRAND_BROWN }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-black mb-1">
                        <span>Textbook availability</span>
                        <span>1:8</span>
                      </div>
                      <div className="h-2 rounded bg-gray-200">
                        <div className="h-2 rounded" style={{ width: '50%', background: BRAND_BLUE }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-black mb-1">
                        <span>Digital access</span>
                        <span>&lt;15%</span>
                      </div>
                      <div className="h-2 rounded bg-gray-200">
                        <div className="h-2 rounded bg-accent" style={{ width: '15%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Curated Learning Hubs */}
      <section id="learning-hubs" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/m5pymz7k/Web-Photo-Editor.jpg"
                  alt="Learning hub classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4" style={{ background: `${BRAND_BLUE}10`, color: BRAND_BLUE }}>
                Education Initiative
              </Badge>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                The Solution: Curated Learning Hubs
              </h2>
              <p className="text-black mb-6 leading-relaxed">
                We partner with under-resourced schools and community libraries to establish Curated
                Learning Hubs, and Incubators for future leaders, combining digital access, ethical
                curriculum, and mentorship.
              </p>

              {/* GEL Equation visual */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-[#008000] rounded-lg shadow-sm border text-white">
                  <Tablet className="h-6 w-6 text-white" />
                  <div>
                    <div className="text-xs">Digital Access</div>
                    <div className="text-sm font-semibold">Offline + Connected</div>
                  </div>
                </div>

                <div className="text-2xl font-extrabold text-white">+</div>

                <div className="flex items-center gap-3 p-3 bg-[#008000] rounded-lg shadow-sm border text-white">
                  <Lightbulb className="h-6 w-6 text-white" />
                  <div>
                    <div className="text-xs">Ethical Curriculum</div>
                    <div className="text-sm font-semibold">Critical Thinking</div>
                  </div>
                </div>

                <div className="text-2xl font-extrabold text-white">=</div>

                <div className="flex items-center gap-3 p-3 bg-[#008000] rounded-lg shadow-sm border text-white">
                  <Award className="h-6 w-6 text-white" />
                  <div>
                    <div className="text-xs">Result</div>
                    <div className="text-sm font-semibold">Empowered Leaders</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'hardware', title: 'Hardware & Connectivity', label: 'Tablets, local servers' },
                  { key: 'curriculum', title: 'The BELM Curriculum', label: 'Critical thinking & citizenship' },
                  { key: 'mentorship', title: 'Mentorship', label: 'Guides from active leaders' },
                  { key: 'access', title: 'Digital Access', label: 'Offline-first content stacks' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onMouseEnter={() => setHoverPreview(item.key)}
                    onMouseLeave={() => setHoverPreview(null)}
                    className="relative flex items-start gap-3 p-4 rounded-lg bg-white/80 backdrop-blur-sm border shadow-sm text-left hover:shadow-md transition"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">
                      {/* icon selection */}
                      {item.key === 'hardware' && <Cloud className="h-5 w-5 text-primary" />}
                      {item.key === 'curriculum' && <BookOpen className="h-5 w-5 text-secondary" />}
                      {item.key === 'mentorship' && <Users className="h-5 w-5 text-accent" />}
                      {item.key === 'access' && <Tablet className="h-5 w-5 text-primary" />}
                    </div>

                    <div>
                      <div className="font-heading font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* hover preview */}
              <div className="mt-6">
                <div className="h-36 rounded-lg overflow-hidden border bg-white shadow-inner">
                  {hoverPreview ? (
                    <img
                      src={hoverImages[hoverPreview]}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Hover over a point to see a preview
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-[#008000] border border-[#1a9a5a] text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors duration-200 ease-out hover:bg-red-600 hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a9a5a]/30 cursor-pointer" onClick={handleFindHub}>
                Find a Tech Hub Near You
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Innovate for Impact */}
      <section id="innovate" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4" style={{ background: `${BRAND_BROWN}10`, color: BRAND_BROWN }}>
                Innovation Challenge
              </Badge>

              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Innovate for Impact Challenge</h2>
              <p className="mb-6 leading-relaxed">
                Knowledge without application is stagnation. BELM scholars identify local problems
                and propose data-driven solutions. Winners receive micro-grants and mentorship to
                bring ideas to life, turning learners into changemakers.
              </p>

              <div className="flex gap-4">
                <Button size="lg" style={{ background: BRAND_BLUE, color: '#fff' }}>
                  View Past Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  onClick={() => (window.location.href = '/get-involved')}
                  className="bg-[#008000] border border-[#1a9a5a] text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors duration-200 ease-out hover:bg-red-600 hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a9a5a]/30"
                >
                  Support a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/XfZ6ytp5/IMG-6393.avif"
                  alt="innovation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Future Pillars - Coming Soon 2x2 frosted grid */}
      <section id="coming-soon" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Expanding Our Horizon</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-3">
              We are building a holistic ecosystem. While BELM is our focus today, we are actively
              laying the groundwork for our full vision launching late 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Agriculture',
                image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=60&auto=format&fit=crop',
                overlay: 'Data-Driven Agriculture',
                micro: 'Empowering smallholder farmers with price prediction and climate-resilient strategies making Agriculture more Predictive, Productive, and Manageable for them.',
                status: 'In Development'
              },
              {
                title: 'Technology',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=60&auto=format&fit=crop',
                overlay: 'The Tech Frontier',
                micro: 'Advanced boot camps in Data Science, AI and Machine Learning.',
                status: 'Coming Early 2027'
              },
              {
                title: 'Leadership',
                image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&q=60&auto=format&fit=crop',
                overlay: 'Executive Leadership',
                micro: 'Ethical leadership fellowships for university-level scholars.',
                status: 'Curriculum Prototyping'
              },
              {
                title: 'Community',
                image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1600&q=60&auto=format&fit=crop',
                overlay: 'The Global Educated Leaders',
                micro: 'A lifelong support system connecting Leaders to a global community.',
                status: 'Loading...'
              }
            ].map((card) => (
              <div
                key={card.title}
                className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-gray-100 hover:shadow-2xl transition"
              >
                <div className="relative h-56">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover filter saturate-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-60"></div>
                  <div className="absolute left-6 bottom-6 right-6 text-white">
                    <div className="text-sm mb-1 uppercase tracking-wider font-semibold">{card.status}</div>
                    <div className="text-2xl font-heading font-bold">{card.overlay}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-lg font-semibold mb-2">{card.title}</div>
                  <div className="text-sm text-black mb-4">{card.micro}</div>
                </div>

                <div className="absolute left-0 right-0 bottom-0 h-0 group-hover:h-full transition-all pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#003366] via-[#0b5a4a] to-[#0f8b3b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Want to Get Involved?</h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Partner, volunteer, or support a project. Together we scale opportunities for the next
            generation of African leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ background: BRAND_BROWN, color: '#fff' }}>
              Volunteer With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button size="lg" variant="outline" className="text-white border-white">
              Partner With GEL
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
