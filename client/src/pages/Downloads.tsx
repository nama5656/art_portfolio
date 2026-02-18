/**
 * Downloads Page - .stl File Download Center
 * Design Philosophy: Bold Contemporary with clear, organized file listing
 * - Featured downloads section
 * - Grid layout for easy browsing
 * - Download buttons with file information
 * - Back navigation to home
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ArrowLeft, FileText } from "lucide-react";
import { Link } from "wouter";

interface DownloadItem {
  id: string;
  name: string;
  material: string;
  format: string;
  fileSize: string;
  description: string;
  featured?: boolean;
}

const DOWNLOADS: DownloadItem[] = [
  {
    id: "lattice-nama-cat",
    name: "lattice nama cat",
    material: "PA12",
    format: ".stl",
    fileSize: "2.4 MB",
    description: "佇む猫に解析情報を落とし込んだデジタルアート作品。",
    featured: true,
  },
  {
    id: "sample-2",
    name: "Sample Model 2",
    material: "Resin",
    format: ".stl",
    fileSize: "1.8 MB",
    description: "Coming soon - New model in development",
  },
  {
    id: "sample-3",
    name: "Sample Model 3",
    material: "PLA",
    format: ".stl",
    fileSize: "3.2 MB",
    description: "Coming soon - New model in development",
  },
];

export default function Downloads() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <nav className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg font-semibold">Back</span>
            </a>
          </Link>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              nama_5656
            </div>
            <div className="text-sm text-muted-foreground">3DArt</div>
          </div>
          <div className="w-24" /> {/* Spacer for alignment */}
        </nav>
      </header>

      {/* Page Content */}
      <main className="container py-12 md:py-20">
        {/* Page Header */}
        <div className="mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            3D Models
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            高品質な3Dモデルファイル（.stl形式）をダウンロードできます。
            個人利用、商用利用については各モデルの利用規約をご確認ください。
          </p>
        </div>

        {/* Featured Download */}
        {DOWNLOADS.filter((d) => d.featured).map((item) => (
          <div key={item.id} className="mb-16">
            <div className="inline-block mb-4">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
            <Card className="overflow-hidden bg-card hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Preview Area */}
                <div className="md:col-span-1 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8 min-h-64">
                  <div className="text-center space-y-4">
                    <div className="text-7xl">🐱</div>
                    <p className="text-sm text-muted-foreground">3D Model Preview</p>
                  </div>
                </div>
                {/* Details Area */}
                <div className="md:col-span-2 p-8 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-2">
                      {item.name}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {item.material} • {item.format}
                    </p>
                  </div>
                  <p className="text-foreground/80 text-lg">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Material</p>
                      <p className="text-lg font-semibold text-foreground">
                        {item.material}
                      </p>
                    </div>
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">File Size</p>
                      <p className="text-lg font-semibold text-foreground">
                        {item.fileSize}
                      </p>
                    </div>
                  </div>
                  <Button size="lg" className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="mr-2 h-5 w-5" />
                    Download {item.format}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}

        {/* Other Downloads */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground">More Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOWNLOADS.filter((d) => !d.featured).map((item) => (
              <Card key={item.id} className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.material} • {item.format}
                    </p>
                  </div>
                  <FileText className="h-8 w-8 text-primary opacity-50" />
                </div>
                <p className="text-foreground/80 mb-6">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {item.fileSize}
                  </span>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 bg-secondary/10 rounded-lg space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Usage Guidelines</h3>
          <ul className="space-y-2 text-foreground/80">
            <li>• 個人利用、学習目的での使用は自由です</li>
            <li>• 商用利用の場合はお問い合わせください</li>
            <li>• ファイルの再配布は禁止です</li>
            <li>• 3Dプリント、加工などの改変は自由です</li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-lg text-foreground/80">
            カスタムモデルのご依頼やご質問はお気軽にお問い合わせください
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-border">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2026 nama_5656. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
