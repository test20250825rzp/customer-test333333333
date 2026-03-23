
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
        <div className="px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* 商品图片轮播 */}
      <div className="bg-white">
        <div className="aspect-square overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>
        {/* 图片指示器 */}
        <div className="flex gap-2 p-3 overflow-x-auto">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`商品图${i + 1}`}
              className={`w-16 h-16 object-cover rounded border-2 ${i === 0 ? "border-primary" : "border-transparent"}`}
            />
          ))}
        </div>
      </div>

      {/* 商品信息 */}
      <div className="p-4 bg-white border-b">
        {product.badge && (
          <Badge className="bg-accent text-accent-foreground mb-2">{product.badge}</Badge>
        )}
        <h1 className="font-bold text-lg text-foreground mb-2">{product.title}</h1>
        
        {/* 价格 */}
        <div className="flex items-end gap-2 mb-3">
          <span className="text-red-500 font-bold text-2xl">¥{product.price.toFixed(2)}</span>
          <span className="text-muted-foreground text-sm line-through">¥{product.originalPrice.toFixed(2)}</span>
        </div>

        {/* 拼团信息 */}
        {product.isGroupBuy && (
          <Card className="bg-red-50 border-red-200 mb-3">
            <CardContent className="p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-red-500" />
                  <span className="font-medium text-red-600">
                    拼团价 ¥{product.groupPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4" />
                  <span>剩余 {groupInfo.endTime}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {groupInfo.members.map((member, i) => (
                    <img
                      key={i}
                      src={member.avatar}
                      alt={member.name}
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  还差 {groupInfo.remaining} 人成团
                </span>
              </div>
              <Progress value={(groupInfo.remaining / groupInfo.total) * 100} className="h-1.5 mt-2" />
            </CardContent>
          </Card>
        )}

        {/* 销量和评价 */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>已拼{product.sales}件</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
            <span>({product.reviewCount}条评价)</span>
          </div>
        </div>
      </div>

      {/* 服务保障 */}
      <div className="p-4 bg-white border-b">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Truck className="h-4 w-4" />
            <span>48 小时发货</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            <span>假一赔十</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span>7 天无理由</span>
          </div>
        </div>
      </div>

      {/* 规格选择 */}
      <div className="p-4 bg-white border-b">
        <h2 className="font-bold text-foreground mb-3">选择规格</h2>
        <div className="flex flex-wrap gap-2">
          {product.specs.map((spec, i) => (
            <Button
              key={i}
              variant="outline"
              className={`border-primary ${i === 0 ? "bg-primary/10 text-primary" : ""}`}
            >
              {spec}
            </Button>
          ))}
        </div>
      </div>

      {/* 用户评价 */}
      <div className="p-4 bg-white">
        <Tabs defaultValue="reviews" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:border-primary data-[state=active]:text-foreground text-muted-foreground border-b-2 border-transparent rounded-none px-4 py-2 h-auto"
            >
              用户评价 ({product.reviewCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="reviews" className="mt-4">
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>{review.avatar}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{review.user}</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-auto">{review.time}</span>
                  </div>
                  <p className="text-sm text-foreground mb-2">{review.content}</p>
                  {review.images.length > 0 && (
                    <div className="flex gap-2">
                      {review.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="评价图"
                          className="w-16 h-16 object-cover rounded"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              查看全部评价
            </Button>
          </TabsContent>
        </Tabs>
      </div>

      {/* 底部操作栏 */}
      <div className="fixed bottom-14 left-0 right-0 bg-white border-t p-3 z-40">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className={isLiked ? "text-red-500" : ""}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <div className="flex-1" />
          <Button className="bg-orange-500 text-white px-6">
            发起拼单
          </Button>
          <Button className="bg-gradient-red text-white px-6">
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
