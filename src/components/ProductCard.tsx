
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  sales?: number;
  isGroupBuy?: boolean;
  groupPrice?: number;
  groupSize?: number;
  groupRemaining?: number;
  isFlashSale?: boolean;
  endTime?: string;
  badge?: string;
}

export function ProductCard({
  title,
  image,
  price,
  originalPrice,
  sales,
  isGroupBuy,
  groupPrice,
  groupSize = 2,
  groupRemaining,
  isFlashSale,
  endTime,
  badge,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover"
        />
        {badge && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs">
            {badge}
          </Badge>
        )}
        {isFlashSale && endTime && (
          <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {endTime}
          </div>
        )}
      </div>
      <CardContent className="p-3">
        <h3 className="text-sm font-medium line-clamp-2 mb-2 h-9">{title}</h3>
        
        <div className="flex items-end gap-2 mb-2">
          <span className="text-red-500 font-bold text-lg">¥{price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-muted-foreground text-xs line-through">¥{originalPrice.toFixed(2)}</span>
          )}
        </div>

        {isGroupBuy && groupPrice && (
          <div className="bg-red-50 rounded-lg p-2 mb-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-red-600 font-medium">拼团价 ¥{groupPrice.toFixed(2)}</span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="h-3 w-3" />
                <span>{groupRemaining}/{groupSize}人团</span>
              </div>
            </div>
            {groupRemaining && groupRemaining < groupSize && (
              <div className="mt-1">
                <div className="h-1.5 bg-red-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: `${(groupRemaining / groupSize) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          {sales && (
            <span className="text-xs text-muted-foreground">已拼{sales}件</span>
          )}
          <Button 
            size="sm" 
            className={cn(
              "h-7 text-xs px-3",
              isGroupBuy ? "bg-gradient-red text-white" : "bg-primary text-primary-foreground"
            )}
          >
            {isGroupBuy ? "去拼团" : "立即购买"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
