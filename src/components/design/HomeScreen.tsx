import { TrendingUp, Trophy, Zap, ChevronRight, Star, Sparkles, ArrowUpRight } from "lucide-react";

export const HomeScreen = () => {
  return (
    <div className="h-full bg-background p-4 space-y-5 overflow-y-auto pb-20 scrollbar-hide">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">Hoş geldin 👋</p>
          <h1 className="text-xl font-display font-bold tracking-tight">Mehmet</h1>
        </div>
        <div className="relative">
          <div className="w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center glow-primary">
            <span className="text-sm font-bold text-primary-foreground">M</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-win flex items-center justify-center border-2 border-background">
            <span className="text-[8px]">✓</span>
          </div>
        </div>
      </div>

      {/* Hero Stats Card */}
      <div className="relative overflow-hidden rounded-3xl gradient-primary p-5 glow-primary">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-black/20 rounded-full blur-xl" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Trophy className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/80">Başarı Oranı</span>
            </div>
            <div className="flex items-center gap-1 text-primary-foreground/80">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-xs font-semibold">+5%</span>
            </div>
          </div>
          
          <div className="flex items-end gap-3 mb-4">
            <span className="text-5xl font-display font-bold text-primary-foreground tracking-tight">78%</span>
            <span className="text-sm text-primary-foreground/70 mb-2">bu hafta</span>
          </div>
          
          <div className="bg-black/20 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
            <div className="h-full rounded-full bg-white/90 progress-animated" style={{ width: '78%' }} />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Zap, label: "Canlı", sublabel: "12 maç", color: "text-live", bg: "bg-live/10" },
          { icon: TrendingUp, label: "Tahminler", sublabel: "Yeni", color: "text-primary", bg: "bg-primary/10" },
          { icon: Star, label: "VIP", sublabel: "Premium", color: "text-accent", bg: "bg-accent/10" },
        ].map((item, i) => (
          <div key={i} className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 card-hover cursor-pointer">
            <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <span className="text-xs font-semibold">{item.label}</span>
            <span className="text-[10px] text-muted-foreground">{item.sublabel}</span>
          </div>
        ))}
      </div>

      {/* Live Match Highlight */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="font-display font-semibold">Canlı Maçlar</h2>
            <div className="w-2 h-2 rounded-full bg-live live-pulse" />
          </div>
          <button className="text-primary text-sm flex items-center gap-1 font-medium hover:gap-2 transition-all">
            Tümü <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="glass-card-strong rounded-2xl p-4 space-y-4 card-hover">
          {/* Match Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-live" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-live animate-ping" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">45' • Premier League</span>
            </div>
            <div className="flex items-center gap-1.5 bg-primary/10 px-2.5 py-1 rounded-lg">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-xs text-primary font-bold">72%</span>
            </div>
          </div>
          
          {/* Teams */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center border border-white/5">
                  <span className="text-xs font-bold">MU</span>
                </div>
                <span className="font-semibold">Manchester Utd</span>
              </div>
              <span className="text-2xl font-display font-bold">2</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border border-white/5">
                  <span className="text-xs font-bold">CHE</span>
                </div>
                <span className="font-semibold">Chelsea</span>
              </div>
              <span className="text-2xl font-display font-bold">1</span>
            </div>
          </div>
          
          {/* AI Prediction Bar */}
          <div className="bg-secondary/50 rounded-xl p-3 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">AI Tahmini: <span className="text-foreground font-semibold">Ev Sahibi Kazanır</span></span>
            <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[72%] gradient-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Today's Predictions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-semibold">Günün Tahminleri</h2>
          <span className="text-xs bg-accent/15 text-accent px-3 py-1.5 rounded-full font-semibold">12 maç</span>
        </div>
        
        <div className="space-y-2.5">
          {[
            { home: "Barcelona", away: "Real Madrid", prediction: "1X", confidence: 85, time: "21:00" },
            { home: "Bayern", away: "Dortmund", prediction: "Ü 2.5", confidence: 78, time: "19:30" },
          ].map((match, i) => (
            <div key={i} className="glass-card rounded-xl p-4 flex items-center justify-between card-hover cursor-pointer">
              <div className="space-y-1">
                <p className="font-semibold text-sm">{match.home} vs {match.away}</p>
                <p className="text-xs text-muted-foreground">Yarın {match.time}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="gradient-accent text-xs font-bold px-3 py-1.5 rounded-lg text-accent-foreground shadow-glow-accent">
                  {match.prediction}
                </span>
                <div className="text-right">
                  <span className="text-primary text-sm font-bold">{match.confidence}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
