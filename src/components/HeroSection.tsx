import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";

interface HeroSectionProps {
  onBrowseClick: () => void;
}

const HeroSection = ({ onBrowseClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-16 md:py-24">
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border bg-background/50 px-3 py-1 text-sm backdrop-blur-sm">
              <Zap className="h-4 w-4 mr-2 text-accent" />
              <span className="font-medium">Best Deals Online</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Perfect Products
              </span>{" "}
              at Unbeatable Prices
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Discover curated products from trusted brands with exclusive deals, 
              fast shipping, and guaranteed satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground"
                onClick={onBrowseClick}
              >
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.8/5 Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm">Secure Checkout</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-accent/10 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-xl bg-gradient-primary/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-6xl">🛍️</div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 w-32 h-20 bg-background rounded-lg shadow-card p-3 hidden md:block">
              <div className="text-xs text-muted-foreground">Today's Deal</div>
              <div className="font-bold text-accent">50% OFF</div>
            </div>
            
            {/* <div className="absolute -bottom-4 -left-4 w-32 h-20 bg-background rounded-lg shadow-card p-3 hidden md:block">
              <div className="text-xs text-muted-foreground">Free Shipping</div>
              <div className="font-bold text-success">$50+</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;