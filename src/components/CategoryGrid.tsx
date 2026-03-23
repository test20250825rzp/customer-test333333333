
import { cn } from "@/lib/utils";

interface CategoryItem {
  icon: string;
  label: string;
  color: string;
}

const categories: CategoryItem[] = [
  { icon: "🍎", label: "生鲜水果", color: "bg-green-100" },
  { icon: "👕", label: "服饰鞋包", color: "bg-pink-100" },
  { icon: "📱", label: "数码电器", color: "bg-blue-100" },
  { icon: "🏠", label: "家居家装", color: "bg-orange-100" },
  { icon: "💄", label: "美妆个护", color: "bg-purple-100" },
  { icon: "🍪", label: "食品饮料", color: "bg-yellow-100" },
  { icon: "👶", label: "母婴用品", color: "bg-red-100" },
  { icon: "🏃", label: "运动户外", color: "bg-teal-100" },
  { icon: "📚", label: "图书文具", color: "bg-indigo-100" },
  { icon: "🎁", label: "礼品鲜花", color: "bg-rose-100" },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-5 gap-3 mb-4">
      {categories.map((cat) => (
        <div
          key={cat.label}
          className={cn(
            "flex flex-col items-center gap-1 p-2 rounded-lg cursor-pointer hover:opacity-80 transition-opacity",
            cat.color
          )}
        >
          <span className="text-2xl">{cat.icon}</span>
          <span className="text-xs text-center text-foreground">{cat.label}</span>
        </div>
      ))}
    </div>
  );
}
