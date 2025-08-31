import { useState, useMemo, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Ref for scrolling to products section
  const productsRef = useRef<HTMLDivElement>(null);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "All" || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleBrowseClick = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Section */}
      <HeroSection onBrowseClick={handleBrowseClick} />

      {/* Products Section */}
      <main className="container py-12" ref={productsRef}>
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Discover Amazing Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our curated collection of high-quality products from trusted brands, 
              all with exclusive deals and fast shipping.
            </p>
          </div>

          {/* Category Filter */}
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Results Info */}
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid 
            products={filteredProducts}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold">Gadgets Bazar</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted source for the best deals on quality products.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Help Center</p>
                <p><a href="https://www.youtube.com/@gadgetsbazarin">Contact Us</a></p>
                <p>Returns</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>About Us</p>
                <p>Careers</p>
                <p>Press</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Legal</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Affiliate Disclosure</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Gadgets Bazar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;