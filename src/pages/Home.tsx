
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { FlashSaleBanner } from "@/components/FlashSaleBanner";
import { CategoryGrid } from "@/components/CategoryGrid";
import { BottomNav } from "@/components/BottomNav";
import { Bell, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const mockProducts = [
  {
    id: "1",
    title: "新鲜苹果 红富士 5斤装 脆甜多汁 产地直发",
    image: "https://picsum.photos/seed/apple/300/300",
    price: 19.9,
    originalPrice: 39.9,
    sales: 10000,
    isGroupBuy: true,
    groupPrice: 15.9,
    groupSize: 2,
    groupRemaining: 1,
    badge: "百亿补贴",
  },
  {
    id: "2",
    title: "无线蓝牙耳机 降噪入耳式 长续航 运动防水",
    image: "https://picsum.photos/seed/headphone/300/300",
    price: 59.9,
    originalPrice: 199,
    sales: 50000,
    isGroupBuy: true,
    groupPrice: 49.9,
    groupSize: 3,
    groupRemaining: 2,
    isFlashSale: true,
    endTime: "02:30",
  },
  {
    id: "3",
    title: "纯棉四件套 全棉床上用品 简约北欧风 1.8m 床",
    image: "https://picsum.photos/seed/bedding/300/300",
    price: 89.9,
    originalPrice: 299,
    sales: 8000,
    isGroupBuy: true,
    groupPrice: 79.9,
    groupSize: 2,
    groupRemaining: 1,
    badge: "品牌",
  },
  {
    id: "4",
    title: "零食大礼包 网红小吃 休闲食品 整箱送女友",
    image: "https://picsum.photos/seed/snack/300/300",
    price: 39.9,
    originalPrice: 88,
    sales: 30000,
    isGroupBuy: true,
    groupPrice: 29.9,
    groupSize: 5,
    groupRemaining: 3,
  },
  {
    id: "5",
    title: "男士休闲鞋 透气运动鞋 轻便跑步鞋 情侣款",
    image: "https://picsum.photos/seed/shoes/300/300",
    price: 79.9,
    originalPrice: 199,
    sales: 15000,
    isGroupBuy: true,
    groupPrice: 69.9,
    groupSize: 2,
    groupRemaining: 1,
  },
  {
    id: "6",
    title: "智能手表 运动手环 心率监测 防水计步器",
    image: "https://picsum.photos/seed/watch/300/300",
    price: 99.9,
    originalPrice: 399,
    sales: 20000,
    isGroupBuy: true,
    groupPrice: 89.9,
    groupSize: 2,
    groupRemaining: 1,
    badge: "新品",
  },
];

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部搜索栏 */}
      <div className="sticky top-0 bg-gradient-red z-40">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <SearchBar 
              placeholder="搜索商品" 
              onSearch={setSearchValue}
            />
            <Button variant="ghost" size="icon" className="text-white">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="px-4 py-4">
        {/* 分类网格 */}
        <CategoryGrid />

        {/* 限时秒杀 */}
        <FlashSaleBanner endTime={new Date(Date.now() + 2 * 60 * 60 * 1000)} />

        {/* 百亿补贴横幅 */}
        <div className="gradient-gold rounded-xl p-4 mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-white font-bold text-lg">百亿补贴</h2>
            <p className="text-white/80 text-sm">大牌正品 低价保障</p>
          </div>
          <Gift className="h-12 w-12 text-white/50" />
        </div>

        {/* 推荐商品 */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg text-foreground">大家都在买</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              查看更多
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* 拼单动态 */}
        <div className="bg-card rounded-xl p-4 mb-4">
          <h2 className="font-bold text-lg text-foreground mb-3">正在拼单</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                <img
                  src={`https://picsum.photos/seed/user${i}/40/40`}
                  alt="用户"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm text-foreground">
                    用户{'***'}{i}正在拼单
                  </p>
                  <p className="text-xs text-muted-foreground">
                    差 1 人成团，还剩 02:30
                  </p>
                </div>
                <Button size="sm" className="bg-red-500 text-white h-8">
                  去拼单
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部导航 */}
      <BottomNav />
    </div>
  );
};

export default Home;
