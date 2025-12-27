import { ReactNode } from "react";
import { Signal, Wifi, Battery } from "lucide-react";

interface PhoneFrameProps {
  children: ReactNode;
  title: string;
}

export const PhoneFrame = ({ children, title }: PhoneFrameProps) => {
  return (
    <div className="flex flex-col items-center gap-6 float-animation" style={{ animationDelay: `${Math.random() * 2}s` }}>
      <h3 className="text-lg font-display font-semibold text-muted-foreground tracking-wide">
        {title}
      </h3>
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Phone Frame */}
        <div className="relative w-[320px] h-[680px] bg-gradient-to-b from-secondary/80 to-secondary/40 rounded-[3rem] p-1.5 shadow-2xl border border-white/10">
          {/* Inner Frame */}
          <div className="absolute inset-1.5 rounded-[2.75rem] bg-gradient-to-b from-card to-background overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
              <div className="w-28 h-8 bg-black rounded-full flex items-center justify-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-secondary/50" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 ring-1 ring-white/5" />
              </div>
            </div>
            
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 pt-2 z-10">
              <span className="text-xs font-semibold font-display tracking-wide">9:41</span>
              <div className="flex items-center gap-1.5">
                <Signal className="w-3.5 h-3.5" />
                <Wifi className="w-3.5 h-3.5" />
                <div className="flex items-center gap-0.5">
                  <Battery className="w-5 h-3" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="pt-12 h-full overflow-hidden">
              {children}
            </div>
          </div>
          
          {/* Side Buttons */}
          <div className="absolute right-[-2px] top-28 w-1 h-12 bg-secondary/60 rounded-l-sm" />
          <div className="absolute left-[-2px] top-24 w-1 h-8 bg-secondary/60 rounded-r-sm" />
          <div className="absolute left-[-2px] top-36 w-1 h-14 bg-secondary/60 rounded-r-sm" />
        </div>
      </div>
    </div>
  );
};
