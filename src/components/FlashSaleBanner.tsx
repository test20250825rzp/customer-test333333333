
import { Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface FlashSaleBannerProps {
  endTime: Date;
}

export function FlashSaleBanner({ endTime }: FlashSaleBannerProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="gradient-red text-white rounded-lg p-3 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Zap className="h-4 w-4 animate-pulse-slow" />
          <span className="font-bold text-base">限时秒杀</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          <span className="text-xs">距离结束</span>
          <div className="flex gap-0.5 ml-1.5">
            {[
              timeLeft.hours.toString().padStart(2, "0"),
              timeLeft.minutes.toString().padStart(2, "0"),
              timeLeft.seconds.toString().padStart(2, "0"),
            ].map((unit, i) => (
              <span
                key={i}
                className="bg-white text-red-500 text-xs font-bold px-1.5 py-0.5 rounded"
              >
                {unit}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 overflow-x-auto pb-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex-shrink-0 w-16 text-center">
            <div className="bg-white/20 rounded-md p-1.5 mb-1">
              <img
                src={`https://picsum.photos/seed/${i + 10}/150/150`}
                alt="秒杀商品"
                className="w-full aspect-square object-cover rounded"
              />
            </div>
            <div className="text-[10px]">
              <span className="text-yellow-300 font-bold">¥{(Math.random() * 50 + 9.9).toFixed(1)}</span>
              <div className="text-white/80 line-through text-[9px]">¥{(Math.random() * 100 + 50).toFixed(0)}</div>
            </div>
          </div>
        ))}
      </div>
      <Button className="w-full mt-2 bg-white text-red-500 hover:bg-white/90 h-7 text-xs">
        查看全部秒杀
      </Button>
    </div>
  );
}
