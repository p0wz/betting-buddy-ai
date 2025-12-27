import { TrendingUp, Check, X, Clock, Trophy, Target, Flame } from "lucide-react";

export const PredictionsScreen = () => {
  const predictions = [
    {
      status: "won",
      home: "Man City",
      away: "Newcastle",
      prediction: "Ev Sahibi",
      odds: 1.65,
      result: "3-1",
      date: "Dün",
    },
    {
      status: "lost",
      home: "PSG",
      away: "Lyon",
      prediction: "Ü 3.5",
      odds: 2.10,
      result: "1-1",
      date: "Dün",
    },
    {
      status: "pending",
      home: "Juventus",
      away: "Roma",
      prediction: "KG Var",
      odds: 1.85,
      result: "-",
      date: "Bugün 22:00",
    },
    {
      status: "pending",
      home: "Ajax",
      away: "PSV",
      prediction: "Ü 2.5",
      odds: 1.55,
      result: "-",
      date: "Yarın 20:00",
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "won":
        return {
          bg: "bg-win/10",
          border: "border-win/20",
          icon: <Check className="w-4 h-4 text-win" />,
          badge: "bg-win text-primary-foreground",
          glow: "shadow-[0_0_20px_-5px_hsl(155_70%_50%/0.3)]",
        };
      case "lost":
        return {
          bg: "bg-lose/10",
          border: "border-lose/20",
          icon: <X className="w-4 h-4 text-lose" />,
          badge: "bg-lose text-white",
          glow: "",
        };
      default:
        return {
          bg: "bg-secondary/50",
          border: "border-border",
          icon: <Clock className="w-4 h-4 text-muted-foreground" />,
          badge: "bg-accent text-accent-foreground",
          glow: "",
        };
    }
  };

  return (
    <div className="h-full bg-background">
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-display font-bold tracking-tight">Tahminlerim</h1>
          <div className="flex items-center gap-1.5 bg-accent/15 px-3 py-1.5 rounded-lg">
            <Flame className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-accent">5 Seri</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="glass-card-strong rounded-2xl p-4 text-center card-hover">
            <div className="w-10 h-10 rounded-xl bg-win/10 flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-5 h-5 text-win" />
            </div>
            <p className="text-2xl font-display font-bold text-win">24</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Kazandı</p>
          </div>
          <div className="glass-card-strong rounded-2xl p-4 text-center card-hover">
            <div className="w-10 h-10 rounded-xl bg-lose/10 flex items-center justify-center mx-auto mb-2">
              <X className="w-5 h-5 text-lose" />
            </div>
            <p className="text-2xl font-display font-bold text-lose">8</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Kaybetti</p>
          </div>
          <div className="glass-card-strong rounded-2xl p-4 text-center card-hover">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-2">
              <Target className="w-5 h-5 text-accent" />
            </div>
            <p className="text-2xl font-display font-bold text-accent">5</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Bekliyor</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {["Tümü", "Kazandı", "Kaybetti", "Bekliyor"].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                i === 0 
                  ? "gradient-primary text-primary-foreground shadow-glow-primary" 
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Predictions List */}
      <div className="px-4 space-y-3 overflow-y-auto pb-24 scrollbar-hide">
        {predictions.map((pred, i) => {
          const styles = getStatusStyles(pred.status);
          return (
            <div
              key={i}
              className={`rounded-2xl p-4 border transition-all card-hover cursor-pointer ${styles.bg} ${styles.border} ${styles.glow}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg ${styles.bg} flex items-center justify-center`}>
                    {styles.icon}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{pred.date}</span>
                </div>
                <div className={`px-2.5 py-1 rounded-lg text-xs font-bold ${styles.badge}`}>
                  {pred.odds}x
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-semibold">{pred.home} vs {pred.away}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary font-semibold">{pred.prediction}</span>
                    {pred.result !== "-" && (
                      <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded">
                        Sonuç: {pred.result}
                      </span>
                    )}
                  </div>
                </div>
                <TrendingUp className={`w-5 h-5 ${pred.status === 'won' ? 'text-win' : pred.status === 'lost' ? 'text-lose' : 'text-muted-foreground'}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
