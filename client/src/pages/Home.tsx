/* Design: Organic Modernism - Flowing asymmetric layout with warm colors and gentle animations */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Users, ClipboardCheck, Heart, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Asymmetric 60/40 split with organic background */}
        <section
          ref={heroRef}
          className="relative min-h-[90vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/1gQZpU9CnlZcWJ8HGLXzQB/sandbox/CjDVnPi7hPzce502XYcPYy-img-1_1770748559000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWdRWnBVOUNubFpjV0o4SEdMWHpRQi9zYW5kYm94L0NqRFZuUGk3aFB6Y2U1MDJYWWNQWXktaW1nLTFfMTc3MDc0ODU1OTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=J60YQi9YPZM2C9Z7lNVCSkKeunY-LxLFuWh~C6XeCqW9n8qTGMMUMrH6VX6IAy90dIpKysYzwacZjuOmgHTW6isjVvKZ2FWtL2efrLMSCWA1Q6XiBJywoKxJio~UCMp-GKtIaQxh7Im0wtKPRM6bkSF9rbDB3kkN70ZvlfLDxOFo-NH8-wEJBG5oMUNjagGKo-Y9xWGinnBXOfbxxtnEu2l6LGXsh7AnjmysyE6J38FiIeKLLxoVXdz9FpNrvybYZJvjPRCVgd8PmRLgJE9KNVAUQ6eRZ4LZszQOALyX1T0vq04z1aqwnE1bC2WuTFZh4DX-LC9aoC9lSnbC2Ysepg__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left content - 60% */}
              <div
                className={`lg:col-span-3 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
                  Welcome to<br />
                  <span className="text-primary">Pacific ABA Academy</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  Providing scientifically validated ABA treatment to individuals
                  diagnosed with Autism and related disabilities. We empower those
                  with special needs to reach for the stars.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  Under the clinical supervision of <strong>Dr. Ramen Saggu, PhD, BCBA</strong>, our experienced team delivers evidence-based, individualized services for children and families in British Columbia.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/services">
                    <Button
                      size="lg"
                      className="font-accent text-base group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Explore Our Services
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-accent text-base transition-all duration-300 hover:scale-105 hover:bg-accent/10"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right image - 40% */}
              <div
                className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <div className="relative">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/1gQZpU9CnlZcWJ8HGLXzQB/sandbox/CjDVnPi7hPzce502XYcPYy-img-2_1770748566000_na1fn_Y2hpbGQtcmVhY2hpbmctc3RhcnM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWdRWnBVOUNubFpjV0o4SEdMWHpRQi9zYW5kYm94L0NqRFZuUGk3aFB6Y2U1MDJYWWNQWXktaW1nLTJfMTc3MDc0ODU2NjAwMF9uYTFmbl9ZMmhwYkdRdGNtVmhZMmhwYm1jdGMzUmhjbk0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Dw1-ptxeQhGxX2NxVVLItHhusUNs6f423OBFkEkVKG8F3pWlLZ1enkD3ZoOzovlREh6MtDYo1B~niqJAjXoc6Am3a54lb-G-euqqLomSSQnh9Ix-azjVB4nAf~69XIqOiE97d1fDpqHBd~XUZLeXejGKQYje7sebbYmpBmShYK4fPtuduxFVXy9JlzfmPjjcUL2MK0IObpJGZ6xvbWhmaRehn7FnJEc6fbzWNrZ1d900ccpsQXh17TyhpN~R65wbxc~TAfoVu0yU~bfqH5uhNnoWYhHpcnBGNAFWpoZWugOYvqQUv4hnsPLUIwRnIPYHo89zpj4W9t-2T1WnkuCSyg__"
                    alt="Children reaching for stars"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                  {/* Decorative blob accent */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 blob-shape -z-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Wave divider at bottom */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-24"
            >
              <path
                d="M0,0 C300,80 600,80 900,40 L1200,0 L1200,120 L0,120 Z"
                fill="currentColor"
                className="text-background"
              />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive, evidence-based ABA programs tailored to each child's unique needs and developmental stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* Pre-Diagnostic Intervention Program Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663345785943/AvwZ782cpoEQkTwQwTz254/pre-diagnostic-intervention-clean-Z3VotHCDyxLjbahhdSjrV9.webp"
                    alt="Pre-Diagnostic Intervention Program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Zap className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-display">
                      Pre-Diagnostic Intervention
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    Support while you wait for assessment or formal diagnosis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our Pre-Diagnostic Intervention Program supports young children awaiting autism assessment during critical developmental periods. Delivered by our experienced ABA team under Dr. Ramen Saggu's clinical supervision, this program provides timely, meaningful support without requiring a formal diagnosis.
                  </p>
                  <Link href="/services">
                    <Button className="w-full group/btn transition-all duration-300 hover:shadow-lg">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Intensive 1:1 Program Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/1gQZpU9CnlZcWJ8HGLXzQB/sandbox/CjDVnPi7hPzce502XYcPYy-img-4_1770748566000_na1fn_YXNzZXNzbWVudC1pbGx1c3RyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWdRWnBVOUNubFpjV0o4SEdMWHpRQi9zYW5kYm94L0NqRFZuUGk3aFB6Y2U1MDJYWWNQWXktaW1nLTRfMTc3MDc0ODU2NjAwMF9uYTFmbl9ZWE56WlhOemJXVnVkQzFwYkd4MWMzUnlZWFJwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aU4bMxxeVOaRO8jZ8Z4lUPdUasIXlKAdRExFvyUUy2y5fNVYpnjLTK0M2dRXdvhpNtDinrFWvJnfsCKSebnrT5YSBeYtoA0NTWD1UETwbud6J-UwzVjTe7dENG9FeodGzIxUob8QZ6xTyfpIHpzfzLx1V8JVs~p1sBoAmf1PeB78juSTvQEnn6FOQmGQcT4Lmqxo7HpgXESuIUpAgArhXa-rGQuroPp6VZPtKWYDCo-mx0gJDS-w~lbKVoLhAmyoUVxOBg6noL0w-xcSv1xk0IbAaNMcyS8fOTH-bk962dmJE78vzkbShCrc6WBrFXP3jgAlaDMD~kG04pjJVPh2zQ__"
                    alt="1:1 intensive program"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Users className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-display">
                      Intensive 1:1 Programs
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    Individualized ABA therapy for toddlers and preschoolers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our clinic-based 1:1 programs use the Lovaas approach with natural environment teaching. Available for children under 6, these programs include speech and language therapy and focus on building foundational skills for learning and development.
                  </p>
                  <Link href="/services">
                    <Button className="w-full group/btn transition-all duration-300 hover:shadow-lg">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Group Programs Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/1gQZpU9CnlZcWJ8HGLXzQB/sandbox/CjDVnPi7hPzce502XYcPYy-img-3_1770748566000_na1fn_Z3JvdXAtcHJvZ3JhbS1pbGx1c3RyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWdRWnBVOUNubFpjV0o4SEdMWHpRQi9zYW5kYm94L0NqRFZuUGk3aFB6Y2U1MDJYWWNQWXktaW1nLTNfMTc3MDc0ODU2NjAwMF9uYTFmbl9aM0p2ZFhBdGNISnZaM0poYlMxcGJHeDFjM1J5WVhScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K6iRvmAhiaFgnVV0qZkp37~XbgFJe7~uqs4T9-Ly~7duNJoGG1zwkpBgJYD5nuWY9m82DlMs6ObvZBzp0SDdAKwDR2hxoUhUQBk4OH4J0cg2UG4j95vwQl84MzQ1H7F6Kr6s~al0of1209EPduL2eGSrjBSebyjBF1KX7yfHPKWlYMfw~LnHs2EG4h8sMvhdg0piOsZe8Kb1dhyn5WkFKhtrZap4s8gxnF7yeaVWap57Y8HA2s2V5UzL2FLN6a-qdLAUjkcHRsG9vTH98KkT318389o~gxSz5pnCsYluvUq8epsfS4haJaNm5Nk3DRWmkATLxEgZ1xyoxissCO-Z9Q__"
                    alt="Group programs"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Users className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-display">
                      Group Programs
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    Preschool and school readiness group-based ABA programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our group programs combine structured ABA with 1:1 instruction, emphasizing social skills, peer interaction, and school readiness. Available for ages 2-6, these programs include speech and language therapy and focus on generalization of skills.
                  </p>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="w-full group/btn transition-all duration-300 hover:bg-accent/10 hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Speech & Language Therapy Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 overflow-hidden">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                  <Heart className="w-24 h-24 text-accent/30" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Heart className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-display">
                      Speech & Language Therapy
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    Integrated communication support by Speech-Language Pathologists
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our SLPs work as part of our interdisciplinary autism team, using evidence-based, autism-affirming practices to develop meaningful communication skills. Services include family coaching and strategies for carryover at home and school.
                  </p>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="w-full group/btn transition-all duration-300 hover:bg-accent/10 hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-105">
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blob-shape -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 blob-shape translate-x-1/2 translate-y-1/2" />

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                It is our goal to provide motivation and self-empowerment to teach
                individuals touched with special needs that{" "}
                <span className="text-primary font-semibold">
                  the sky is the limit
                </span>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Under the clinical leadership of Dr. Ramen Saggu, PhD, BCBA, we deliver evidence-based, individualized ABA services that help children and families in British Columbia reach their full potential.
              </p>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-accent text-base transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                >
                  Learn More About Us
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
