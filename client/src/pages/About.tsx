/* Design: Organic Modernism - Professional About page with warm, approachable design */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Award, Globe, Heart, Users, Radio, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const initiatives = [
    {
      title: "Angels for Autism",
      subtitle: "Co-Founder, 2012",
      description: "Created alongside a panel of parents and professionals to help families fund home-based ABA programs.",
      icon: Heart,
    },
    {
      title: "The BC Autism Awards",
      subtitle: "Creator",
      description: "Established to recognize the unique talents of children affected by autism. Officially recognized in the BC Legislature in May 2014.",
      icon: Award,
    },
    {
      title: "Moving Forward Family Services",
      subtitle: "Board of Directors",
      description: "Leads a medical experts panel to provide free training, workshops (in English and Punjabi), and affordable counselling to families affected by ASD.",
      icon: Users,
    },
  ];

  const expertise = [
    "The Treehouse School for Autism (London, England)",
    "The University of Washington Autism Center (Seattle, Washington)",
    "The St. Amant Center (Winnipeg, Manitoba)",
  ];

  const media = [
    "Resident Autism Specialist on REDFM",
    "Featured Expert on Joy TV, OMNI News",
    "Women in Focus (2011)",
    "Canadian Rang",
    "The Times of Canada (2015)",
    "South Asian Health Magazine (2015)",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                About Pacific ABA Academy
              </h1>
              <p className="text-xl text-primary font-accent font-semibold mb-6">
                Empowering Children. Supporting Families. Reaching for the Stars.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Pacific ABA Academy, our mission is to provide families of children diagnosed with Autism Spectrum Disorder (ASD) with the highest quality Applied Behavior Analysis (ABA) programs. Established in 2008, our provincially recognized clinical practice has helped hundreds of children and families navigate the complexities of autism.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
                Our Philosophy
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                We believe that every child is unique and capable of achieving a high quality of life. Through individualized, 1:1 intensive ABA treatment, behaviour reduction strategies, and group-based therapies for children ages 2–18, we equip our clients with the critical language, social, cognitive, and academic skills they need to achieve independence.
              </p>

              {/* Culturally Responsive Care Card */}
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    Culturally Responsive Care
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We understand the importance of receiving care in your native language. To better serve the South Asian community, we provide therapists who speak Punjabi and Hindi, allowing us to work one-on-one with your child while effectively training families in their native tongue.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dr. Ramen Saggu Profile Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5">
          <div className="container">
            <h2 className="text-3xl font-display font-bold text-foreground mb-16 text-center">
              Meet Our Clinical Director & CEO
            </h2>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Headshot */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                    <img
                      src="/dr-ramen-saggu.png"
                      alt="Dr. Ramen Saggu"
                      className="relative w-full rounded-2xl shadow-lg object-cover"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-2">
                    Dr. Ramen Saggu
                  </h3>
                  <div className="flex flex-col gap-2 mb-6 text-sm font-accent text-primary">
                    <p>Ph.D. in Clinical Psychology</p>
                    <p>Board Certified Behaviour Analyst (BCBA)</p>
                    <p>Registered Autism Service Provider (RASP)</p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Dr. Ramen Saggu is a leading voice in autism treatment and advocacy in British Columbia. With over 20 years of dedicated experience in the field, she has been a Board Certified Behaviour Analyst (BCBA) since 2006 and is widely recognized as one of the most respected and talented South Asian behaviour consultants in the province.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    As the founder and CEO of Pacific ABA Academy, Dr. Saggu's clinical approach is deeply family-centered, focusing not just on the child, but on equipping the entire family unit with the tools to cope, adapt, and thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Expertise */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Global Expertise & Clinical Background
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Dr. Saggu's extensive expertise has been shaped by her work at some of the world's most prestigious autism and developmental centers:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {expertise.map((center, idx) => (
                  <Card key={idx} className="border-primary/20 hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <Globe className="w-5 h-5 text-primary" />
                        </div>
                        <p className="font-accent text-foreground leading-relaxed">{center}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Leadership */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container">
            <h2 className="text-3xl font-display font-bold text-foreground mb-16 text-center">
              Community Leadership & Advocacy
            </h2>

            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Dr. Saggu and her husband, Bobby, are passionate advocates dedicated to shifting the mainstream stigma surrounding autism—encouraging society to view autism as an "ability" rather than a "disability."
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {initiatives.map((initiative, idx) => {
                const Icon = initiative.icon;
                return (
                  <Card key={idx} className="border-primary/20 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{initiative.title}</CardTitle>
                      <CardDescription className="text-primary font-accent font-semibold">
                        {initiative.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {initiative.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Media & Awards */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Media Presence & Awards
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                A sought-after expert in the media, Dr. Saggu actively works to raise awareness and advocate for parents and children.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Media Appearances */}
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Radio className="w-6 h-6 text-primary" />
                      Media Appearances
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {media.map((outlet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{outlet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Awards */}
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-primary" />
                      Awards & Recognition
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-accent font-semibold text-foreground mb-2">2012 Shakti Award</p>
                      <p className="text-muted-foreground text-sm">
                        Prestigious award for her tireless work in the autism community.
                      </p>
                    </div>
                    <div>
                      <p className="font-accent font-semibold text-foreground mb-2">2014 Surrey Leader Community Award</p>
                      <p className="text-muted-foreground text-sm">
                        Honorable mention for her contributions to the autism community.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Commitment */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                A Personal Commitment
              </h2>

              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="pt-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Outside of her professional life, Dr. Saggu's main focus is her family. She is a devoted mother to three young boys and credits her supportive husband, Bobby, as the driving force behind her success. Encouraged by her parents, Ranjit and Balvinder Panesar, and her extended family, Dr. Saggu continues to follow her dreams—ensuring that every child she works with has the opportunity to reach for the stars.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Start Your Journey With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                With the right intervention and guidance, children with autism can do amazing things. Contact Pacific ABA Academy today to learn more about our onsite and home-based ABA programs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="font-accent">
                    Book a Consultation
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="font-accent">
                    Contact Our Clinic
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
