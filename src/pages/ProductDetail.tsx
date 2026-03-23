
import { useParams, useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  ChevronLeft, 
  Share2, 
  Heart, 
  ShoppingCart, 
  Users, 
  Clock, 
  Truck, 
  Shield, 
  Star,
  MessageCircle,
  ThumbsUp
} from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const product = {
    id: id || "1",
    title: "新鲜苹果 红富士 5 斤装 脆甜多汁 产地直发 新鲜水果",
    image: "https://picsum.photos/seed/apple/400/400",
    images: [
      "https://picsum.photos/seed/apple/400/400",
      "https://picsum.photos/seed/apple2/400/400",
      "https://picsum.photos/seed/apple3/400/400",
      "https://picsum.photos/seed/apple4/400/400",
    ],
    price: 19.9,
    originalPrice: 39.9,
    sales: 10000,
    stock: 998,
    rating: 4.8,
    reviewCount: 3562,
    isGroupBuy: true,
    groupPrice: 15.9,
    groupSize: 2,
    groupRemaining: 1,
    badge: "百亿补贴",
    description: "精选优质红富士苹果，产自陕西洛川，海拔高、光照足、温差大，造就了苹果脆甜多汁的口感。现摘现发，新鲜直达。",
    specs: ["净重：5 斤", "规格：中果 80mm", "包装：纸箱", "产地：陕西洛川"],
  };

  const reviews = [
    { id: "1", user: "张***3", avatar: "张", rating: 5, content: "苹果很新鲜，又脆又甜，包装也很好，没有损坏，会回购！", time: "2024-01-15", images: ["https://picsum.photos/seed/review1/100/100"] },
    { id: "2", user: "李***8", avatar: "李", rating: 5, content: "第二次购买了，品质一如既往的好，价格也很实惠，推荐！", time: "2024-01-14", images: [] },
    { id: "3", user: "王***5", avatar: "王", rating: 4, content: "苹果不错，就是物流有点慢，整体满意。", time: "2024-01-13", images: ["https://picsum.photos/seed/review2/100/100", "https://picsum.photos/seed/review3/100/100"] },
  ];

  const groupInfo = {
    remaining: 1,
    total: 2,
    endTime: "02:30:45",
    members: [
      { avatar: "https://picsum.photos/seed/user1/40/40", name: "张***" },
      { avatar: "https://picsum.photos/seed/user2/40/40", name: "李***" },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <div className="sticky top-0 bg-white z-40 border-b">
        <div className="px-4 py-2 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* 商品图片轮播 */}
      <div className="bg-white">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
        {/* 图片指示器 */}
        <div className="flex gap-1.5 p-2 overflow-x-auto">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`商品图${i + 1}`}
              className={`w-12 h-12 object-cover rounded border ${i === 0 ? "border-primary" : "border-transparent"}`}
            />
          ))}
        </div>
      </div>

      {/* 商品信息 */}
      <div className="p-3 bg-white border-b">
        {product.badge && (
          <Badge className="bg-accent text-accent-foreground mb-1.5 text-xs">{product.badge}</Badge>
        )}
        <h1 className="font-bold text-sm text-foreground mb-1.5 line-clamp-2">{product.title}</h1>
        
        {/* 价格 */}
        <div className="flex items-end gap-1.5 mb-2">
          <span className="text-red-500 font-bold text-xl">¥{product.price.toFixed(2)}</span>
          <span className="text-muted-foreground text-xs line-through">¥{product.originalPrice.toFixed(2)}</span>
        </div>

        {/* 拼团信息 */}
        {product.isGroupBuy && (
          <Card className="bg-red-50 border-red-200 mb-2">
            <CardContent className="p-2">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-red-500" />
                  <span className="font-medium text-red-600 text-sm">
                    拼团价 ¥{product.groupPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-muted-foreground text-xs">
                  <Clock className="h-3.5 w-3.5" />
                  <span>剩余 {groupInfo.endTime}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1.5">
                  {groupInfo.members.map((member, i) => (
                    <img
                      key={i}
                      src={member.avatar}
                      alt={member.name}
                      className="w-5 h-5 rounded-full border border-white"
                    />
                  ))}
                </div>
                <span className="text-[10px] text-muted-foreground">
                  还差 {groupInfo.remaining} 人成团
                </span>
              </div>
              <Progress value={(groupInfo.remaining / groupInfo.total) * 100} className="h-1 mt-1.5" />
            </CardContent>
          </Card>
        )}

        {/* 销量和评价 */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>已拼{product.sales}件</span>
          <div className="flex items-center gap-0.5">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
            <span>({product.reviewCount}条评价)</span>
          </div>
        </div>
      </div>

      {/* 服务保障 */}
      <div className="p-3 bg-white border-b">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-0.5">
            <Truck className="h-3.5 w-3.5" />
            <span>48 小时发货</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Shield className="h-3.5 w-3.5" />
            <span>假一赔十</span>
          </div>
          <div className="flex items-center gap-0.5">
            <ThumbsUp className="h-3.5 w-3.5" />
            <span>7 天无理由</span>
          </div>
        </div>
      </div>

      {/* 规格选择 */}
      <div className="p-3 bg-white border-b">
        <h2 className="font-bold text-sm text-foreground mb-2">选择规格</h2>
        <div className="flex flex-wrap gap-1.5">
          {product.specs.map((spec, i) => (
            <Button
              key={i}
              variant="outline"
              className={`border-primary text-xs h-7 px-2.5 ${i === 0 ? "bg-primary/10 text-primary" : ""}`}
            >
              {spec}
            </Button>
          ))}
        </div>
      </div>

      {/* 用户评价 */}
      <div className="p-3 bg-white">
        <Tabs defaultValue="reviews" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:border-primary data-[state=active]:text-foreground text-muted-foreground border-b-2 border-transparent rounded-none px-3 py-1.5 h-auto text-sm"
            >
              用户评价 ({product.reviewCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="reviews" className="mt-3">
            <div className="space-y-3">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-3 last:border-0">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Avatar className="w-7 h-7">
                      <AvatarFallback className="text-xs">{review.avatar}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium">{review.user}</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-2.5 w-2.5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-muted-foreground ml-auto">{review.time}</span>
                  </div>
                  <p className="text-xs text-foreground mb-1.5">{review.content}</p>
                  {review.images.length > 0 && (
                    <div className="flex gap-1.5">
                      {review.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="评价图"
                          className="w-12 h-12 object-cover rounded"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-3 h-8 text-xs">
              查看全部评价
            </Button>
          </TabsContent>
        </Tabs>
      </div>

      {/* 底部操作栏 */}
      <div className="fixed bottom-14 left-0 right-0 bg-white border-t p-2.5 z-40">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`h-9 w-9 ${isLiked ? "text-red-500" : ""}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <div className="flex-1" />
          <Button className="bg-orange-500 text-white px-4 h-8 text-sm">
            发起拼单
          </Button>
          <Button className="bg-gradient-red text-white px-4 h-8 text-sm">
            单独购买
          </Button>
        </div>
      </div>

      {/* 底部导航 */}
      <BottomNav />
    </div>
  );
};

export default ProductDetail;
