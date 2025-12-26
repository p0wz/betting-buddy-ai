import { Calendar, TrendingUp, Check, X, Clock } from "lucide-react";

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
          bg: "bg-[hsl(var(--win))]/10",
          border: "border-[hsl(var(--win))]/30",
          icon: <Check className="w-4 h-4 text-[hsl(var(--win))]" />,
          badge: "bg-[hsl(var(--win))]",
        };
      case "lost":
        return {
          bg: "bg-[hsl(var(--lose))]/10",
          border: "border-[hsl(var(--lose))]/30",
          icon: <X className="w-4 h-4 text-[hsl(var(--lose))]" />,
          badge: "bg-[hsl(var(--lose))]",
        };
      default:
        return {
          bg: "bg-secondary",
          border: "border-border",
          icon: <Clock className="w-4 h-4 text-muted-foreground" />,
          badge: "bg-accent",
        };
    }
  };

  return (
    <div className="h-full bg-background">
      {/* Header */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Tahminlerim</h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="glass-card rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-primary">24</p>
            <p className="text-xs text-muted-foreground">Kazandı</p>
          </div>
          <div className="glass-card rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-[hsl(var(--lose))]">8</p>
            <p className="text-xs text-muted-foreground">Kaybetti</p>
          </div>
          <div className="glass-card rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-accent">5</p>
            <p className="text-xs text-muted-foreground">Bekliyor</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4">
          {["Tümü", "Kazandı", "Kaybetti", "Bekliyor"].map((tab, i) => (
            <button
              key={tab}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Predictions List */}
      <div className="px-4 space-y-3 overflow-y-auto pb-24">
        {predictions.map((pred, i) => {
          const styles = getStatusStyles(pred.status);
          return (
            <div
              key={i}
              className={`rounded-xl p-4 border ${styles.bg} ${styles.border}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {styles.icon}
                  <span className="text-xs text-muted-foreground">{pred.date}</span>
                </div>
                <div className={`px-2 py-1 rounded-md text-xs font-bold ${styles.badge}`}>
                  {pred.odds}x
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{pred.home} vs {pred.away}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-primary font-medium">{pred.prediction}</span>
                    {pred.result !== "-" && (
                      <span className="text-xs text-muted-foreground">• Sonuç: {pred.result}</span>
                    )}
                  </div>
                </div>
                <TrendingUp className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
