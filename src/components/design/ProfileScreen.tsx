import { Trophy, Target, TrendingUp, Settings, Bell, HelpCircle, LogOut, ChevronRight, Crown, Shield, Star } from "lucide-react";

export const ProfileScreen = () => {
  const stats = [
    { label: "Toplam Tahmin", value: "156", icon: Target, color: "text-primary", bg: "bg-primary/10" },
    { label: "Başarı Oranı", value: "78%", icon: TrendingUp, color: "text-win", bg: "bg-win/10" },
    { label: "Kazanç Serisi", value: "5", icon: Trophy, color: "text-accent", bg: "bg-accent/10" },
  ];

  const menuItems = [
    { icon: Bell, label: "Bildirimler", badge: "3", color: "text-primary" },
    { icon: Trophy, label: "Başarılarım", sublabel: "12 rozet", color: "text-accent" },
    { icon: Shield, label: "Güvenlik", color: "text-muted-foreground" },
    { icon: Settings, label: "Ayarlar", color: "text-muted-foreground" },
    { icon: HelpCircle, label: "Yardım & Destek", color: "text-muted-foreground" },
  ];

  return (
    <div className="h-full bg-background p-4 overflow-y-auto pb-24 scrollbar-hide">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-4">
          {/* Glow Effect */}
          <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-50 scale-110" />
          
          <div className="relative w-24 h-24 rounded-full gradient-primary flex items-center justify-center ring-4 ring-background">
            <span className="text-3xl font-display font-bold text-primary-foreground">M</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full gradient-accent flex items-center justify-center ring-4 ring-background shadow-glow-accent">
            <Crown className="w-4 h-4 text-accent-foreground" />
          </div>
        </div>
        
        <h2 className="text-xl font-display font-bold tracking-tight">Mehmet Yılmaz</h2>
        <p className="text-muted-foreground text-sm font-medium">@mehmet_pro</p>
        
        {/* VIP Badge */}
        <div className="mt-4 gradient-accent px-5 py-2.5 rounded-full flex items-center gap-2 shadow-glow-accent">
          <Crown className="w-4 h-4 text-accent-foreground" />
          <span className="text-sm font-bold text-accent-foreground">VIP Üye</span>
          <Star className="w-3 h-3 text-accent-foreground" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card-strong rounded-2xl p-3 text-center card-hover">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-2`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-lg font-display font-bold">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="glass-card-strong rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display font-semibold">Haftalık Performans</h3>
          <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-lg">Bu Hafta</span>
        </div>
        <div className="flex items-end justify-between h-28 gap-2">
          {[65, 80, 45, 90, 70, 85, 75].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full relative">
                <div 
                  className="w-full rounded-xl gradient-primary transition-all duration-500"
                  style={{ height: `${height}px` }}
                />
                {height >= 80 && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <Star className="w-3 h-3 text-accent" />
                  </div>
                )}
              </div>
              <span className="text-[10px] text-muted-foreground font-medium">
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
            className="w-full glass-card rounded-xl p-4 flex items-center justify-between card-hover"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="text-left">
                <span className="font-medium block">{item.label}</span>
                {item.sublabel && (
                  <span className="text-xs text-muted-foreground">{item.sublabel}</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {item.badge && (
                <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>
        ))}

        <button className="w-full glass-card rounded-xl p-4 flex items-center gap-3 text-lose hover:bg-lose/10 transition-colors mt-4">
          <div className="w-10 h-10 rounded-xl bg-lose/10 flex items-center justify-center">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="font-medium">Çıkış Yap</span>
        </button>
      </div>
    </div>
  );
};
