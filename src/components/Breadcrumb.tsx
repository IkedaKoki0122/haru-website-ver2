"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";

interface BreadcrumbItem {
  href: string;
  label: string;
}

const pathMapping: Record<string, string> = {
  "about": "Utah Study Supportとは",
  "courses": "コース・料金", 
  "topics": "お役立ちブログ",
  "testimonials": "利用者の声",
  "schools": "スクールを探す",
  "qa": "Q&A",
  "company": "会社情報",
  "contact": "お問い合わせ",
  "message": "メッセージ",
  "privacy": "プライバシーポリシー",
  "terms": "利用規約",
  "legal": "法的事項"
};

export default function Breadcrumb() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;
  
  const pathSegments = pathname.split("/").filter(Boolean);
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { href: "/", label: "ホーム" }
  ];
  
  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = pathMapping[segment] || segment;
    breadcrumbItems.push({
      href: currentPath,
      label
    });
  });
  
  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="パンくずナビゲーション">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
              )}
              {index === 0 ? (
                <Link href={item.href} className="flex items-center text-gray-500 hover:text-orange-500 transition-colors">
                  <HomeIcon className="h-4 w-4 mr-1" />
                  {item.label}
                </Link>
              ) : index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-gray-500 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}