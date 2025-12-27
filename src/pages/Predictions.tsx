import { useState } from "react";
import { TrendingUp, Check, X, Clock, Trophy, Target, Flame, ChevronRight, Zap, Award, BarChart3 } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

type PredictionStatus = "pending" | "won" | "lost";
type FilterType = "all" | "pending" | "won" | "lost";

interface Prediction {
  id: number;
  home: string;
  away: string;
  homeScore: number | null;
  awayScore: number | null;
  league: string;
  prediction: string;
  odds: number;
  confidence: number;
  status: PredictionStatus;
  date: string;
}

const Predictions = () => {
  const [activeTab, setActiveTab] = useState<"home" | "live" | "predictions" | "profile">("predictions");
  const [filter, setFilter] = useState<FilterType>("all");

  const predictions: Prediction[] = [
    { 
      id: 1, 
      home: "Manchester City", 
      away: "Newcastle United",
      homeScore: 3,
      awayScore: 1,
      league: "Premier League", 
      prediction: "Ev Sahibi Kazanır", 
      odds: 1.65, 
      confidence: 85, 
      status: "won", 
      date: "Dün" 
    },
    { 
      id: 2, 
      home: "Paris Saint-Germain", 
      away: "Olympique Lyon",
      homeScore: 1,
      awayScore: 1,
      league: "Ligue 1", 
      prediction: "Üst 3.5 Gol", 
      odds: 2.10, 
      confidence: 72, 
      status: "lost", 
      date: "Dün" 
    },
    { 
      id: 3, 
      home: "Juventus", 
      away: "AS Roma",
      homeScore: null,
      awayScore: null,
      league: "Serie A", 
      prediction: "Karşılıklı Gol Var", 
      odds: 1.85, 
      confidence: 78, 
      status: "pending", 
      date: "Bugün 22:00" 
    },
    { 
      id: 4, 
      home: "Ajax Amsterdam", 
      away: "PSV Eindhoven",
      homeScore: null,
      awayScore: null,
      league: "Eredivisie", 
      prediction: "Üst 2.5 Gol", 
      odds: 1.55, 
      confidence: 91, 
      status: "pending", 
      date: "Yarın 20:00" 
    },
    { 
      id: 5, 
      home: "Real Madrid", 
      away: "Barcelona",
      homeScore: 2,
      awayScore: 1,
      league: "La Liga", 
      prediction: "Ev Sahibi Kazanır", 
      odds: 2.20, 
      confidence: 68, 
      status: "won", 
      date: "2 gün önce" 
    },
    { 
      id: 6, 
      home: "Bayern Munich", 
      away: "Dortmund",
      homeScore: 4,
      awayScore: 2,
      league: "Bundesliga", 
      prediction: "Üst 3.5 Gol", 
      odds: 1.90, 
      confidence: 82, 
      status: "won", 
      date: "3 gün önce" 
    },
  ];

  const filteredPredictions = filter === "all" 
    ? predictions 
    : predictions.filter(p => p.status === filter);

  const stats = {
    total: predictions.length,
    won: predictions.filter(p => p.status === "won").length,
    lost: predictions.filter(p => p.status === "lost").length,
    pending: predictions.filter(p => p.status === "pending").length,
    winRate: Math.round((predictions.filter(p => p.status === "won").length / predictions.filter(p => p.status !== "pending").length) * 100),
    profit: 12.4,
    streak: 5,
  };

  const getStatusConfig = (status: PredictionStatus) => {
    switch (status) {
      case "won":
        return {
          gradient: "from-win/20 via-win/10 to-transparent",
          border: "border-win/30",
          iconBg: "bg-win/20",
          iconColor: "text-win",
          badge: "bg-win/20 text-win border border-win/30",
          glow: "shadow-[0_4px_20px_-4px_hsl(var(--win)/0.4)]",
          icon: Check,
        };
      case "lost":
        return {
          gradient: "from-lose/15 via-lose/5 to-transparent",
          border: "border-lose/20",
          iconBg: "bg-lose/15",
          iconColor: "text-lose",
          badge: "bg-lose/15 text-lose border border-lose/20",
          glow: "",
          icon: X,
        };
      default:
        return {
          gradient: "from-accent/15 via-accent/5 to-transparent",
          border: "border-border/50",
          iconBg: "bg-accent/15",
          iconColor: "text-accent",
          badge: "bg-accent/15 text-accent border border-accent/30",
          glow: "",
          icon: Clock,
        };
    }
  };

  const filterTabs = [
    { key: "all" as FilterType, label: "Tümü", count: stats.total },
    { key: "won" as FilterType, label: "Kazandı", count: stats.won },
    { key: "lost" as FilterType, label: "Kaybetti", count: stats.lost },
    { key: "pending" as FilterType, label: "Bekliyor", count: stats.pending },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 overflow-hidden">
      {/* Premium Header */}
      <div className="relative px-5 pt-6 pb-4">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-display font-bold tracking-tight text-foreground">
              Tahminlerim
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">Son 30 günlük performans</p>
          </div>
          <div className="flex items-center gap-2 glass-card-premium px-3 py-2 rounded-xl">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <Flame className="w-4 h-4 text-foreground" />
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Seri</p>
              <p className="text-sm font-bold text-accent">{stats.streak} Galibiyet</p>
            </div>
          </div>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {/* Win Card */}
          <div className="glass-card-premium rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '0ms' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-win/30 to-win/10 flex items-center justify-center shadow-[0_4px_20px_-4px_hsl(var(--win)/0.4)]">
                <Trophy className="w-5 h-5 text-win" />
              </div>
              <div className="flex items-center gap-1 text-win text-xs font-semibold">
                <TrendingUp className="w-3 h-3" />
                +12%
              </div>
            </div>
            <p className="text-2xl font-display font-bold text-foreground">{stats.won}</p>
            <p className="text-xs text-muted-foreground mt-1">Kazanılan</p>
            <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-win rounded-full transition-all duration-500" style={{ width: `${stats.winRate}%` }} />
            </div>
          </div>

          {/* Lost Card */}
          <div className="glass-card-premium rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '50ms' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lose/20 to-lose/5 flex items-center justify-center">
                <X className="w-5 h-5 text-lose" />
              </div>
            </div>
            <p className="text-2xl font-display font-bold text-foreground">{stats.lost}</p>
            <p className="text-xs text-muted-foreground mt-1">Kaybedilen</p>
            <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-lose/60 rounded-full transition-all duration-500" style={{ width: `${(stats.lost / (stats.won + stats.lost)) * 100}%` }} />
            </div>
          </div>

          {/* Pending Card */}
          <div className="glass-card-premium rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/25 to-accent/5 flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" />
              </div>
            </div>
            <p className="text-2xl font-display font-bold text-foreground">{stats.pending}</p>
            <p className="text-xs text-muted-foreground mt-1">Bekleyen</p>
            <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-accent/60 rounded-full animate-pulse" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        {/* Win Rate Banner */}
        <div className="glass-card-premium rounded-2xl p-4 mb-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.5)]">
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Başarı Oranı</p>
                <p className="text-2xl font-display font-bold text-foreground">%{stats.winRate}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Toplam Kâr</p>
              <p className="text-xl font-bold text-win">+{stats.profit}x</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {filterTabs.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                filter === tab.key 
                  ? "gradient-primary text-primary-foreground shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.5)]" 
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {tab.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-md ${
                filter === tab.key ? "bg-primary-foreground/20" : "bg-muted"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Predictions List */}
      <div className="px-5 space-y-3 overflow-y-auto scrollbar-hide">
        {filteredPredictions.map((pred, i) => {
          const config = getStatusConfig(pred.status);
          const StatusIcon = config.icon;
          
          return (
            <div
              key={pred.id}
              className={`glass-card-premium rounded-2xl overflow-hidden card-hover cursor-pointer animate-slide-up ${config.glow}`}
              style={{ animationDelay: `${i * 50 + 150}ms` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} pointer-events-none`} />
              
              <div className="relative p-4">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${config.iconBg} flex items-center justify-center`}>
                      <StatusIcon className={`w-4 h-4 ${config.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{pred.league}</p>
                      <p className="text-xs font-medium text-foreground/80">{pred.date}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${config.badge}`}>
                    {pred.odds}x
                  </div>
                </div>
                
                {/* Match Info */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
                        H
                      </div>
                      <span className="font-semibold text-foreground truncate">{pred.home}</span>
                      {pred.homeScore !== null && (
                        <span className="ml-auto text-lg font-bold text-foreground">{pred.homeScore}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
                        A
                      </div>
                      <span className="font-semibold text-foreground truncate">{pred.away}</span>
                      {pred.awayScore !== null && (
                        <span className="ml-auto text-lg font-bold text-foreground">{pred.awayScore}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-foreground">{pred.prediction}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Confidence Badge */}
                    <div className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded-lg">
                      <Award className="w-3 h-3 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground">%{pred.confidence}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Predictions;
