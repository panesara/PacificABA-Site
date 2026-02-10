/* Design: Organic Modernism - Services page with detailed program information */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Users, ClipboardCheck, Heart, Clock, Target, Sparkles, Zap, BookOpen } from "lucide-react";
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
                Comprehensive, evidence-based ABA programs designed to empower individuals with autism and related disabilities. All services are delivered under the clinical supervision of Dr. Ramen Saggu, PhD, BCBA.
              </p>
            </div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-20 bg-background">
          <div className="container">
            {/* Service 1: Pre-Diagnostic Intervention */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl font-display font-bold text-foreground">
                      Pre-Diagnostic Intervention Program
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    <strong>While You Wait for Assessment</strong>
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our Pre-Diagnostic Intervention Program is designed to support young children who are awaiting an autism assessment or formal diagnosis in British Columbia. Long waitlists can delay access to services during a critical period of development — this program ensures children and families receive timely, meaningful support while they wait.
                  </p>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Program Highlights
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Individualized, evidence-based services delivered under Dr. Ramen Saggu's clinical supervision",
                      "No formal autism diagnosis required",
                      "Appropriate for children showing developmental differences, communication delays, or early signs consistent with autism",
                      "Focus on functional skill development and caregiver support",
                      "Flexible service packages tailored to your child's needs",
                      "Parent coaching and guidance while navigating assessment waitlists",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Skill Areas Targeted
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { title: "Communication & Language", items: "Functional communication, language skills, imitation, joint attention" },
                      { title: "Social & Play Skills", items: "Functional play, turn-taking, peer interaction, social engagement" },
                      { title: "Learning & Readiness", items: "Attending to instructions, learning-to-learn skills, task engagement" },
                      { title: "Behaviour & Regulation", items: "Reducing challenging behaviours, coping strategies, emotional regulation" },
                      { title: "Daily Living Skills", items: "Following routines, self-help skills, independence" },
                      { title: "Caregiver Support", items: "Parent coaching, strategy training, skill carryover at home" },
                    ].map((area, index) => (
                      <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg">{area.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{area.items}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="transition-all duration-300 hover:scale-105">
                      Learn More or Inquire
                    </Button>
                  </Link>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-96 flex items-center justify-center">
                    <Zap className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Toddler & Preschool 1:1 */}
            <div className="mb-20 border-t border-border pt-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/1gQZpU9CnlZcWJ8HGLXzQB/sandbox/CjDVnPi7hPzce502XYcPYy-img-4_1770748566000_na1fn_YXNzZXNzbWVudC1pbGx1c3RyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWdRWnBVOUNubFpjV0o4SEdMWHpRQi9zYW5kYm94L0NqRFZuUGk3aFB6Y2U1MDJYWWNQWXktaW1nLTRfMTc3MDc0ODU2NjAwMF9uYTFmbl9ZWE56WlhOemJXVnVkQzFwYkd4MWMzUnlZWFJwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aU4bMxxeVOaRO8jZ8Z4lUPdUasIXlKAdRExFvyUUy2y5fNVYpnjLTK0M2dRXdvhpNtDinrFWvJnfsCKSebnrT5YSBeYtoA0NTWD1UETwbud6J-UwzVjTe7dENG9FeodGzIxUob8QZ6xTyfpIHpzfzLx1V8JVs~p1sBoAmf1PeB78juSTvQEnn6FOQmGQcT4Lmqxo7HpgXESuIUpAgArhXa-rGQuroPp6VZPtKWYDCo-mx0gJDS-w~lbKVoLhAmyoUVxOBg6noL0w-xcSv1xk0IbAaNMcyS8fOTH-bk962dmJE78vzkbShCrc6WBrFXP3jgAlaDMD~kG04pjJVPh2zQ__"
                    alt="1:1 intensive program"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl font-display font-bold text-foreground">
                      Toddler & Preschool 1:1 Intensive ABA
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    <strong>For Children Under 6 Years Old</strong>
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our clinic-based 1:1 intensive program provides individualized ABA therapy using the Lovaas approach combined with natural environment and incidental teaching procedures for skill generalization. This program is available mornings and early afternoons, 3 days a week within AFU funding.
                  </p>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Program Features
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Clinic-based team: behaviour consultant, program supervisor, and trained interventionists",
                      "3 days per week within AFU funding",
                      "Lovaas style approach with natural environment teaching",
                      "Speech and Language Therapy included as an option",
                      "Staff and parent training through workshops, overlap sessions, and monthly team meetings",
                      "Focus on foundational skills and learning readiness",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button size="lg" className="transition-all duration-300 hover:scale-105">
                      Inquire About This Program
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3: Preschool Group Program */}
            <div className="mb-20 border-t border-border pt-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-4xl font-display font-bold text-foreground">
                      Preschool Readiness Group Program
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    <strong>For Children Ages 2-4 Years</strong>
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our highly structured group ABA program integrates 1:1 intensive teaching with natural environment teaching on a rotational basis. Children participate in circle time, art time, and snack time with peers, with a heavy focus on social skills and peer socialization.
                  </p>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Program Features
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Clinic onsite-based, highly structured group ABA therapy",
                      "Integrated 1:1 ABA with individually designed curriculum",
                      "3 days per week of ABA intervention",
                      "Natural Environment Teaching (NET) on rotational basis",
                      "Heavy focus on social skills, peer socialization, and interactive peer play",
                      "Speech and Language Therapy included as an option",
                      "Participation in circle time, art time, and snack time with peers",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-105 hover:bg-accent/10">
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
            </div>

            {/* Service 4: School Readiness */}
            <div className="mb-20 border-t border-border pt-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-96 flex items-center justify-center">
                    <BookOpen className="w-32 h-32 text-primary/20" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl font-display font-bold text-foreground">
                      Kindergarten/School Readiness Program
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    <strong>For Children Under 5-6 Years Old</strong>
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    This clinic-based program prepares children for school success with a focus on academics, social skills, and peer interaction. Using the Lovaas approach with natural environment teaching, we build the foundational skills needed for successful school transitions.
                  </p>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Program Features
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Clinic-based team: behaviour consultant, program supervisor, and trained interventionists",
                      "3 days per week in funding",
                      "Lovaas style approach with natural environment teaching",
                      "Heavy focus on social skills, peer socialization, and conversation skills",
                      "Academic preparation: reading, writing, and math skills",
                      "Speech and Language Therapy available",
                      "Participation in circle time, art time, and snack time with peers",
                      "Staff and parent training through workshops and monthly team meetings",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button size="lg" className="transition-all duration-300 hover:scale-105">
                      Inquire About This Program
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 5: Social Skills Group */}
            <div className="mb-20 border-t border-border pt-20">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-foreground">
                    Social Skills Group
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>For Children Ages 6 and Older</strong>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our evidence-based, group-format social skills program is designed for verbal children with high-functioning autism. Meeting once a week for 1.5 to 2 hours under the supervision of a BCBA and behaviour interventionist, this program develops the social skills necessary for success in typical community settings.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Skills Covered
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Building and maintaining friendships",
                    "Understanding others' perspectives and social cues",
                    "Emotional regulation and self-awareness",
                    "Academic and learning skills",
                    "Social cognition training",
                    "Community and social participation skills",
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-105 hover:bg-accent/10">
                    Inquire About This Program
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 6: Speech & Language Therapy */}
            <div className="mb-20 border-t border-border pt-20">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-foreground">
                    Speech & Language Therapy
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>Part of Our Autism Care Team</strong>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our Speech-Language Pathologists (SLPs) are integral members of our interdisciplinary autism team. Using evidence-based, autism-affirming practices, they support autistic children in developing meaningful, functional communication skills that generalize across settings.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Focus Areas
                  </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Expressive and receptive language development",
                    "Social communication and play skills",
                    "Early communication: gestures, joint attention, and imitation",
                    "Speech sound development and clarity",
                    "Augmentative and Alternative Communication (AAC)",
                    "Functional communication within therapy and daily routines",
                  ].map((area, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Collaborative Approach
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our SLPs work closely with behavior analysts, behaviour interventionists, school teams, and families to align communication and developmental goals, support functional communication across settings, and reduce communication-related frustration. Therapy is individualized, engaging, and clinic-based, with strategies designed for carryover at home, school, and in the community. Family coaching and practical strategies are included to support communication in all environments.
                </p>

                <Link href="/contact">
                  <Button size="lg" className="transition-all duration-300 hover:scale-105">
                    Inquire About Speech Therapy
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 7: Supervision Services */}
            <div className="border-t border-border pt-20">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center">
                    <ClipboardCheck className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-foreground">
                    BACB & QABA Supervision Services
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>Remote Available</strong>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Dr. Ramen Saggu, PhD, BCBA, offers high-quality supervision for individuals accruing fieldwork hours, as well as consultation and mentorship for newly certified BCBA and QABA professionals. Supervision is delivered using ethical, evidence-based practices and aligns with current standards set by the BACB and QABA.
                </p>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Services Include
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Support for BCBA and QABA trainees accruing fieldwork hours",
                    "Consulting supervision for newly certified BCBA and QABA professionals",
                    "Case review and ethical guidance",
                    "Professional development and skill building",
                    "Support with supervision practices and documentation",
                    "Ongoing competence development",
                  ].map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ClipboardCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Pacific ABA Academy is an approved CEU provider and accredited practicum internship site for future behaviour analysts. Remote supervision maintains the same standards of quality, collaboration, and accountability as in-person supervision, while offering convenience and accessibility for busy professionals.
                </p>

                <Link href="/contact">
                  <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-105 hover:bg-accent/10">
                    Contact About Supervision Services
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
                Contact us today to learn more about our programs and how we can help your child reach for the stars.
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
