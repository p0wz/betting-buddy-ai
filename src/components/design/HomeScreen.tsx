import { TrendingUp, Trophy, Zap, ChevronRight, Star } from "lucide-react";

export const HomeScreen = () => {
  return (
    <div className="h-full bg-background p-4 space-y-5 overflow-y-auto pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">Hoş geldin 👋</p>
          <h1 className="text-xl font-bold">Mehmet</h1>
        </div>
        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
          <span className="text-sm font-bold">M</span>
        </div>
      </div>

      {/* Stats Card */}
      <div className="gradient-primary rounded-2xl p-4 glow-primary">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm opacity-80">Başarı Oranı</span>
          <Trophy className="w-5 h-5" />
        </div>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold">78%</span>
          <span className="text-sm opacity-80 mb-1">+5% bu hafta</span>
        </div>
        <div className="mt-3 bg-background/20 rounded-full h-2">
          <div className="bg-background h-full rounded-full w-[78%]" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Zap, label: "Canlı", color: "text-[hsl(var(--live))]" },
          { icon: TrendingUp, label: "Tahminler", color: "text-primary" },
          { icon: Star, label: "VIP", color: "text-accent" },
        ].map((item, i) => (
          <div key={i} className="glass-card rounded-xl p-3 flex flex-col items-center gap-2">
            <item.icon className={`w-6 h-6 ${item.color}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Live Matches */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Canlı Maçlar</h2>
          <button className="text-primary text-sm flex items-center gap-1">
            Tümü <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="glass-card rounded-xl p-4 space-y-4">
          {/* Match 1 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--live))] live-pulse" />
                <span className="text-xs text-muted-foreground">45' • Premier League</span>
              </div>
              <span className="text-xs text-primary font-medium">%72</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-xs">MU</div>
                <span className="font-medium">Manchester Utd</span>
              </div>
              <span className="text-xl font-bold">2</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-xs">CHE</div>
                <span className="font-medium">Chelsea</span>
              </div>
              <span className="text-xl font-bold">1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Predictions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Günün Tahminleri</h2>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">12 maç</span>
        </div>
        
        <div className="space-y-2">
          {[
            { home: "Barcelona", away: "Real Madrid", prediction: "1X", confidence: 85 },
            { home: "Bayern", away: "Dortmund", prediction: "Ü 2.5", confidence: 78 },
          ].map((match, i) => (
            <div key={i} className="glass-card rounded-xl p-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{match.home} vs {match.away}</p>
                <p className="text-xs text-muted-foreground">Yarın 21:00</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="gradient-accent text-xs font-bold px-2 py-1 rounded-lg">{match.prediction}</span>
                <span className="text-primary text-sm font-semibold">{match.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
