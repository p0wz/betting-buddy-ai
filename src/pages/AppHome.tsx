import { useState } from "react";
import { TrendingUp, ChevronRight, Trophy, Zap, Crown, Flame, Star, ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

const AppHome = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"home" | "live" | "predictions" | "profile">("home");

  const featuredMatches = [
    {
      id: 1,
      league: "UEFA Şampiyonlar Ligi",
      home: "Real Madrid",
      away: "Bayern Munich",
      time: "21:00",
      prediction: "Ev Sahibi",
      odds: 1.85,
      confidence: 78,
      isHot: true,
    },
    {
      id: 2,
      league: "Premier League",
      home: "Arsenal",
      away: "Manchester City",
      time: "22:00",
      prediction: "Beraberlik",
      odds: 3.40,
      confidence: 65,
      isHot: false,
    },
    {
      id: 3,
      league: "La Liga",
      home: "Barcelona",
      away: "Atletico Madrid",
      time: "23:00",
      prediction: "Üst 2.5",
      odds: 1.72,
      confidence: 82,
      isHot: true,
    },
  ];

  const quickStats = [
    { label: "Başarı", value: "78%", change: "+5%", icon: Trophy, color: "text-win" },
    { label: "Bu Hafta", value: "₺1,240", change: "+₺340", icon: TrendingUp, color: "text-primary" },
    { label: "Seri", value: "5", change: "🔥", icon: Flame, color: "text-accent" },
  ];

  const trendingPredictions = [
    { id: 1, match: "Liverpool vs Chelsea", type: "2.5 Üst", odds: 1.85, confidence: 82, votes: 1240 },
    { id: 2, match: "Juventus vs Inter", type: "KG Var", odds: 1.72, confidence: 75, votes: 890 },
    { id: 3, match: "PSG vs Monaco", type: "Ev Sahibi", odds: 1.45, confidence: 88, votes: 2100 },
  ];

  return (
    <div className="min-h-screen bg-background bg-pattern pb-28">
      {/* Header */}
      <header className="relative px-5 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="animate-slide-up" style={{ animationDelay: '0ms' }}>
            <p className="text-muted-foreground text-sm font-medium">Hoş geldin,</p>
            <h1 className="text-2xl font-display font-bold text-foreground">Ahmet 👋</h1>
          </div>
          <button 
            onClick={() => navigate("/premium")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl gradient-accent shadow-glow-accent animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            <Crown className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-bold text-accent-foreground">PRO</span>
          </button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="px-5 mb-6">
        <div className="glass-card-premium rounded-3xl p-5 animate-slide-up" style={{ animationDelay: '150ms' }}>
          <div className="flex items-center justify-between">
            {quickStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center flex-1">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary mb-2`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                    <span className="text-xs text-win font-medium">{stat.change}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Matches */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-bold text-foreground">Öne Çıkan Maçlar</h2>
          </div>
          <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            Tümü <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {featuredMatches.map((match, idx) => (
            <div 
              key={match.id} 
              className="glass-card-premium rounded-2xl p-4 card-hover cursor-pointer animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${250 + idx * 50}ms` }}
            >
              {/* Hot Badge */}
              {match.isHot && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-accent/15 text-accent">
                  <Flame className="w-3 h-3" />
                  <span className="text-xs font-bold">HOT</span>
                </div>
              )}
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-lg">{match.league}</span>
                <span className="text-xs font-semibold text-primary">{match.time}</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{match.home}</p>
                  <p className="text-sm text-muted-foreground mt-1">{match.away}</p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl gradient-primary text-primary-foreground text-sm font-bold shadow-glow-primary">
                    {match.prediction}
                  </div>
                  <p className="text-lg font-bold text-accent mt-1">{match.odds}x</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 w-24 rounded-full bg-secondary overflow-hidden">
                    <div 
                      className="h-full gradient-success rounded-full transition-all duration-500"
                      style={{ width: `${match.confidence}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-win">{match.confidence}%</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Predictions */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Trend Tahminler</h2>
          </div>
        </div>

        <div className="space-y-2">
          {trendingPredictions.map((pred, idx) => (
            <div 
              key={pred.id} 
              className="glass-card-premium rounded-xl p-4 flex items-center justify-between card-hover cursor-pointer animate-slide-up"
              style={{ animationDelay: `${450 + idx * 50}ms` }}
            >
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{pred.match}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-semibold text-foreground">{pred.type}</span>
                  <span className="text-xs text-muted-foreground">• {pred.votes.toLocaleString()} oy</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-accent">{pred.odds}x</p>
                <p className="text-xs text-win font-medium">{pred.confidence}% güven</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Banner */}
      <div className="px-5 animate-slide-up" style={{ animationDelay: '550ms' }}>
        <button 
          onClick={() => navigate("/premium")}
          className="w-full rounded-3xl p-5 relative overflow-hidden gradient-premium shadow-glow-primary"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cGF0aCBkPSJNMCAyMGgyME0yMCAwdjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjYSkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-30" />
          <div className="relative flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div className="text-left flex-1">
              <p className="font-bold text-white text-lg">VIP Premium'a Geç</p>
              <p className="text-sm text-white/80">AI destekli tahminler ve özel analizler</p>
            </div>
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default AppHome;
