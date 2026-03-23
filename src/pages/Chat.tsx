
import { BottomNav } from "@/components/BottomNav";
import { SearchBar } from "@/components/SearchBar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const chats = [
  {
    id: "1",
    name: "拼小圈",
    avatar: "👥",
    lastMessage: "你的好友刚刚加入了拼单",
    time: "刚刚",
    unread: 3,
    type: "system",
  },
  {
    id: "2",
    name: "官方客服",
    avatar: "🎧",
    lastMessage: "亲，有什么问题可以帮您？",
    time: "10:30",
    unread: 1,
    type: "service",
  },
  {
    id: "3",
    name: "水果拼团群",
    avatar: "🍎",
    lastMessage: "还差 1 人成团，快来加入！",
    time: "09:15",
    unread: 5,
    type: "group",
  },
  {
    id: "4",
    name: "数码好物分享",
    avatar: "📱",
    lastMessage: "这个耳机真的超值！",
    time: "昨天",
    unread: 0,
    type: "group",
  },
  {
    id: "5",
    name: "商家 - 苹果旗舰店",
    avatar: "🏪",
    lastMessage: "亲，您的订单已发货",
    time: "昨天",
    unread: 0,
    type: "merchant",
  },
];

const Chat = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部 */}
      <div className="sticky top-0 bg-white z-40 border-b">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="font-bold text-lg text-foreground">消息</h1>
            <span className="text-sm text-primary cursor-pointer">全部已读</span>
          </div>
          <SearchBar placeholder="搜索聊天记录" />
        </div>
      </div>

      {/* 消息列表 */}
      <div className="p-4">
        {/* 系统通知 */}
        <div className="mb-4">
          <h2 className="text-sm font-medium text-muted-foreground mb-2">系统通知</h2>
          <Card className="border cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔔</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">拼小圈动态</p>
                    <span className="text-xs text-muted-foreground">刚刚</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    你的好友刚刚加入了拼单
                  </p>
                </div>
                <Badge className="bg-red-500 text-white">3</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 聊天列表 */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-2">聊天列表</h2>
          <div className="space-y-2">
            {chats.slice(1).map((chat) => (
              <Card key={chat.id} className="border cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-muted text-2xl">
                        {chat.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground">{chat.name}</p>
                        <span className="text-xs text-muted-foreground">{chat.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {chat.lastMessage}
                      </p>
                    </div>
                    {chat.unread > 0 && (
                      <Badge className="bg-red-500 text-white">{chat.unread}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* 底部导航 */}
      <BottomNav />
    </div>
  );
};

export default Chat;
