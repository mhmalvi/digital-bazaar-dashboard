import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { ProductCard } from "@/components/ProductCard";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

const Index = () => {
  // Mock data - in a real app this would come from an API
  const stats = [
    {
      title: "Total Revenue",
      value: "$15,231.89",
      description: "+20.1% from last month",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Sales",
      value: "2,345",
      description: "+180.1% from last month",
      icon: <ShoppingCart className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Active Users",
      value: "12,234",
      description: "+19% from last month",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Growth Rate",
      value: "+573.7%",
      description: "+201 since last hour",
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  const products = [
    {
      title: "Digital Marketing Guide 2024",
      price: "49.99",
      sales: 234,
      image: "/placeholder.svg",
    },
    {
      title: "UI/UX Design Templates Bundle",
      price: "79.99",
      sales: 189,
      image: "/placeholder.svg",
    },
    {
      title: "Photography Masterclass",
      price: "129.99",
      sales: 567,
      image: "/placeholder.svg",
    },
    {
      title: "Business Plan Templates",
      price: "29.99",
      sales: 892,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto py-6 px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Your Products</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;