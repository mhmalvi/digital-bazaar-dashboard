import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 gap-4">
        <h2 className="text-lg font-semibold tracking-tight">Digital Products Dashboard</h2>
        <div className="ml-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="relative hover:bg-muted"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
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
          <Button className="shadow-sm">
            Add Product
          </Button>
        </div>
      </div>
    </header>
  );
};