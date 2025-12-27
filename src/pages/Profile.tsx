import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Settings, Trophy, TrendingUp, Crown, ChevronRight, Bell, Shield, LogOut, CreditCard } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"home" | "live" | "predictions" | "profile">("profile");

  const user = {
    name: "Ahmet Yılmaz",
    email: "ahmet@email.com",
    plan: "Pro",
    joinDate: "Ocak 2024",
    avatar: null,
  };

  const stats = [
    { label: "Toplam Tahmin", value: "156", icon: <TrendingUp className="w-4 h-4 text-primary" /> },
    { label: "Başarı Oranı", value: "78%", icon: <Trophy className="w-4 h-4 text-accent" /> },
    { label: "Kazanç", value: "+₺4,520", icon: <CreditCard className="w-4 h-4 text-primary" /> },
  ];

  const menuItems = [
    { icon: Crown, label: "Premium Üyelik", action: () => navigate("/premium"), badge: user.plan },
    { icon: Bell, label: "Bildirimler", action: () => {}, badge: "3" },
    { icon: Shield, label: "Gizlilik & Güvenlik", action: () => {} },
    { icon: Settings, label: "Ayarlar", action: () => {} },
  ];

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Profil</h1>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Settings className="w-5 h-5" />
        </Button>
      </header>

      {/* Profile Card */}
      <div className="px-4 mb-6">
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-2 py-0.5 rounded-full gradient-accent text-accent-foreground font-medium">
                  {user.plan}
                </span>
                <span className="text-xs text-muted-foreground">Üye: {user.joinDate}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-secondary/50 rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {stat.icon}
                </div>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Banner */}
      <div className="px-4 mb-6">
        <button
          onClick={() => navigate("/premium")}
          className="w-full glass-card rounded-2xl p-4 border-accent/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent" />
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <Crown className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-foreground">Elite'e Yükselt</p>
              <p className="text-sm text-muted-foreground">AI destekli analizler ve daha fazlası</p>
            </div>
            <ChevronRight className="w-5 h-5 text-accent" />
          </div>
        </button>
      </div>

      {/* Menu */}
      <div className="px-4 mb-6">
        <div className="glass-card rounded-2xl overflow-hidden">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={item.action}
                className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors border-b border-border/30 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-foreground">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="px-4">
        <Button
          variant="outline"
          onClick={handleLogout}
          className="w-full h-12 rounded-xl border-destructive/50 text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Çıkış Yap
        </Button>
      </div>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Profile;
