
import { BottomNav } from "@/components/BottomNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  ChevronRight, 
  Wallet, 
  Package, 
  Heart, 
  Ticket, 
  Gift, 
  Star, 
  Settings,
  Shield,
  Headphones
} from "lucide-react";

const menuGroups = [
  {
    title: "我的订单",
    items: [
      { icon: Package, label: "待付款", count: 2 },
      { icon: Package, label: "待发货", count: 1 },
      { icon: Package, label: "待收货", count: 3 },
      { icon: Package, label: "评价", count: 0 },
      { icon: Package, label: "售后", count: 0 },
    ],
  },
  {
    title: "钱包与优惠",
    items: [
      { icon: Wallet, label: "我的钱包" },
      { icon: Ticket, label: "优惠券", badge: "5 张可用" },
      { icon: Gift, label: "天天领现金" },
    ],
  },
  {
    title: "常用工具",
    items: [
      { icon: Heart, label: "我的收藏" },
      { icon: Star, label: "我的关注" },
      { icon: Shield, label: "省钱月卡" },
      { icon: Headphones, label: "官方客服" },
      { icon: Settings, label: "设置" },
    ],
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 用户信息卡片 */}
      <div className="gradient-red text-white">
        <div className="px-4 py-8">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-white">
              <AvatarFallback className="bg-white/20 text-2xl">
                👤
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="font-bold text-lg">拼多多用户</h1>
              <p className="text-white/80 text-sm">ID: 138****8888</p>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-yellow-400 text-yellow-900">VIP 会员</Badge>
                <Badge className="bg-white/20">Lv.3</Badge>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-white">
              <Settings className="h-5 w-5" />
            </Button>
          </div>

          {/* 数据统计 */}
          <div className="flex justify-around mt-6 py-4 border-t border-white/20">
            {[
              { label: "收藏", value: "28" },
              { label: "关注", value: "12" },
              { label: "粉丝", value: "5" },
              { label: "足迹", value: "156" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-bold text-lg">{stat.value}</p>
                <p className="text-white/70 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 菜单列表 */}
      <div className="p-4 space-y-4">
        {/* 我的订单 */}
        {menuGroups.map((group) => (
          <Card key={group.title} className="border overflow-hidden">
            <CardContent className="p-0">
              <div className="p-3 border-b">
                <h2 className="font-bold text-foreground">{group.title}</h2>
              </div>
              <div className="divide-y">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-foreground">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.count !== undefined && item.count > 0 && (
                        <Badge className="bg-red-500 text-white">{item.count}</Badge>
                      )}
                      {item.badge && (
                        <Badge className="bg-orange-500 text-white">{item.badge}</Badge>
                      )}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* 推广卡片 */}
        <Card className="border overflow-hidden">
          <CardContent className="p-4">
            <div className="gradient-gold rounded-lg p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">省钱月卡</h3>
                  <p className="text-sm text-white/80 mt-1">
                    开通立享 5 元无门槛券
                  </p>
                  <Button className="mt-3 bg-white text-orange-600 hover:bg-white/90 text-sm">
                    立即开通
                  </Button>
                </div>
                <Gift className="h-16 w-16 text-white/30" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 底部导航 */}
      <BottomNav />
    </div>
  );
};

export default Profile;
