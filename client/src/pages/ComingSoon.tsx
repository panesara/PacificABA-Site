/* Design: Organic Modernism - Coming soon placeholder for FAQ, About, Careers, Downloads */

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 blob-shape flex items-center justify-center">
                <div className="text-6xl">✨</div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This page is currently under construction. Please check back soon or
              contact us for more information.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
