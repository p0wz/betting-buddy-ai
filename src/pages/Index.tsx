import { PhoneFrame } from "@/components/design/PhoneFrame";
import { HomeScreen } from "@/components/design/HomeScreen";
import { LiveMatchesScreen } from "@/components/design/LiveMatchesScreen";
import { PredictionsScreen } from "@/components/design/PredictionsScreen";
import { ProfileScreen } from "@/components/design/ProfileScreen";
import { BottomNav } from "@/components/design/BottomNav";
import { Sparkles, Palette, Type, Layers, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">UI Konsept Tasarımı</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-4 tracking-tight">
            Spor Tahmin Uygulaması
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flutter için modern, profesyonel ve kullanıcı dostu mobil uygulama tasarım konsepti
          </p>
        </div>

        {/* Phone Mockups */}
        <div className="flex flex-wrap justify-center gap-10 mb-20">
          <PhoneFrame title="Ana Sayfa">
            <div className="relative h-full">
              <HomeScreen />
              <BottomNav active={0} />
            </div>
          </PhoneFrame>

          <PhoneFrame title="Canlı Maçlar">
            <div className="relative h-full">
              <LiveMatchesScreen />
              <BottomNav active={1} />
            </div>
          </PhoneFrame>

          <PhoneFrame title="Tahminlerim">
            <div className="relative h-full">
              <PredictionsScreen />
              <BottomNav active={2} />
            </div>
          </PhoneFrame>

          <PhoneFrame title="Profil">
            <div className="relative h-full">
              <ProfileScreen />
              <BottomNav active={3} />
            </div>
          </PhoneFrame>
        </div>

        {/* Design Specs */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-3">Tasarım Sistemi</h2>
            <p className="text-muted-foreground">Flutter uygulamanız için kullanıma hazır tasarım özellikleri</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Colors */}
            <div className="glass-card-strong rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-4">Renk Paleti</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-primary shadow-glow-primary" />
                  <div>
                    <p className="font-medium text-sm">Primary</p>
                    <p className="text-xs text-muted-foreground">HSL(155, 80%, 45%)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-accent shadow-glow-accent" />
                  <div>
                    <p className="font-medium text-sm">Accent</p>
                    <p className="text-xs text-muted-foreground">HSL(42, 95%, 55%)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-live" />
                  <div>
                    <p className="font-medium text-sm">Live/Error</p>
                    <p className="text-xs text-muted-foreground">HSL(0, 84%, 60%)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-card border border-border" />
                  <div>
                    <p className="font-medium text-sm">Card</p>
                    <p className="text-xs text-muted-foreground">HSL(225, 15%, 8%)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="glass-card-strong rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Type className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold mb-4">Tipografi</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-display font-bold tracking-tight">Space Grotesk</p>
                  <p className="text-xs text-muted-foreground">Başlıklar • Bold</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Inter Semibold</p>
                  <p className="text-xs text-muted-foreground">Alt başlıklar</p>
                </div>
                <div>
                  <p className="text-base">Inter Regular</p>
                  <p className="text-xs text-muted-foreground">Gövde metni</p>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="glass-card-strong rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-win/10 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-win" />
              </div>
              <h3 className="font-display font-semibold mb-4">Bileşenler</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Glassmorphism kartlar
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Gradient butonlar
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Glow efektleri
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Progress animasyonları
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Dynamic Island
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="glass-card-strong rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-live/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-live" />
              </div>
              <h3 className="font-display font-semibold mb-4">Özellikler</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Koyu tema (OLED)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  16px border radius
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Blur backdrop efektleri
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Smooth geçişler
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Pulse animasyonları
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-muted-foreground text-sm">
          <p>Bu tasarım konsepti Flutter uygulamanız için referans olarak kullanılabilir.</p>
          <p className="mt-2 text-xs opacity-60">Space Grotesk + Inter • Glassmorphism • Modern UI</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
