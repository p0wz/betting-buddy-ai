import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  title: string;
}

export const PhoneFrame = ({ children, title }: PhoneFrameProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-lg font-semibold text-muted-foreground">{title}</h3>
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-[320px] h-[680px] bg-card rounded-[3rem] p-2 shadow-2xl border-4 border-secondary">
          {/* Notch */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-secondary rounded-full z-20" />
          
          {/* Screen */}
          <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 pt-2 z-10">
              <span className="text-xs font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-foreground/60 rounded-sm">
                  <div className="w-3/4 h-full bg-primary rounded-sm" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="pt-12 h-full overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
