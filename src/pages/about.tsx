'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Users, TrendingUp, ArrowRight, Linkedin, Mail, Shield, Lightbulb, Globe } from 'lucide-react';

export default function AboutPage() {
  const timeline = [
    {
      year: '2022',
      title: 'Roots of Resilience',
      description: 'Born and raised in Kenya’s informal settlements, our founder returned to the soil to create rural jobs and food security. But in 2023, a brutal drought turned a thriving harvest into total loss, wiping out every cent of investment. This heartbreak revealed a hard truth: passion alone isn’t enough. To survive, African leadership must bridge the gap between tradition and data-driven resilience.'    
    },
    {
      year: '2024',
      title: 'The Geneva Spark',
      description: 'While standing in the UN Headquarters, our founder saw more than just diplomats; he witnessed leaders from forgotten corners of the world sharing identical struggles. This experience moved him to realize that while international standards exist, the "soul" of leadership is found in personal connection. It sparked the vision for GEL: To create a global tapestry where a grassroots farmer and a tech innovator can share a table, trade stories, and build a world where no leader walks alone.'
    },
    {
      year: '2025',
      title: 'The ASU Launchpad',
      description: 'Validated by the Mastercard Foundation Scholarship, our founder joined Arizona State University—the #1 US school for innovation. This launchpad fueled a dual mission: scaling world-class leadership insights globally while bridging the digital divide for underserved children, ensuring they access the same cutting-edge knowledge as the world’s elite institutions.'
    },
    {
      year: '2025',
      title: 'GEL is Formally Revealed',
      description: 'Following a period of strategic reflection, the "Global Educated Leaders" framework was born—integrating Education, Agriculture, Tech, and Leadership into one cohesive mission for community-led global transformation.'
    },
    {
      year: '2025',
      title: 'Seed Funding',
      description: 'GEL secured initial capital, transitioning from a concept to an operational organization and launching our first student-led community initiatives.'
    },
    {
      year: 'FUTURE',
      title: 'Scaling the Global Network',
      description: 'From our first pilots in Kenya to a continent-wide network, GEL is building a community of purpose-driven changemakers committed to making Africa a self-sustaining global powerhouse.'
    }
  ];

  const leadership = [
    {
      name: 'Mwangi M. Ndegwa',
      role: 'Founder & Executive Director',
      image: 'https://i.ibb.co/6JH02mVx/IMG-3979.jpg',
      bio: 'Former Chair of the Executive Board of Kenya with 7+ years of experience in Non-Profits. Currently an MS Student in Data Science, Analytics, and Engineering at Arizona State University.'
    },
    {
      name: 'Esther Lozi',
      role: 'Country Director, Kenya',
      image: 'https://i.ibb.co/XrhtZsXJ/cropped.jpg',
      bio: 'Environmental and GIS professional, with 4+ years of experience in sustainable development and community-based projects. University of Nairobi alumnus passionate in environmental monitoring, project planning, and community impact.'
    },
    {
      name: 'Amina Zuma',
      role: 'BELM Program Director',
      image: 'https://i.ibb.co/67tVp047/a96eed79-d378-48b1-8bf0-c4e13ce70a45.jpg',
      bio: 'With 4+ years of experience in community mobilization and youth development, she is a distinguished SUSI Alumna and a dedicated healthcare professional in training, currently completing her B.Sc. in Nursing at Pwani University.'
    },
    {
      name: 'Collins Kili',
      role: 'Project Manager',
      image: 'https://i.ibb.co/F4z80WnY/crop.jpg',
      bio: 'Holds an MS in Management with Project Management from BPP University. With a technical mastery of statistical modeling with 10+ years of community engagement, he bridges the gap between complex data and real-world solutions.'
    }
  ];

  const advisory = [
    {
      name: 'Coach Godfrey Otero',
      role: 'Sustainability Advisor',
      affiliation: 'University of Lagos'
    },
    {
      name: 'Marlene Morris',
      role: 'Education Advisor',
      affiliation: 'AgapeCode Doula LLC'
    },
    {
      name: 'Ann Njenga',
      role: 'Agriculture Strategist',
      affiliation: 'Principal Agricultural Practitioner'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="font-body text-xl md:text-2xl opacity-95 leading-relaxed">
              We are Global Educated Leaders (GEL), a nonprofit organization managed and run by 100% Volunteers dedicated to cultivating data-driven leaders and transforming communities globally.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold mb-4">Our Mission</h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  To cultivate a global community of leaders who leverage data and technology to drive sustainable development, foster social impact, improve food security, and promote equitable economic opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="font-heading text-3xl font-bold mb-4">Our Vision</h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  To create a world where empowered, data-driven leaders transform nations through knowledge, innovation, and ethical action.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      {/* Our Story Timeline - upgraded for international / world-class presentation */}
      <section id="story" className="py-20 md:py-28 bg-muted relative overflow-hidden">
        {/* subtle background texture / diagonal light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(3,51,102,0.03) 0%, rgba(181,101,29,0.02) 40%, transparent 100%)'
          }}
        />

        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Story
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              From a small group of passionate community leaders to a global movement transforming communities.
            </p>
          </div>

          {/* Timeline wrapper */}
          <div className="max-w-6xl mx-auto relative">
            {/* central vertical line */}
            <div className="absolute left-1/2 top-6 bottom-6 w-[2px] bg-border transform -translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="relative">
                    <div className="md:grid md:grid-cols-2 md:items-start">
                      {/* Left column (content or empty) */}
                      <div
                        className={cn(
                          "md:px-6 md:py-2",
                          isLeft ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"
                        )}
                      >
                        {/* Card content */}
                        <div
                          className={cn(
                            "timeline-card relative inline-block bg-white/95 rounded-2xl shadow-lg border border-white/60 p-6 md:max-w-[520px] transition-transform duration-500 ease-out",
                            isLeft ? "md:translate-x-0" : "md:translate-x-0"
                          )}
                          role="article"
                          aria-labelledby={`story-${index}-title`}
                        >
                          <div className="flex items-center justify-between md:justify-start md:gap-4">
                            <span
                              className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold"
                              style={{ background: '#008000', color: 'white' }}
                            >
                              {item.year}
                            </span>

                            {/* optional small icon placeholder - replace with real icon */}
                            {item.icon && (
                              <span className="ml-3 hidden md:inline-flex items-center justify-center rounded-full w-10 h-10 bg-[#F6F3EF]">
                                <item.icon className="w-5 h-5 text-[#B5651D]" />
                              </span>
                            )}
                          </div>

                          <h3 id={`story-${index}-title`} className="font-heading text-2xl font-bold mt-4 mb-2" style={{ color: '#003366' }}>
                            {item.title}
                          </h3>
                          <p className="font-body leading-relaxed" style={{ color: '#003366' }}>
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer column for the opposite side on large screens */}
                      <div className="hidden md:block md:w-8" />

                      {/* Timeline marker column (center) */}
                      <div className="md:col-span-2 pointer-events-none">
                        {/* absolute marker placed at the correct Y position */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 md:translate-y-0">
                          <div
                            className="w-6 h-6 rounded-full ring-4 ring-white border-2 border-[#B5651D] bg-[#B5651D] shadow-lg"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Leadership Team */}
      <section id="team" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate leaders driving our mission forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {leadership.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden rounded-t-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-1">{member.name}</h3>
                    <p className="font-body text-sm text-primary font-semibold mb-3">{member.role}</p>
                    <p className="font-body text-sm text-muted-foreground mb-4">{member.bio}</p>
                    {/* LinkedIn icon for Mwangi M. Ndegwa only */}
                    {member.name === 'Mwangi M. Ndegwa' && (
                      <div className="flex gap-2">
                        <a
                          href="https://ke.linkedin.com/in/mwangimndegwa"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Mwangi M. Ndegwa LinkedIn"
                          className="inline-flex items-center justify-center h-8 w-8 rounded border border-gray-300 hover:bg-primary/10 transition-colors"
                        >
                          <Linkedin className="h-4 w-4 text-[#0077b5]" />
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section id="advisory" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Advisory Board</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Distinguished experts guiding our strategic direction and impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advisory.map((advisor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold mb-1">{advisor.name}</h3>
                      <p className="font-body text-sm text-primary font-semibold mb-1">{advisor.role}</p>
                      <p className="font-body text-xs text-muted-foreground">{advisor.affiliation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that drives our day-to-day commitment.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Top row - 3 tiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-2">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">Service & Love</h3>
                  <p className="font-body text-muted-foreground">
                    Rooted in Galatians 5:13, we believe in using our freedom to serve others through love.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">Ethics & Integrity</h3>
                  <p className="font-body text-muted-foreground">
                    We maintain high ethical standards in all operations, ensuring that leadership is practiced with empathy and transparency rather than conflict.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">Equity & Inclusion</h3>
                  <p className="font-body text-muted-foreground">
                    We are committed to bridging the digital divide, ensuring the same access to world-class tools as those in elite institutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom row - 2 tiles centered */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <Card className="text-center border-2 w-full md:w-[calc(33.333%-1.33rem)]">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                    <Lightbulb className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">Innovation</h3>
                  <p className="font-body text-muted-foreground">
                    Moving away from tradition only approaches, we prioritize creative solutions and technical approaches to complex challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 w-full md:w-[calc(33.333%-1.33rem)]">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">Global Citizenship</h3>
                  <p className="font-body text-muted-foreground">
                    We strive to make African students and leaders competitive on the world stage by fostering a global network of collaboration and knowledge sharing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="font-body text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Be part of the movement transforming Africa through education, leadership, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="text-lg px-8 py-6 group font-body rounded bg-secondary text-primary-foreground hover:bg-secondary/80 transition-colors inline-flex items-center justify-center"
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:info@globaleducatedleaders.org?subject=GEL%20Team%20Inquiry%20from%20About%20Page"
              className="text-lg px-8 py-6 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group font-body rounded inline-flex items-center justify-center"
            >
              Contact Us
              <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
