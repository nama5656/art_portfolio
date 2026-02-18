/**
 * Home Page - Bold Contemporary Design
 * Design Philosophy: Dynamic, asymmetric layout with bold colors (Navy, Orange, Yellow, Green)
 * - Hero section with striking visuals
 * - About section with professional introduction
 * - Gallery section showcasing featured work
 * - Contact section with CTA
 * - Navigation to Downloads page for .stl files
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Download, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/rUrqgi7X6nTofvfUJ5GTBd/sandbox/Snax1guwOReooh4oKKDPB3-img-1_1771429722000_na1fn_aGVyby1hYnN0cmFjdC1kYXJr.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvclVycWdpN1g2blRvZnZmVUo1R1RCZC9zYW5kYm94L1NuYXgxZ3V3T1Jlb29oNG9LS0RQQjMtaW1nLTFfMTc3MTQyOTcyMjAwMF9uYTFmbl9hR1Z5YnkxaFluTjBjbUZqZEMxa1lYSnIucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tlF7prbAu4~L9EWhPw1lT4RJh-ruc-tpxoaJNE53gX8EoocjQ4gA6MQowoHyZ9Jjdn457a7r4lYHjDEcj0RW01V8W2Ufc6ju9ck5CSbQguhms8tWuigndFZYPGo5nOcbMYzO0Jq~rTn0cbzaIC7qJ-kfYBwuKt2C6jYRVZL3fesNvUX-BPsx3H~WM37dgzPuZD9l7~3r1UoGLxNcFskEuyA2aE5qoyW1Lsv73J8Cd0p61kmFqFg6qRvhLy9ZUGhcsHD7sig9oVPRtue~2Usc9VJl-~JHW~zWfoujBpuQ-aO81yL0uBSCa67mgMdDMgSzPzpgmBtjMEepAJjiVUknzw__";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              nama_5656
            </div>
            <div className="text-sm text-muted-foreground">3DArt</div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Works
            </a>
            <Link href="/downloads">
              <a className="text-sm font-medium hover:text-primary transition-colors">
                Downloads
              </a>
            </Link>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Hero Image */}
            <div className="order-2 md:order-1">
              <img
                src={HERO_IMAGE}
                alt="3D Art Hero"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            {/* Hero Text */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                  nama_5656
                </h1>
                <p className="text-xl text-primary font-semibold">3D Artist & Product Designer</p>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                物を作るの好き。本業はプロダクトデザイナー。意匠や表現の探求が趣味でありライフワーク。
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  View Works
                </Button>
                <Link href="/downloads">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Download className="mr-2 h-4 w-4" />
                    Download Models
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-secondary/10">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Design Philosophy</h3>
              <p className="text-foreground/80">
                意匠と表現の探求を通じて、形態と機能が調和した作品を制作しています。
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-accent">3D Modeling</h3>
              <p className="text-foreground/80">
                デジタルアート作品から実用的な3Dモデルまで、多様な作品を手がけています。
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Product Design</h3>
              <p className="text-foreground/80">
                プロダクトデザイナーとしての経験を活かし、実用性と美しさを両立させた作品を創出。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Work Card */}
            <Card className="overflow-hidden bg-card hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🐱</div>
                  <p className="text-sm text-muted-foreground">3D Model Preview</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">lattice nama cat</h3>
                  <p className="text-sm text-muted-foreground mt-2">PA12 | Digital Art</p>
                </div>
                <p className="text-foreground/80">
                  佇む猫に解析情報を落とし込んだデジタルアート作品。
                </p>
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Link href="/downloads">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Additional Featured Works Placeholder */}
            <Card className="overflow-hidden bg-card hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🎨</div>
                  <p className="text-sm text-muted-foreground">More Works Coming Soon</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Upcoming Project</h3>
                  <p className="text-sm text-muted-foreground mt-2">Stay tuned for new releases</p>
                </div>
                <p className="text-foreground/80">
                  新しい作品を制作中です。SNSをフォローして最新情報をチェック！
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-foreground text-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg opacity-90">
                作品に関するご質問やご依頼は、お気軽にお問い合わせください。
              </p>
              <div className="space-y-4">
                <a
                  href="https://x.com/5656nama?s=21&t=hUkqE5LHO4hjADwuT-fqjw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Follow on X (Twitter)</span>
                </a>
              </div>
            </div>
            <div className="bg-background text-foreground p-8 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2026 nama_5656. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
