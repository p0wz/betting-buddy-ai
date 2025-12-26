import { User, Trophy, Target, TrendingUp, Settings, Bell, HelpCircle, LogOut, ChevronRight, Crown } from "lucide-react";

export const ProfileScreen = () => {
  const stats = [
    { label: "Toplam Tahmin", value: "156", icon: Target },
    { label: "Başarı Oranı", value: "78%", icon: TrendingUp },
    { label: "Kazanç Serisi", value: "5", icon: Trophy },
  ];

  const menuItems = [
    { icon: Bell, label: "Bildirimler", badge: "3" },
    { icon: Trophy, label: "Başarılarım" },
    { icon: Settings, label: "Ayarlar" },
    { icon: HelpCircle, label: "Yardım & Destek" },
  ];

  return (
    <div className="h-full bg-background p-4 overflow-y-auto pb-24">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center glow-primary">
            <span className="text-3xl font-bold">M</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <Crown className="w-4 h-4" />
          </div>
        </div>
        <h2 className="text-xl font-bold">Mehmet Yılmaz</h2>
        <p className="text-muted-foreground text-sm">@mehmet_pro</p>
        
        {/* VIP Badge */}
        <div className="mt-3 gradient-accent px-4 py-2 rounded-full flex items-center gap-2">
          <Crown className="w-4 h-4" />
          <span className="text-sm font-semibold">VIP Üye</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card rounded-xl p-3 text-center">
            <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
            <p className="text-lg font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Performance Chart Placeholder */}
      <div className="glass-card rounded-2xl p-4 mb-6">
        <h3 className="font-semibold mb-4">Haftalık Performans</h3>
        <div className="flex items-end justify-between h-24 gap-2">
          {[65, 80, 45, 90, 70, 85, 75].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div 
                className="w-full rounded-t-lg gradient-primary transition-all"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-muted-foreground">
                {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="space-y-2">
        {menuItems.map((item, i) => (
          <button
            key={i}
            className="w-full glass-card rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.badge && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>
        ))}

        <button className="w-full glass-card rounded-xl p-4 flex items-center gap-3 text-[hsl(var(--lose))]">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Çıkış Yap</span>
        </button>
      </div>
    </div>
  );
};
