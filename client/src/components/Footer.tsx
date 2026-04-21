/* Design: Organic Modernism - Warm footer with contact details and organic shapes */

import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-background border-t border-border overflow-hidden">
      {/* Decorative blob shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blob-shape -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 blob-shape translate-y-1/2 -translate-x-1/4" />

      <div className="container relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Pacific ABA Academy
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Providing scientifically validated ABA treatment to individuals
              diagnosed with Autism and related disabilities. We empower and
              motivate those with special needs to reach for the stars.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm leading-relaxed">
                  Unit #230 - 8232 120th Street<br />
                  Surrey, BC V3W 3N2
                </p>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-sm">
                  <a href="tel:778-565-1064" className="block hover:underline">
                    778-565-1064
                  </a>
                  <a href="tel:1-855-286-8143" className="block hover:underline">
                    1-855-286-8143
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:office@pacificaba.com"
                  className="text-sm hover:underline"
                >
                  office@pacificaba.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Services", "FAQ", "About", "Careers", "Downloads", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © {currentYear} Pacific ABA Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
