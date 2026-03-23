
import { NavLink } from "react-router-dom";
import { Home, Grid3x3, ShoppingCart, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "首页", icon: Home },
  { path: "/category", label: "分类", icon: Grid3x3 },
  { path: "/cart", label: "购物车", icon: ShoppingCart, badge: 3 },
  { path: "/chat", label: "聊天", icon: MessageCircle },
  { path: "/profile", label: "个人中心", icon: User },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ path, label, icon: Icon, badge }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 px-3 py-1 relative transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )
            }
          >
            <div className="relative">
              <Icon className="h-5 w-5" />
              {badge && (
                <span className="absolute -top-1 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                  {badge > 9 ? "9+" : badge}
                </span>
              )}
            </div>
            <span className="text-xs">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
