import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <h2 className="text-lg font-semibold">Digital Products Dashboard</h2>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button>Add Product</Button>
        </div>
      </div>
    </header>
  );
};