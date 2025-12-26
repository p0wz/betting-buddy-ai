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
    <div className="absolute bottom-4 left-4 right-4">
      <div className="glass-card rounded-2xl p-2 flex items-center justify-around">
        {items.map((item, i) => (
          <button
            key={i}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              active === i
                ? "gradient-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
