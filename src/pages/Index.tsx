import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { ProductCard } from "@/components/ProductCard";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

  const recentSales = [
    {
      customer: "John Doe",
      product: "Digital Marketing Guide",
      amount: "$49.99",
      date: "2 minutes ago",
    },
    {
      customer: "Jane Smith",
      product: "UI/UX Templates",
      amount: "$79.99",
      date: "5 minutes ago",
    },
    {
      customer: "Bob Johnson",
      product: "Photography Course",
      amount: "$129.99",
      date: "10 minutes ago",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <DashboardHeader />
      <main className="flex-1 container mx-auto py-8 px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Recent Sales</h2>
            <div className="rounded-xl border bg-card shadow-sm transition-all hover:shadow-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Customer</TableHead>
                    <TableHead className="font-semibold">Product</TableHead>
                    <TableHead className="font-semibold">Amount</TableHead>
                    <TableHead className="font-semibold">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSales.map((sale) => (
                    <TableRow key={sale.customer} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{sale.customer}</TableCell>
                      <TableCell>{sale.product}</TableCell>
                      <TableCell className="text-primary font-semibold">{sale.amount}</TableCell>
                      <TableCell className="text-muted-foreground">{sale.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Top Products</h2>
            <div className="grid gap-4">
              {products.slice(0, 3).map((product) => (
                <div key={product.title} className="flex items-center gap-4 p-4 rounded-xl border bg-card shadow-sm transition-all hover:shadow-md hover:bg-muted/50">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                  </div>
                  <p className="text-lg font-bold text-primary">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">All Products</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;