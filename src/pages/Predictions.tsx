import { useState } from "react";
import { Target, TrendingUp, Clock, CheckCircle, XCircle, Filter } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import { Button } from "@/components/ui/button";

type PredictionStatus = "pending" | "won" | "lost";
type FilterType = "all" | "pending" | "won" | "lost";

interface Prediction {
  id: number;
  match: string;
  league: string;
  prediction: string;
  odds: string;
  confidence: number;
  status: PredictionStatus;
  date: string;
}

const Predictions = () => {
  const [activeTab, setActiveTab] = useState<"home" | "live" | "predictions" | "profile">("predictions");
  const [filter, setFilter] = useState<FilterType>("all");

  const predictions: Prediction[] = [
    { id: 1, match: "Real Madrid vs Bayern", league: "UCL", prediction: "1", odds: "2.10", confidence: 78, status: "pending", date: "Bugün 21:00" },
    { id: 2, match: "Arsenal vs Man City", league: "PL", prediction: "X", odds: "3.40", confidence: 65, status: "pending", date: "Bugün 22:00" },
    { id: 3, match: "Liverpool vs Chelsea", league: "PL", prediction: "2.5 Üst", odds: "1.85", confidence: 82, status: "won", date: "Dün" },
    { id: 4, match: "Juventus vs Inter", league: "SA", prediction: "KG Var", odds: "1.72", confidence: 75, status: "won", date: "Dün" },
    { id: 5, match: "PSG vs Monaco", league: "L1", prediction: "1", odds: "1.45", confidence: 88, status: "lost", date: "2 gün önce" },
    { id: 6, match: "Dortmund vs Leipzig", league: "BL", prediction: "2.5 Üst", odds: "1.65", confidence: 80, status: "won", date: "2 gün önce" },
  ];

  const filteredPredictions = filter === "all" 
    ? predictions 
    : predictions.filter(p => p.status === filter);

  const stats = {
    total: predictions.length,
    won: predictions.filter(p => p.status === "won").length,
    lost: predictions.filter(p => p.status === "lost").length,
    pending: predictions.filter(p => p.status === "pending").length,
  };

  const getStatusIcon = (status: PredictionStatus) => {
    switch (status) {
      case "won": return <CheckCircle className="w-5 h-5 text-primary" />;
      case "lost": return <XCircle className="w-5 h-5 text-destructive" />;
      default: return <Clock className="w-5 h-5 text-accent" />;
    }
  };

  const getStatusStyle = (status: PredictionStatus) => {
    switch (status) {
      case "won": return "border-l-primary bg-primary/5";
      case "lost": return "border-l-destructive bg-destructive/5";
      default: return "border-l-accent bg-accent/5";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Tahminlerim</h1>
        </div>
      </header>

      {/* Stats */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-4 gap-2">
          <div className="glass-card rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-foreground">{stats.total}</p>
            <p className="text-xs text-muted-foreground">Toplam</p>
          </div>
          <div className="glass-card rounded-xl p-3 text-center border-l-2 border-l-primary">
            <p className="text-xl font-bold text-primary">{stats.won}</p>
            <p className="text-xs text-muted-foreground">Kazandı</p>
          </div>
          <div className="glass-card rounded-xl p-3 text-center border-l-2 border-l-destructive">
            <p className="text-xl font-bold text-destructive">{stats.lost}</p>
            <p className="text-xs text-muted-foreground">Kaybetti</p>
          </div>
          <div className="glass-card rounded-xl p-3 text-center border-l-2 border-l-accent">
            <p className="text-xl font-bold text-accent">{stats.pending}</p>
            <p className="text-xs text-muted-foreground">Bekliyor</p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {(["all", "pending", "won", "lost"] as FilterType[]).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className={`rounded-xl shrink-0 ${filter === f ? "gradient-primary" : ""}`}
            >
              {f === "all" && "Tümü"}
              {f === "pending" && "Bekleyen"}
              {f === "won" && "Kazanan"}
              {f === "lost" && "Kaybeden"}
            </Button>
          ))}
        </div>
      </div>

      {/* Predictions List */}
      <div className="px-4 space-y-3">
        {filteredPredictions.map((pred) => (
          <div
            key={pred.id}
            className={`glass-card rounded-xl p-4 border-l-4 ${getStatusStyle(pred.status)}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className="font-medium text-foreground">{pred.match}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded">
                    {pred.league}
                  </span>
                  <span className="text-xs text-muted-foreground">{pred.date}</span>
                </div>
              </div>
              {getStatusIcon(pred.status)}
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-primary/20 text-primary text-sm font-medium">
                  {pred.prediction}
                </span>
                <span className="text-accent font-semibold">{pred.odds}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full gradient-primary rounded-full"
                    style={{ width: `${pred.confidence}%` }}
                  />
                </div>
                <span className="text-xs text-primary">{pred.confidence}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Predictions;
