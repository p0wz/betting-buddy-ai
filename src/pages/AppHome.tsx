import { useState } from "react";
import { Home, TrendingUp, Target, User, Flame, ChevronRight, Trophy, Zap, Crown } from "lucide-react";
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
      homeScore: "-",
      awayScore: "-",
      time: "21:00",
      prediction: "1",
      confidence: 78,
    },
    {
      id: 2,
      league: "Premier League",
      home: "Arsenal",
      away: "Manchester City",
      homeScore: "-",
      awayScore: "-",
      time: "22:00",
      prediction: "X",
      confidence: 65,
    },
  ];

  const hotPredictions = [
    { id: 1, match: "Liverpool vs Chelsea", prediction: "2.5 Üst", odds: "1.85", confidence: 82 },
    { id: 2, match: "Juventus vs Inter", prediction: "Karşılıklı Gol", odds: "1.72", confidence: 75 },
    { id: 3, match: "PSG vs Monaco", prediction: "1", odds: "1.45", confidence: 88 },
  ];

  const stats = [
    { label: "Başarı", value: "78%", icon: <Trophy className="w-4 h-4" /> },
    { label: "Bu Hafta", value: "+₺1,240", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Streak", value: "5 🔥", icon: <Flame className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">Hoş geldin,</p>
          <h1 className="text-xl font-bold text-foreground">Ahmet 👋</h1>
        </div>
        <button 
          onClick={() => navigate("/premium")}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/20 text-accent"
        >
          <Crown className="w-4 h-4" />
          <span className="text-sm font-medium">Pro</span>
        </button>
      </header>

      {/* Stats */}
      <div className="px-4 mb-6">
        <div className="glass-card rounded-2xl p-4 flex items-center justify-between">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                {stat.icon}
                <span className="text-xs">{stat.label}</span>
              </div>
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Matches */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Öne Çıkan Maçlar</h2>
          <button className="text-primary text-sm flex items-center gap-1">
            Tümü <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {featuredMatches.map((match) => (
            <div key={match.id} className="glass-card rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">{match.league}</span>
                <span className="text-xs text-accent font-medium">{match.time}</span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{match.home}</p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-secondary/50">
                  <span className="text-lg font-bold text-foreground">
                    {match.homeScore} - {match.awayScore}
                  </span>
                </div>
                <div className="flex-1 text-right">
                  <p className="font-medium text-foreground">{match.away}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Tahmin:</span>
                  <span className="px-3 py-1 rounded-lg gradient-primary text-primary-foreground text-sm font-medium">
                    {match.prediction}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 rounded-full bg-secondary overflow-hidden">
                    <div 
                      className="h-full gradient-primary rounded-full"
                      style={{ width: `${match.confidence}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-primary">{match.confidence}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hot Predictions */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-destructive" />
            <h2 className="text-lg font-semibold text-foreground">Sıcak Tahminler</h2>
          </div>
        </div>

        <div className="space-y-2">
          {hotPredictions.map((pred) => (
            <div key={pred.id} className="glass-card rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{pred.match}</p>
                <p className="font-medium text-foreground">{pred.prediction}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-accent">{pred.odds}</p>
                <p className="text-xs text-primary">{pred.confidence}% güven</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Banner */}
      <div className="px-4">
        <button 
          onClick={() => navigate("/premium")}
          className="w-full glass-card rounded-2xl p-5 border-accent/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent" />
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-foreground">VIP Premium</p>
              <p className="text-sm text-muted-foreground">Sınırsız tahmin ve özel analizler</p>
            </div>
            <ChevronRight className="w-5 h-5 text-accent" />
          </div>
        </button>
      </div>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default AppHome;
