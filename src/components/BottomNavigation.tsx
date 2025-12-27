import { Home, Radio, Target, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BottomNavigationProps {
  activeTab: "home" | "live" | "predictions" | "profile";
  onTabChange: (tab: "home" | "live" | "predictions" | "profile") => void;
}

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const navigate = useNavigate();

  const tabs = [
    { id: "home" as const, icon: Home, label: "Ana Sayfa", path: "/app" },
    { id: "live" as const, icon: Radio, label: "Canlı", path: "/app/live" },
    { id: "predictions" as const, icon: Target, label: "Tahminler", path: "/app/predictions" },
    { id: "profile" as const, icon: User, label: "Profil", path: "/app/profile" },
  ];

  const handleTabClick = (tab: typeof tabs[0]) => {
    onTabChange(tab.id);
    navigate(tab.path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2">
      <div className="glass-card rounded-2xl p-2 flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all ${
                isActive
                  ? "gradient-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
