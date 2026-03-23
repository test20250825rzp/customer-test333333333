
import { BottomNav } from "@/components/BottomNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Minus, Plus } from "lucide-react";
import { useState } from "react";

const cartItems = [
  {
    id: "1",
    title: "新鲜苹果 红富士 5 斤装",
    image: "https://picsum.photos/seed/apple/100/100",
    price: 19.9,
    quantity: 2,
    isGroupBuy: true,
    groupPrice: 15.9,
  },
  {
    id: "2",
    title: "无线蓝牙耳机 降噪入耳式",
    image: "https://picsum.photos/seed/headphone/100/100",
    price: 59.9,
    quantity: 1,
    isGroupBuy: true,
    groupPrice: 49.9,
  },
  {
    id: "3",
    title: "零食大礼包 网红小吃",
    image: "https://picsum.photos/seed/snack/100/100",
    price: 39.9,
    quantity: 3,
    isGroupBuy: false,
  },
];

const Cart = () => {
  const [selected, setSelected] = useState<string[]>(["1", "2"]);
  const [quantities, setQuantities] = useState({ "1": 2, "2": 1, "3": 3 });

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const total = cartItems
    .filter((item) => selected.includes(item.id))
    .reduce((sum, item) => {
      const price = item.isGroupBuy ? item.groupPrice : item.price;
      return sum + price * (quantities[item.id] || 1);
    }, 0);

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* 顶部标题 */}
      <div className="sticky top-0 bg-white z-40 border-b">
        <div className="px-4 py-3">
          <h1 className="font-bold text-lg text-foreground">购物车 ({cartItems.length})</h1>
        </div>
      </div>

      {/* 购物车内容 */}
      <div className="p-4">
        {/* 拼单提示 */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <p className="text-sm text-red-600">
            💡 提示：选择拼团商品并发起拼单，可享受更优惠价格！
          </p>
        </div>

        {/* 购物车列表 */}
        <div className="space-y-3">
          {cartItems.map((item) => (
            <Card key={item.id} className="border overflow-hidden">
              <CardContent className="p-3">
                <div className="flex gap-3">
                  <Checkbox
                    checked={selected.includes(item.id)}
                    onCheckedChange={() => toggleSelect(item.id)}
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium line-clamp-2 mb-2">
                      {item.title}
                    </h3>
                    {item.isGroupBuy && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-500 font-bold">
                          ¥{item.groupPrice.toFixed(2)}
                        </span>
                        <span className="text-muted-foreground text-xs line-through">
                          ¥{item.price.toFixed(2)}
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                          拼团价
                        </span>
                      </div>
                    )}
                    {!item.isGroupBuy && (
                      <p className="text-red-500 font-bold mb-2">
                        ¥{item.price.toFixed(2)}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 text-muted-foreground hover:bg-muted"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-3 text-sm">{quantities[item.id]}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 text-muted-foreground hover:bg-muted"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 推荐商品 */}
        <div className="mt-6">
          <h2 className="font-bold text-lg text-foreground mb-3">猜你喜欢</h2>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border cursor-pointer">
                <CardContent className="p-2">
                  <img
                    src={`https://picsum.photos/seed/rec${i}/150/150`}
                    alt="推荐"
                    className="w-full aspect-square object-cover rounded mb-2"
                  />
                  <p className="text-xs line-clamp-2 mb-1">
                    推荐商品{i} 超值优惠 限时特价
                  </p>
                  <p className="text-red-500 font-bold text-sm">
                    ¥{(Math.random() * 50 + 9.9).toFixed(1)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* 底部结算栏 */}
      <div className="fixed bottom-14 left-0 right-0 bg-white border-t p-3 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={selected.length === cartItems.length}
              onCheckedChange={() => {
                if (selected.length === cartItems.length) {
                  setSelected([]);
                } else {
                  setSelected(cartItems.map((i) => i.id));
                }
              }}
            />
            <span className="text-sm text-foreground">全选</span>
            <span className="text-muted-foreground text-sm">
              已选 {selected.length} 件
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">合计:</p>
              <p className="text-red-500 font-bold text-lg">¥{total.toFixed(2)}</p>
            </div>
            <Button className="bg-gradient-red text-white px-6">
              去结算 ({selected.length})
            </Button>
          </div>
        </div>
      </div>

      {/* 底部导航 */}
      <BottomNav />
    </div>
  );
};

export default Cart;
