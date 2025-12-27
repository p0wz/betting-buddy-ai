import { Home, Zap, BarChart3, User } from "lucide-react";

interface BottomNavProps {
  active: number;
}

export const BottomNav = ({ active }: BottomNavProps) => {
  const items = [
    { icon: Home, label: "Ana Sayfa" },
    { icon: Zap, label: "Canlı" },
    { icon: BarChart3, label: "Tahminler" },
    { icon: User, label: "Profil" },
  ];

  return (
    <div className="absolute bottom-4 left-3 right-3">
      <div className="glass-card-strong rounded-2xl p-2 flex items-center justify-around">
        {items.map((item, i) => (
          <button
            key={i}
            className={`relative flex flex-col items-center gap-1 px-4 py-2.5 rounded-xl transition-all duration-300 ${
              active === i
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {/* Active Background */}
            {active === i && (
              <div className="absolute inset-0 gradient-primary rounded-xl shadow-glow-primary" />
            )}
            
            {/* Icon & Label */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-semibold tracking-wide">{item.label}</span>
            </div>
            
            {/* Active Indicator Dot */}
            {active === i && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-foreground" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
