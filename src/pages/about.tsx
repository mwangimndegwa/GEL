'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Users, TrendingUp, ArrowRight, Linkedin, Mail } from 'lucide-react';

export default function AboutPage() {
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded by a group of passionate educators and community leaders who saw the need for data-driven leadership development in Africa.'
    },
    {
      year: '2019',
      title: 'First BELM Cohort',
      description: 'Launched our flagship Building Educated Leadership Minds program with 50 participants across 3 countries.'
    },
    {
      year: '2020',
      title: 'Digital Expansion',
      description: 'Adapted to virtual learning and expanded our reach to 10 countries, training 200+ leaders during the pandemic.'
    },
    {
      year: '2021',
      title: 'Learning Hubs Launch',
      description: 'Opened our first 5 Curated Learning Hubs in underserved communities, providing access to quality education resources.'
    },
    {
      year: '2022',
      title: 'Innovation Challenge',
      description: 'Launched Innovate for Impact, our annual challenge bringing together 200+ youth to solve local challenges.'
    },
    {
      year: '2023',
      title: 'Pan-African Network',
      description: 'Established partnerships across 15 countries, creating a robust network of leaders and changemakers.'
    },
    {
      year: '2024',
      title: 'Scaling Impact',
      description: 'Reached 5,000+ leaders trained, 50+ communities impacted, and launched 15+ active programs across the continent.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Amara Okafor',
      role: 'Founder & Executive Director',
      image: 'https://media.gettyimages.com/id/2195938350/photo/professional-woman-smiling-confidently-standing-in-corporate-setting-representing-leadership.jpg?b=1&s=2048x2048&w=0&k=20&c=IAcqQnYCPzde6mF9RWNhNz8BDqdxVI5J7lDV7VfrA7I=',
      bio: 'Former World Bank consultant with 15+ years in international development. PhD in Education Policy from Oxford University.'
    },
    {
      name: 'Kwame Mensah',
      role: 'Director of Programs',
      image: 'https://media.gettyimages.com/id/856955940/photo/studio-shot-of-young-handsome-african-businessman-wearing-blue-suit-and-eyeglasses-against.jpg?b=1&s=2048x2048&w=0&k=20&c=sehfPj91F5eTkAR2rATbjk454XfOpTA1xN73b1Go_CE=',
      bio: 'Tech entrepreneur and educator. Founded 3 successful EdTech startups across West Africa. MIT Sloan MBA.'
    },
    {
      name: 'Fatima Hassan',
      role: 'Director of Operations',
      image: 'https://media.gettyimages.com/id/1340008640/photo/closeup-shot-of-a-young-businesswoman-at-work.jpg?b=1&s=2048x2048&w=0&k=20&c=gUoPIOLwDX1kkdm5GuS_4zELxv-tPGtR8e7t1YXXb7A=',
      bio: 'Operations expert with experience scaling nonprofits across 20+ countries. Former McKinsey consultant.'
    },
    {
      name: 'Thabo Ndlovu',
      role: 'Director of Innovation',
      image: 'https://media.gettyimages.com/id/639465722/photo/close-up-portrait-of-serious-man.jpg?b=1&s=2048x2048&w=0&k=20&c=73c5diJ1bK7IaQJ01dzaaROXkh_C9bwAofK0dUEsCgU=',
      bio: 'Innovation strategist and design thinking expert. Led innovation labs at Google and Microsoft Africa.'
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
              We are Global Educated Leaders (GEL), a nonprofit organization dedicated to cultivating data-driven leaders and transforming communities across Africa.
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
                  To cultivate data-driven leaders and empower communities across Africa through education, innovation, and sustainable development programs that create lasting impact.
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
                  A transformed Africa where every community has access to quality education, strong leadership, and the tools needed to drive sustainable development and prosperity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section id="story" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Story</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small group of passionate educators to a pan-African movement transforming communities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 border-4 border-background" />
                  
                  <Card className="ml-16 md:ml-0 md:w-[calc(100%-2rem)]">
                    <CardContent className="p-6">
                      <Badge className="mb-3 font-body">{item.year}</Badge>
                      <h3 className="font-heading text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="font-body text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
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
