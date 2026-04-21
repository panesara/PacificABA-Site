/* Design: Organic Modernism - Contact page with form and location details */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 blob-shape -translate-x-1/2 -translate-y-1/2" />

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our programs? We're here to help. Reach out
                to us and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-3xl font-display">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-accent">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-accent">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-accent">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-accent">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us how we can help..."
                        rows={6}
                        className="transition-all duration-300 focus:scale-[1.02] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    You can also reach us directly using the contact information
                    below. We look forward to hearing from you!
                  </p>
                </div>

                <Card className="border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <CardTitle className="text-xl font-display">
                        Our Location
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Unit #230 - 8232 120th Street
                      <br />
                      Surrey, BC V3W 3N2
                      <br />
                      Canada
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <Phone className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <CardTitle className="text-xl font-display">
                        Phone Numbers
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a
                      href="tel:778-565-1064"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      778-565-1064
                    </a>
                    <a
                      href="tel:1-855-286-8143"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      1-855-286-8143 (Toll-free)
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <CardTitle className="text-xl font-display">
                        Email Address
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:office@pacificaba.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      office@pacificaba.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Office Hours:</strong>
                      <br />
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
