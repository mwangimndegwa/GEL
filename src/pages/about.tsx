'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Users, TrendingUp, ArrowRight, Linkedin, Mail } from 'lucide-react';

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
      name: 'Kwame Mensah',
      role: 'Director of Programs',
      image: 'https://media.gettyimages.com/id/856955940/photo/studio-shot-of-young-handsome-african-businessman-wearing-blue-suit-and-eyeglasses-against.jpg?b=1&s=2048x2048&w=0&k=20&c=sehfPj91F5eTkAR2rATbjk454XfOpTA1xN73b1Go_CE=',
      bio: 'Tech entrepreneur and educator. Founded 3 successful EdTech startups across West Africa. MIT Sloan MBA.'
    },
    {
      name: 'Amina Zuma',
      role: 'BELM Program Director',
      image: 'https://i.ibb.co/67tVp047/a96eed79-d378-48b1-8bf0-c4e13ce70a45.jpg',
      bio: 'Operations expert with experience scaling nonprofits across 20+ countries. Former McKinsey consultant.'
    },
    {
      name: 'Collins Killi',
      role: 'Project Manager',
      image: 'https://media.gettyimages.com/id/639465722/photo/close-up-portrait-of-serious-man.jpg?b=1&s=2048x2048&w=0&k=20&c=73c5diJ1bK7IaQJ01dzaaROXkh_C9bwAofK0dUEsCgU=',
      bio: 'Holds an MS in Management with Project Management from BPP University and a Bachelor’s degree in Mathematics (Statistics). By combining his technical mastery of statistical modeling with ten years of community mentorship, Collins bridges the gap between complex data and real-world human rights solutions.'
    }
  ];

  const advisory = [
    {
      name: 'Prof. Chinua Achebe',
      role: 'Education Advisor',
      affiliation: 'University of Lagos'
    },
    {
      name: 'Dr. Wangari Mwangi',
      role: 'Sustainability Advisor',
      affiliation: 'African Development Bank'
    },
    {
      name: 'James Omondi',
      role: 'Technology Advisor',
      affiliation: 'Former CTO, Safaricom'
    },
    {
      name: 'Aisha Kamara',
      role: 'Community Development Advisor',
      affiliation: 'UN Women Africa'
    },
    {
      name: 'Dr. Kofi Annan Jr.',
      role: 'Leadership Advisor',
      affiliation: 'Harvard Kennedy School'
    },
    {
      name: 'Zainab Mohammed',
      role: 'Impact Measurement Advisor',
      affiliation: 'Gates Foundation'
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
              From a small group of passionate educators to a pan-African movement transforming communities.
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
                            "timeline-card inline-block bg-white/95 rounded-2xl shadow-lg border border-white/60 p-6 md:max-w-[520px] transition-transform duration-500 ease-out",
                            isLeft ? "md:translate-x-0" : "md:translate-x-0"
                          )}
                          role="article"
                          aria-labelledby={`story-${index}-title`}
                          tabIndex={0}
                          onClick={(e) => {
                            const card = e.currentTarget;
                            const isFlipped = card.dataset.flipped === 'true';
                            card.dataset.flipped = isFlipped ? 'false' : 'true';
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              const card = e.currentTarget;
                              const isFlipped = card.dataset.flipped === 'true';
                              card.dataset.flipped = isFlipped ? 'false' : 'true';
                            }
                          }}
                        >
                          <div className="card-face card-face--front relative">
                            <div className="flex items-center justify-between md:justify-start md:gap-4">
                              <span
                                className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold"
                                style={{ background: 'rgba(0,51,102,0.08)', color: '#003366' }}
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
                            <div className="absolute bottom-0 left-0 right-0 h-2 timeline-accent"></div>
                          </div>
                          <div className="card-face card-face--back bg-muted/50 p-6 rounded-2xl">
                            <p className="font-body text-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
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
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Compassion</h3>
                <p className="font-body text-muted-foreground">
                  We lead with empathy and understanding, putting people first in everything we do.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Excellence</h3>
                <p className="font-body text-muted-foreground">
                  We strive for the highest standards in our programs, partnerships, and impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Collaboration</h3>
                <p className="font-body text-muted-foreground">
                  We believe in the power of partnerships and community-driven solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Innovation</h3>
                <p className="font-body text-muted-foreground">
                  We embrace creative solutions and data-driven approaches to complex challenges.
                </p>
              </CardContent>
            </Card>
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
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group font-body">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group font-body">
              Contact Us
              <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
