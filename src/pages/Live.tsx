import { useState } from "react";
import { Radio, ChevronRight } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Live = () => {
  const [activeTab, setActiveTab] = useState<"home" | "live" | "predictions" | "profile">("live");

  const liveMatches = [
    {
      id: 1,
      league: "Premier League",
      home: "Manchester United",
      away: "Liverpool",
      homeScore: 2,
      awayScore: 1,
      minute: 67,
      events: ["⚽ 23' Rashford", "⚽ 45' Salah", "⚽ 52' Bruno"],
    },
    {
      id: 2,
      league: "La Liga",
      home: "Barcelona",
      away: "Atletico Madrid",
      homeScore: 1,
      awayScore: 1,
      minute: 34,
      events: ["⚽ 12' Lewandowski", "⚽ 28' Griezmann"],
    },
    {
      id: 3,
      league: "Serie A",
      home: "AC Milan",
      away: "Napoli",
      homeScore: 0,
      awayScore: 2,
      minute: 78,
      events: ["⚽ 15' Osimhen", "⚽ 61' Kvaratskhelia"],
    },
    {
      id: 4,
      league: "Bundesliga",
      home: "Dortmund",
      away: "Leipzig",
      homeScore: 3,
      awayScore: 2,
      minute: 89,
      events: ["⚽ 5' Haller", "⚽ 21' Werner", "⚽ 44' Bellingham", "⚽ 56' Werner", "⚽ 82' Reus"],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-destructive live-pulse" />
          <h1 className="text-xl font-bold text-foreground">Canlı Maçlar</h1>
        </div>
        <p className="text-muted-foreground text-sm">{liveMatches.length} maç şu anda oynanıyor</p>
      </header>

      {/* Live Matches */}
      <div className="px-4 space-y-3">
        {liveMatches.map((match) => (
          <div key={match.id} className="glass-card rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground">{match.league}</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive live-pulse" />
                <span className="text-xs font-medium text-destructive">{match.minute}'</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <p className="font-semibold text-foreground">{match.home}</p>
              </div>
              <div className="px-5 py-3 rounded-xl bg-secondary/80">
                <span className="text-2xl font-bold text-foreground">
                  {match.homeScore} - {match.awayScore}
                </span>
              </div>
              <div className="flex-1 text-right">
                <p className="font-semibold text-foreground">{match.away}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {match.events.slice(-2).map((event, idx) => (
                  <span key={idx} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-lg">
                    {event}
                  </span>
                ))}
              </div>
              <button className="text-primary text-sm flex items-center gap-1">
                Detay <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Live;
