import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  price: string;
  sales: number;
  image: string;
}

export const ProductCard = ({ title, price, sales, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <CardHeader>
        <h3 className="font-semibold truncate">{title}</h3>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">${price}</span>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {sales} sales
          </span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button 
          className="w-full transition-colors" 
          variant="outline"
          >
          Edit
        </Button>
        <Button 
          className="w-full transition-colors" 
          >
          View
        </Button>
      </CardFooter>
    </Card>
  );
};