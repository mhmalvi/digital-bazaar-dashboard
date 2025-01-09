import { Bell, Settings, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 gap-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <h2 className="text-lg font-semibold tracking-tight hidden sm:block">Digital Products Dashboard</h2>
        </div>
        
        <div className="flex-1 max-w-xl ml-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-8 bg-background"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="relative hover:bg-muted"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center animate-in fade-in">
              3
            </span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-muted"
          >
            <Settings className="h-5 w-5" />
          </Button>
          <Button className="shadow-sm hidden sm:flex">
            Add Product
          </Button>
        </div>
      </div>
    </header>
  );
};