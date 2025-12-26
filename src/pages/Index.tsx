import { PhoneFrame } from "@/components/design/PhoneFrame";
import { HomeScreen } from "@/components/design/HomeScreen";
import { LiveMatchesScreen } from "@/components/design/LiveMatchesScreen";
import { PredictionsScreen } from "@/components/design/PredictionsScreen";
import { ProfileScreen } from "@/components/design/ProfileScreen";
import { BottomNav } from "@/components/design/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050508] p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient mb-3">
          Spor Tahmin Uygulaması
        </h1>
        <p className="text-muted-foreground text-lg">
          Flutter UI Konsept Tasarımı
        </p>
      </div>

      {/* Phone Mockups */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Home Screen */}
        <PhoneFrame title="Ana Sayfa">
          <div className="relative h-full">
            <HomeScreen />
            <BottomNav active={0} />
          </div>
        </PhoneFrame>

        {/* Live Matches Screen */}
        <PhoneFrame title="Canlı Maçlar">
          <div className="relative h-full">
            <LiveMatchesScreen />
            <BottomNav active={1} />
          </div>
        </PhoneFrame>

        {/* Predictions Screen */}
        <PhoneFrame title="Tahminlerim">
          <div className="relative h-full">
            <PredictionsScreen />
            <BottomNav active={2} />
          </div>
        </PhoneFrame>

        {/* Profile Screen */}
        <PhoneFrame title="Profil">
          <div className="relative h-full">
            <ProfileScreen />
            <BottomNav active={3} />
          </div>
        </PhoneFrame>
      </div>

      {/* Design Specs */}
      <div className="max-w-4xl mx-auto mt-16 space-y-8">
        <h2 className="text-2xl font-bold text-center mb-8">Tasarım Özellikleri</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Colors */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-semibold mb-4">🎨 Renk Paleti</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-primary" />
                <div>
                  <p className="font-medium">Primary (Yeşil)</p>
                  <p className="text-xs text-muted-foreground">HSL(142, 70%, 45%)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-accent" />
                <div>
                  <p className="font-medium">Accent (Altın)</p>
                  <p className="text-xs text-muted-foreground">HSL(38, 92%, 50%)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[hsl(var(--live))]" />
                <div>
                  <p className="font-medium">Live/Error (Kırmızı)</p>
                  <p className="text-xs text-muted-foreground">HSL(0, 84%, 60%)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-background border border-border" />
                <div>
                  <p className="font-medium">Background (Koyu)</p>
                  <p className="text-xs text-muted-foreground">HSL(220, 20%, 6%)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-semibold mb-4">✏️ Tipografi</h3>
            <div className="space-y-3">
              <div>
                <p className="text-2xl font-bold">Outfit Bold</p>
                <p className="text-xs text-muted-foreground">Başlıklar için</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Outfit Semibold</p>
                <p className="text-xs text-muted-foreground">Alt başlıklar için</p>
              </div>
              <div>
                <p className="text-base">Outfit Regular</p>
                <p className="text-xs text-muted-foreground">Gövde metni için</p>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-semibold mb-4">🧩 Bileşenler</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Glass morphism kartlar</li>
              <li>• Gradient butonlar</li>
              <li>• Canlı maç göstergeleri</li>
              <li>• İlerleme çubukları</li>
              <li>• Animasyonlu ikonlar</li>
              <li>• Alt navigasyon çubuğu</li>
            </ul>
          </div>

          {/* Features */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-semibold mb-4">⚡ Özellikler</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Koyu tema (göz yormuyor)</li>
              <li>• Mobil-öncelikli tasarım</li>
              <li>• Yumuşak köşeler (16px radius)</li>
              <li>• Glow efektleri</li>
              <li>• Smooth animasyonlar</li>
              <li>• Modern UI trendleri</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-muted-foreground text-sm">
        <p>Bu tasarım konsepti Flutter uygulamanız için referans olarak kullanılabilir.</p>
      </div>
    </div>
  );
};

export default Index;
