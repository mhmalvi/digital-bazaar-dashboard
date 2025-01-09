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
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <CardHeader>
        <h3 className="font-semibold truncate">{title}</h3>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-sm text-muted-foreground">{sales} sales</span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="w-full" variant="outline">Edit</Button>
        <Button className="w-full">View</Button>
      </CardFooter>
    </Card>
  );
};