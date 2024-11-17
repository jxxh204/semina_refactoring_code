import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function SideMenu({
  onClickTab,
  onOpen,
  isOpen,
  menuItems,
  activeTab,
}: {
  onClickTab: any;
  onOpen: any;
  isOpen: boolean;
  menuItems: any;
  activeTab: string;
}) {
  return (
    <main className="flex-1 p-4 overflow-auto">
      <div className="mb-4">
        <Sheet open={isOpen} onOpenChange={onOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-2 mt-4">
              {menuItems.map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onClickTab(item.id);
                  }}
                  className={`flex items-center px-4 py-2 text-left ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted-foreground/10"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}
