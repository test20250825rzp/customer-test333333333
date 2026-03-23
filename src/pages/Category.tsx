
import { BottomNav } from "@/components/BottomNav";
import { SearchBar } from "@/components/SearchBar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const mainCategories = [
  { id: "fresh", name: "生鲜水果", icon: "🍎", subcategories: ["苹果", "香蕉", "橙子", "葡萄", "西瓜"] },
  { id: "fashion", name: "服饰鞋包", icon: "👕", subcategories: ["男装", "女装", "鞋子", "包包", "配饰"] },
  { id: "digital", name: "数码电器", icon: "📱", subcategories: ["手机", "电脑", "耳机", "相机", "智能设备"] },
  { id: "home", name: "家居家装", icon: "🏠", subcategories: ["家具", "家纺", "厨具", "收纳", "装饰"] },
  { id: "beauty", name: "美妆个护", icon: "💄", subcategories: ["护肤", "彩妆", "洗发", "沐浴", "香水"] },
  { id: "food", name: "食品饮料", icon: "🍪", subcategories: ["零食", "饮料", "坚果", "茶叶", "粮油"] },
  { id: "baby", name: "母婴用品", icon: "👶", subcategories: ["奶粉", "尿裤", "童装", "玩具", "孕产"] },
  { id: "sports", name: "运动户外", icon: "🏃", subcategories: ["运动服", "运动鞋", "器材", "户外", "健身"] },
];

const Category = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部搜索栏 */}
      <div className="sticky top-0 bg-white z-40 border-b">
        <div className="px-4 py-3">
          <SearchBar placeholder="搜索商品分类" />
        </div>
      </div>

      {/* 分类内容 */}
      <div className="flex">
        {/* 左侧主分类 */}
        <div className="w-24 bg-muted/50 min-h-screen">
          {mainCategories.map((cat, index) => (
            <div
              key={cat.id}
              className={`p-3 text-center cursor-pointer hover:bg-muted transition-colors ${
                index === 0 ? "bg-white" : ""
              }`}
            >
              <span className="text-2xl block mb-1">{cat.icon}</span>
              <span className="text-xs text-foreground">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* 右侧子分类 */}
        <div className="flex-1 p-4">
          <h2 className="font-bold text-lg text-foreground mb-4">生鲜水果</h2>
          <div className="grid grid-cols-3 gap-3">
            {mainCategories[0].subcategories.map((sub) => (
              <Card key={sub} className="border cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-3 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🍎</span>
                  </div>
                  <p className="text-sm text-foreground">{sub}</p>
                  <p className="text-xs text-muted-foreground mt-1">1000+ 件</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 推荐分类 */}
          <h2 className="font-bold text-lg text-foreground mt-6 mb-4">热门分类</h2>
          <div className="space-y-3">
            {[
              { name: "限时秒杀", count: 500, color: "bg-red-500" },
              { name: "百亿补贴", count: 1200, color: "bg-orange-500" },
              { name: "品牌特卖", count: 800, color: "bg-purple-500" },
              { name: "新人专享", count: 300, color: "bg-green-500" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-3 bg-card rounded-lg border cursor-pointer hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-lg">🔥</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.count} 件商品</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
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

export default Category;
