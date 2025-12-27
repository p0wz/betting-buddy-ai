import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Crown, Zap, Star, Shield, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  icon: React.ReactNode;
  popular: boolean;
  features: PlanFeature[];
  color: string;
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Starter",
    price: 49,
    period: "/ay",
    description: "Başlangıç için ideal",
    icon: <Zap className="w-6 h-6" />,
    popular: false,
    color: "primary",
    features: [
      { text: "Günlük 5 tahmin", included: true },
      { text: "Temel istatistikler", included: true },
      { text: "Maç bildirimleri", included: true },
      { text: "VIP tahminler", included: false },
      { text: "Canlı destek", included: false },
      { text: "API erişimi", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 99,
    period: "/ay",
    description: "En popüler seçim",
    icon: <Crown className="w-6 h-6" />,
    popular: true,
    color: "accent",
    features: [
      { text: "Sınırsız tahmin", included: true },
      { text: "Gelişmiş istatistikler", included: true },
      { text: "Anlık bildirimler", included: true },
      { text: "VIP tahminler", included: true },
      { text: "7/24 canlı destek", included: true },
      { text: "API erişimi", included: false },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: 199,
    period: "/ay",
    description: "Profesyoneller için",
    icon: <Star className="w-6 h-6" />,
    popular: false,
    color: "primary",
    features: [
      { text: "Sınırsız tahmin", included: true },
      { text: "AI destekli analiz", included: true },
      { text: "Özel bildirimler", included: true },
      { text: "VIP+ tahminler", included: true },
      { text: "Öncelikli destek", included: true },
      { text: "API erişimi", included: true },
    ],
  },
];

const Premium = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");
  const [isYearly, setIsYearly] = useState(false);

  const handlePurchase = () => {
    const plan = plans.find(p => p.id === selectedPlan);
    toast({
      title: "Ödeme Sayfasına Yönlendiriliyorsunuz",
      description: `${plan?.name} planı seçildi - ₺${isYearly ? (plan?.price || 0) * 10 : plan?.price}${isYearly ? "/yıl" : "/ay"}`,
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Premium Üyelik</h1>
      </header>

      <div className="relative z-10 px-4 pb-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">%20 indirim - Sınırlı süre</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Premium'a <span className="text-gradient">Yükselt</span>
          </h2>
          <p className="text-muted-foreground">
            Daha fazla tahmin, daha yüksek kazanç
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className={`text-sm ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Aylık
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? "bg-primary" : "bg-secondary"
            }`}
          >
            <div
              className={`absolute top-1 w-5 h-5 rounded-full bg-foreground transition-transform ${
                isYearly ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
            Yıllık <span className="text-primary">(-20%)</span>
          </span>
        </div>

        {/* Plans */}
        <div className="space-y-4 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full text-left glass-card rounded-2xl p-5 transition-all ${
                selectedPlan === plan.id
                  ? plan.popular
                    ? "border-accent glow-accent"
                    : "border-primary glow-primary"
                  : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-3">
                  <Crown className="w-3 h-3" />
                  En Popüler
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? "gradient-accent" : "gradient-primary"
                  }`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-foreground">
                      ₺{isYearly ? plan.price * 10 : plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {isYearly ? "/yıl" : plan.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 text-sm ${
                      feature.included ? "text-foreground" : "text-muted-foreground/50"
                    }`}
                  >
                    {feature.included ? (
                      <Check className="w-4 h-4 text-primary shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-muted-foreground/30 shrink-0" />
                    )}
                    <span className={!feature.included ? "line-through" : ""}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Selection indicator */}
              <div className={`mt-4 flex items-center justify-center gap-2 py-2 rounded-xl transition-colors ${
                selectedPlan === plan.id
                  ? plan.popular
                    ? "bg-accent/20 text-accent"
                    : "bg-primary/20 text-primary"
                  : "bg-secondary/50 text-muted-foreground"
              }`}>
                {selectedPlan === plan.id ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Seçildi</span>
                  </>
                ) : (
                  <span className="text-sm">Seçmek için tıkla</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <Button
          onClick={handlePurchase}
          className="w-full h-14 gradient-primary text-primary-foreground font-semibold rounded-xl text-lg glow-primary"
        >
          Şimdi Başla
        </Button>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Shield className="w-4 h-4" />
            <span>Güvenli Ödeme</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Zap className="w-4 h-4" />
            <span>Anında Aktivasyon</span>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-xs mt-4">
          İstediğiniz zaman iptal edebilirsiniz. İlk 7 gün ücretsiz deneme.
        </p>
      </div>
    </div>
  );
};

export default Premium;
