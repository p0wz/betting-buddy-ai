import { Search, Filter, Clock } from "lucide-react";

export const LiveMatchesScreen = () => {
  const matches = [
    {
      league: "Premier League",
      home: { name: "Arsenal", score: 2, logo: "ARS" },
      away: { name: "Liverpool", score: 2, logo: "LIV" },
      minute: "67'",
      prediction: "Beraberlik",
      confidence: 82,
    },
    {
      league: "La Liga",
      home: { name: "Atletico Madrid", score: 1, logo: "ATM" },
      away: { name: "Sevilla", score: 0, logo: "SEV" },
      minute: "34'",
      prediction: "Ev Sahibi",
      confidence: 75,
    },
    {
      league: "Serie A",
      home: { name: "Inter", score: 0, logo: "INT" },
      away: { name: "Milan", score: 0, logo: "MIL" },
      minute: "12'",
      prediction: "Ü 2.5",
      confidence: 68,
    },
  ];

  return (
    <div className="h-full bg-background">
      {/* Header */}
      <div className="p-4 pb-0">
        <h1 className="text-2xl font-bold mb-4">Canlı Maçlar</h1>
        
        {/* Search Bar */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 glass-card rounded-xl px-4 py-3 flex items-center gap-3">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Takım veya lig ara..."
              className="bg-transparent outline-none flex-1 text-sm placeholder:text-muted-foreground"
            />
          </div>
          <button className="glass-card rounded-xl px-4 flex items-center justify-center">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {["Tümü", "Futbol", "Basketbol", "Tenis", "Voleybol"].map((tag, i) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                i === 0
                  ? "gradient-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Matches List */}
      <div className="p-4 pt-0 space-y-3 overflow-y-auto pb-24">
        {matches.map((match, i) => (
          <div key={i} className="glass-card rounded-2xl p-4 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--live))] live-pulse" />
                <span className="text-xs text-[hsl(var(--live))] font-medium">{match.minute}</span>
                <span className="text-xs text-muted-foreground">• {match.league}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Canlı</span>
              </div>
            </div>

            {/* Teams */}
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center font-bold text-sm">
                  {match.home.logo}
                </div>
                <span className="font-semibold">{match.home.name}</span>
              </div>
              <div className="flex items-center gap-3 px-4">
                <span className="text-2xl font-bold">{match.home.score}</span>
                <span className="text-muted-foreground">-</span>
                <span className="text-2xl font-bold">{match.away.score}</span>
              </div>
              <div className="flex-1 flex items-center justify-end gap-3">
                <span className="font-semibold text-right">{match.away.name}</span>
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center font-bold text-sm">
                  {match.away.logo}
                </div>
              </div>
            </div>

            {/* Prediction */}
            <div className="flex items-center justify-between bg-secondary/50 rounded-xl p-3">
              <div>
                <p className="text-xs text-muted-foreground">AI Tahmini</p>
                <p className="font-semibold">{match.prediction}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient-primary rounded-full"
                    style={{ width: `${match.confidence}%` }}
                  />
                </div>
                <span className="text-primary font-bold text-sm">{match.confidence}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
