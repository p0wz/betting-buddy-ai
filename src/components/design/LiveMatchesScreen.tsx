import { Search, SlidersHorizontal, Clock, Sparkles, TrendingUp } from "lucide-react";

export const LiveMatchesScreen = () => {
  const matches = [
    {
      league: "Premier League",
      leagueColor: "from-purple-500/20 to-purple-600/10",
      home: { name: "Arsenal", score: 2, logo: "ARS" },
      away: { name: "Liverpool", score: 2, logo: "LIV" },
      minute: "67'",
      prediction: "Beraberlik",
      confidence: 82,
    },
    {
      league: "La Liga",
      leagueColor: "from-orange-500/20 to-orange-600/10",
      home: { name: "Atletico Madrid", score: 1, logo: "ATM" },
      away: { name: "Sevilla", score: 0, logo: "SEV" },
      minute: "34'",
      prediction: "Ev Sahibi",
      confidence: 75,
    },
    {
      league: "Serie A",
      leagueColor: "from-blue-500/20 to-blue-600/10",
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
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-display font-bold tracking-tight">Canlı Maçlar</h1>
          <div className="flex items-center gap-2 text-live">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-live" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-live animate-ping" />
            </div>
            <span className="text-xs font-semibold">24 Canlı</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 glass-card rounded-xl px-4 py-3 flex items-center gap-3">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Takım veya lig ara..."
              className="bg-transparent outline-none flex-1 text-sm placeholder:text-muted-foreground font-medium"
            />
          </div>
          <button className="glass-card rounded-xl px-4 flex items-center justify-center hover:bg-secondary/50 transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {["Tümü", "Futbol", "Basketbol", "Tenis", "Voleybol"].map((tag, i) => (
            <button
              key={tag}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                i === 0
                  ? "gradient-primary text-primary-foreground shadow-glow-primary"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Matches List */}
      <div className="p-4 pt-0 space-y-3 overflow-y-auto pb-24 scrollbar-hide">
        {matches.map((match, i) => (
          <div key={i} className="glass-card-strong rounded-2xl p-4 space-y-4 card-hover cursor-pointer">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-live" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-live animate-ping" />
                </div>
                <span className="text-xs text-live font-bold">{match.minute}</span>
                <span className="text-xs text-muted-foreground">• {match.league}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-lg">
                <Clock className="w-3 h-3" />
                <span className="font-medium">Canlı</span>
              </div>
            </div>

            {/* Teams */}
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${match.leagueColor} flex items-center justify-center border border-white/5`}>
                  <span className="font-bold text-sm">{match.home.logo}</span>
                </div>
                <span className="font-semibold text-sm">{match.home.name}</span>
              </div>
              <div className="flex items-center gap-4 px-4">
                <span className="text-3xl font-display font-bold">{match.home.score}</span>
                <span className="text-muted-foreground font-light">:</span>
                <span className="text-3xl font-display font-bold">{match.away.score}</span>
              </div>
              <div className="flex-1 flex items-center justify-end gap-3">
                <span className="font-semibold text-sm text-right">{match.away.name}</span>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${match.leagueColor} flex items-center justify-center border border-white/5`}>
                  <span className="font-bold text-sm">{match.away.logo}</span>
                </div>
              </div>
            </div>

            {/* Prediction */}
            <div className="flex items-center justify-between bg-secondary/40 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">AI Tahmini</p>
                  <p className="font-semibold text-sm">{match.prediction}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient-primary rounded-full progress-animated"
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
