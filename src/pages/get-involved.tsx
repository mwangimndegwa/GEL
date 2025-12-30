'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Users, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function GetInvolvedPage() {
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

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
              Get Involved
            </h1>
            <p className="font-body text-xl md:text-2xl opacity-95 leading-relaxed">
              Join us in transforming Africa through education, leadership, and innovation. Your support creates lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="volunteer" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="volunteer" className="font-body text-base">
                <Users className="h-5 w-5 mr-2" />
                Volunteer
              </TabsTrigger>
              <TabsTrigger value="partner" className="font-body text-base">
                <Handshake className="h-5 w-5 mr-2" />
                Partner
              </TabsTrigger>
              <TabsTrigger value="donate" className="font-body text-base">
                <Heart className="h-5 w-5 mr-2" />
                Donate
              </TabsTrigger>
            </TabsList>

            {/* Volunteer Tab */}
            <TabsContent value="volunteer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                    Volunteer With Us
                  </h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    Join our community of passionate volunteers making a real difference across Africa. Whether you have a few hours a week or want to commit to a long-term project, there's a place for you.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Program Mentorship</h3>
                        <p className="font-body text-sm text-muted-foreground">Guide and mentor participants in our BELM leadership program.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Learning Hub Support</h3>
                        <p className="font-body text-sm text-muted-foreground">Help run our learning hubs and support students with their education.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Skills-Based Volunteering</h3>
                        <p className="font-body text-sm text-muted-foreground">Contribute your professional skills in tech, marketing, finance, or other areas.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Event Support</h3>
                        <p className="font-body text-sm text-muted-foreground">Help organize and run our innovation challenges and community events.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Volunteer Application</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!volunteerSubmitted ? (
                      <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="font-body">First Name</Label>
                            <Input id="firstName" required className="font-body" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="font-body">Last Name</Label>
                            <Input id="lastName" required className="font-body" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-body">Email</Label>
                          <Input id="email" type="email" required className="font-body" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-body">Phone Number</Label>
                          <Input id="phone" type="tel" className="font-body" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location" className="font-body">Location (City, Country)</Label>
                          <Input id="location" required className="font-body" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="interest" className="font-body">Area of Interest</Label>
                          <Select required>
                            <SelectTrigger className="font-body">
                              <SelectValue placeholder="Select an area" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mentorship" className="font-body">Program Mentorship</SelectItem>
                              <SelectItem value="learning-hub" className="font-body">Learning Hub Support</SelectItem>
                              <SelectItem value="skills" className="font-body">Skills-Based Volunteering</SelectItem>
                              <SelectItem value="events" className="font-body">Event Support</SelectItem>
                              <SelectItem value="other" className="font-body">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="availability" className="font-body">Availability</Label>
                          <Select required>
                            <SelectTrigger className="font-body">
                              <SelectValue placeholder="Select your availability" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="few-hours" className="font-body">A few hours per week</SelectItem>
                              <SelectItem value="part-time" className="font-body">Part-time (10-20 hours/week)</SelectItem>
                              <SelectItem value="full-time" className="font-body">Full-time commitment</SelectItem>
                              <SelectItem value="flexible" className="font-body">Flexible/Project-based</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="font-body">Tell us about yourself and why you want to volunteer</Label>
                          <Textarea id="message" rows={4} required className="font-body" />
                        </div>
                        <Button type="submit" size="lg" className="w-full font-body group">
                          Submit Application
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                          <CheckCircle2 className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-2">Thank You!</h3>
                        <p className="font-body text-muted-foreground">
                          Your volunteer application has been received. We'll be in touch soon!
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Partner Tab */}
            <TabsContent value="partner">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                    Partner With GEL
                  </h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    We collaborate with organizations, corporations, and institutions that share our vision for a transformed Africa. Together, we can amplify our impact and create sustainable change.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Corporate Partnerships</h3>
                        <p className="font-body text-sm text-muted-foreground">CSR programs, employee engagement, and strategic collaborations.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Educational Institutions</h3>
                        <p className="font-body text-sm text-muted-foreground">Research collaborations, student programs, and knowledge exchange.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">NGO Collaborations</h3>
                        <p className="font-body text-sm text-muted-foreground">Joint programs, resource sharing, and collective impact initiatives.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Government Partnerships</h3>
                        <p className="font-body text-sm text-muted-foreground">Policy development, program implementation, and capacity building.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Partnership Inquiry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!partnerSubmitted ? (
                      <form onSubmit={handlePartnerSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="orgName" className="font-body">Organization Name</Label>
                          <Input id="orgName" required className="font-body" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="orgType" className="font-body">Organization Type</Label>
                          <Select required>
                            <SelectTrigger className="font-body">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="corporate" className="font-body">Corporate</SelectItem>
                              <SelectItem value="educational" className="font-body">Educational Institution</SelectItem>
                              <SelectItem value="ngo" className="font-body">NGO/Nonprofit</SelectItem>
                              <SelectItem value="government" className="font-body">Government</SelectItem>
                              <SelectItem value="foundation" className="font-body">Foundation</SelectItem>
                              <SelectItem value="other" className="font-body">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="contactName" className="font-body">Contact Name</Label>
                            <Input id="contactName" required className="font-body" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactTitle" className="font-body">Title/Position</Label>
                            <Input id="contactTitle" required className="font-body" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partnerEmail" className="font-body">Email</Label>
                          <Input id="partnerEmail" type="email" required className="font-body" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partnerPhone" className="font-body">Phone Number</Label>
                          <Input id="partnerPhone" type="tel" className="font-body" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website" className="font-body">Website</Label>
                          <Input id="website" type="url" className="font-body" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partnershipType" className="font-body">Partnership Interest</Label>
                          <Select required>
                            <SelectTrigger className="font-body">
                              <SelectValue placeholder="Select partnership type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="funding" className="font-body">Funding/Grants</SelectItem>
                              <SelectItem value="program" className="font-body">Program Collaboration</SelectItem>
                              <SelectItem value="csr" className="font-body">CSR Partnership</SelectItem>
                              <SelectItem value="research" className="font-body">Research Collaboration</SelectItem>
                              <SelectItem value="resource" className="font-body">Resource Sharing</SelectItem>
                              <SelectItem value="other" className="font-body">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="partnerMessage" className="font-body">Tell us about your organization and partnership goals</Label>
                          <Textarea id="partnerMessage" rows={4} required className="font-body" />
                        </div>
                        <Button type="submit" size="lg" className="w-full font-body group">
                          Submit Inquiry
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                          <CheckCircle2 className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold mb-2">Thank You!</h3>
                        <p className="font-body text-muted-foreground">
                          Your partnership inquiry has been received. Our team will contact you shortly.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Donate Tab */}
            <TabsContent value="donate">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                    Support Our Mission
                  </h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Your donation directly supports our programs and helps us reach more communities across Africa. Every contribution makes a difference.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <Card className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold font-heading text-primary mb-2">$50</div>
                      <p className="font-body text-sm text-muted-foreground mb-4">
                        Provides learning materials for 5 students
                      </p>
                      <Button className="w-full font-body">Donate $50</Button>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:shadow-lg transition-shadow border-primary">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold font-heading text-primary mb-2">$150</div>
                      <p className="font-body text-sm text-muted-foreground mb-4">
                        Sponsors one month of mentorship for a leader
                      </p>
                      <Button className="w-full font-body">Donate $150</Button>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold font-heading text-primary mb-2">$500</div>
                      <p className="font-body text-sm text-muted-foreground mb-4">
                        Funds a complete BELM program scholarship
                      </p>
                      <Button className="w-full font-body">Donate $500</Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Custom Donation Amount</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="amount" className="font-body">Donation Amount (USD)</Label>
                        <Input id="amount" type="number" placeholder="Enter amount" min="1" required className="font-body text-lg" />
                      </div>
                      <div className="space-y-2">
                        <Label className="font-body">Donation Frequency</Label>
                        <div className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="one-time" defaultChecked />
                            <label htmlFor="one-time" className="font-body text-sm cursor-pointer">
                              One-time
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="monthly" />
                            <label htmlFor="monthly" className="font-body text-sm cursor-pointer">
                              Monthly
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="annual" />
                            <label htmlFor="annual" className="font-body text-sm cursor-pointer">
                              Annual
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="designation" className="font-body">Designate Your Donation (Optional)</Label>
                        <Select>
                          <SelectTrigger className="font-body">
                            <SelectValue placeholder="Where it's needed most" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general" className="font-body">Where it's needed most</SelectItem>
                            <SelectItem value="belm" className="font-body">BELM Program</SelectItem>
                            <SelectItem value="learning-hubs" className="font-body">Learning Hubs</SelectItem>
                            <SelectItem value="innovation" className="font-body">Innovation Challenge</SelectItem>
                            <SelectItem value="scholarships" className="font-body">Scholarships</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="bg-muted rounded-lg p-6">
                        <h3 className="font-heading font-semibold mb-3">Your Impact</h3>
                        <ul className="space-y-2 font-body text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            100% of your donation goes directly to programs
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            Tax-deductible in eligible countries
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            Receive impact reports and updates
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            Secure payment processing
                          </li>
                        </ul>
                      </div>
                      <Button type="submit" size="lg" className="w-full font-body group">
                        Proceed to Payment
                        <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="mt-12 text-center">
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Other ways to give: Corporate matching, planned giving, stock donations, and in-kind contributions.
                  </p>
                  <Button variant="link" className="font-body">
                    Learn more about giving options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
