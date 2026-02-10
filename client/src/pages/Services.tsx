/* Design: Organic Modernism - Services page with detailed program information */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Users, ClipboardCheck, Heart, Clock, Target, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blob-shape -translate-y-1/2 translate-x-1/4" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive ABA programs designed to empower individuals with
                autism and related disabilities to reach their full potential.
              </p>
            </div>
          </div>
        </section>

        {/* On-Site Group Program Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-foreground">
                    On-Site Group Program
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We house an intensive group ABA program for children ages 2-6
                  years old for 16-20 hours a week. The on-site group ABA program
                  encompasses a "pre-school" type setting where children attend a
                  highly structured group ABA Program for 4 hours a day.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  This program involves two critical components: One-to-one
                  intensive teaching sessions following the Lovaas method and other
                  scientifically validated approaches, and natural environment
                  teaching sessions to generalize the skills taught in the intensive
                  teaching sessions.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <Clock className="w-8 h-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Program Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        4 hours per day, 16-20 hours per week
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <Target className="w-8 h-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Age Range</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Children ages 2-6 years old
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Program Features
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "One-to-one intensive teaching sessions",
                    "Natural environment teaching",
                    "Art time and creative activities",
                    "Snack time and social skills",
                    "Community outings",
                    "Active games and physical development",
                    "Board games and cognitive skills",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Four qualified interventionists work across six children, with
                  1-to-1 instruction provided during the intensive teaching
                  sessions.
                </p>

                <Link href="/contact">
                  <Button size="lg" className="transition-all duration-300 hover:scale-105">
                    Inquire About This Program
                  </Button>
                </Link>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/1gQZpU9CnlZcWJ8HGLXzQB/sandbox/CjDVnPi7hPzce502XYcPYy-img-3_1770748566000_na1fn_Z3JvdXAtcHJvZ3JhbS1pbGx1c3RyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWdRWnBVOUNubFpjV0o4SEdMWHpRQi9zYW5kYm94L0NqRFZuUGk3aFB6Y2U1MDJYWWNQWXktaW1nLTNfMTc3MDc0ODU2NjAwMF9uYTFmbl9aM0p2ZFhBdGNISnZaM0poYlMxcGJHeDFjM1J5WVhScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K6iRvmAhiaFgnVV0qZkp37~XbgFJe7~uqs4T9-Ly~7duNJoGG1zwkpBgJYD5nuWY9m82DlMs6ObvZBzp0SDdAKwDR2hxoUhUQBk4OH4J0cg2UG4j95vwQl84MzQ1H7F6Kr6s~al0of1209EPduL2eGSrjBSebyjBF1KX7yfHPKWlYMfw~LnHs2EG4h8sMvhdg0piOsZe8Kb1dhyn5WkFKhtrZap4s8gxnF7yeaVWap57Y8HA2s2V5UzL2FLN6a-qdLAUjkcHRsG9vTH98KkT318389o~gxSz5pnCsYluvUq8epsfS4haJaNm5Nk3DRWmkATLxEgZ1xyoxissCO-Z9Q__"
                  alt="Group program"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Private Assessments Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/1gQZpU9CnlZcWJ8HGLXzQB/sandbox/CjDVnPi7hPzce502XYcPYy-img-4_1770748566000_na1fn_YXNzZXNzbWVudC1pbGx1c3RyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWdRWnBVOUNubFpjV0o4SEdMWHpRQi9zYW5kYm94L0NqRFZuUGk3aFB6Y2U1MDJYWWNQWXktaW1nLTRfMTc3MDc0ODU2NjAwMF9uYTFmbl9ZWE56WlhOemJXVnVkQzFwYkd4MWMzUnlZWFJwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aU4bMxxeVOaRO8jZ8Z4lUPdUasIXlKAdRExFvyUUy2y5fNVYpnjLTK0M2dRXdvhpNtDinrFWvJnfsCKSebnrT5YSBeYtoA0NTWD1UETwbud6J-UwzVjTe7dENG9FeodGzIxUob8QZ6xTyfpIHpzfzLx1V8JVs~p1sBoAmf1PeB78juSTvQEnn6FOQmGQcT4Lmqxo7HpgXESuIUpAgArhXa-rGQuroPp6VZPtKWYDCo-mx0gJDS-w~lbKVoLhAmyoUVxOBg6noL0w-xcSv1xk0IbAaNMcyS8fOTH-bk962dmJE78vzkbShCrc6WBrFXP3jgAlaDMD~kG04pjJVPh2zQ__"
                  alt="Private assessments"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center">
                    <ClipboardCheck className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-foreground">
                    Private Assessments
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Pacific ABA Academy is now offering Private Assessments for
                  Autism Spectrum Disorder (ASD). Our comprehensive assessments are
                  conducted by qualified professionals with extensive experience in
                  autism diagnosis and treatment planning.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Assessment Includes
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Comprehensive diagnostic evaluation",
                    "Detailed assessment report",
                    "Personalized treatment recommendations",
                    "Parent consultation and guidance",
                    "Follow-up support and resources",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="transition-all duration-300 hover:scale-105 hover:bg-accent/10"
                  >
                    Schedule an Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Contact us today to learn more about our programs and how we can
                help your child reach for the stars.
              </p>
              <Link href="/contact">
                <Button size="lg" className="transition-all duration-300 hover:scale-105">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
