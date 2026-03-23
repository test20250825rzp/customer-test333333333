
import { BottomNav } from "@/components/BottomNav";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SlidersHorizontal, Grid3x3, List } from "lucide-react";
import { useState } from "react";

const mockProducts = [
  {
    id: "1",
    title: "新鲜苹果 红富士 5 斤装 脆甜多汁 产地直发",
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
  {
    id: "7",
    title: "护肤套装 补水保湿 美白淡斑 官方旗舰店",
    image: "https://picsum.photos/seed/skincare/300/300",
    price: 129.9,
    originalPrice: 399,
    sales: 12000,
    isGroupBuy: true,
    groupPrice: 109.9,
    groupSize: 2,
    groupRemaining: 1,
    badge: "热销",
  },
  {
    id: "8",
    title: "儿童玩具 益智积木 拼装模型 3-6 岁适用",
    image: "https://picsum.photos/seed/toy/300/300",
    price: 49.9,
    originalPrice: 99,
    sales: 25000,
    isGroupBuy: true,
    groupPrice: 39.9,
    groupSize: 3,
    groupRemaining: 2,
  },
];

const ProductList = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部搜索栏 */}
      <div className="sticky top-0 bg-white z-40 border-b">
        <div className="px-4 py-3">
          <SearchBar placeholder="搜索商品" />
        </div>
        
        {/* 筛选排序栏 */}
        <div className="px-4 py-2 flex items-center justify-between border-t">
          <Tabs value={sortBy} onValueChange={setSortBy} className="flex-1">
            <TabsList className="bg-transparent h-auto gap-4 p-0">
              <TabsTrigger value="default" className="data-[state=active]:text-primary text-muted-foreground px-0 h-auto">
                默认
              </TabsTrigger>
              <TabsTrigger value="sales" className="data-[state=active]:text-primary text-muted-foreground px-0 h-auto">
                销量
              </TabsTrigger>
              <TabsTrigger value="price" className="data-[state=active]:text-primary text-muted-foreground px-0 h-auto">
                价格
              </TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:text-primary text-muted-foreground px-0 h-auto">
                新品
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("grid")}
            >
              <Grid3x3 className={`h-4 w-4 ${viewMode === "grid" ? "text-primary" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("list")}
            >
              <List className={`h-4 w-4 ${viewMode === "list" ? "text-primary" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* 商品列表 */}
      <div className="p-4">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 gap-3">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}

        {/* 加载更多 */}
        <div className="mt-6 text-center">
          <Button variant="outline" className="w-full">
            加载更多
          </Button>
        </div>
      </div>

      {/* 底部导航 */}
      <BottomNav />
    </div>
  );
};

export default ProductList;
