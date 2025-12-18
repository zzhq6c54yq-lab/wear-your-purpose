import { useState } from "react";
import { X, Plus, Trash2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useProducts, CustomProduct } from "@/contexts/ProductContext";
import { categories } from "@/data/products";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface HiddenProductLoaderProps {
  isOpen: boolean;
  onClose: () => void;
}

const HiddenProductLoader = ({ isOpen, onClose }: HiddenProductLoaderProps) => {
  const { addProduct, customProducts, removeProduct, clearCustomProducts } = useProducts();
  const [showAddForm, setShowAddForm] = useState(true);
  
  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState<string>("ThriveMT");
  const [affirmation, setAffirmation] = useState("");
  const [colors, setColors] = useState("");

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
    setCategory("ThriveMT");
    setAffirmation("");
    setColors("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !description || !price || !image || !category) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    addProduct({
      name,
      description,
      price: parseFloat(price),
      image,
      category: category as CustomProduct['category'],
      affirmation: affirmation || "I am worthy",
      colors: colors.split(",").map(c => c.trim()).filter(Boolean),
    });

    toast({
      title: "Product Added",
      description: `${name} has been added to the collection`,
    });

    resetForm();
  };

  const handleRemove = (id: number) => {
    removeProduct(id);
    toast({
      title: "Product Removed",
      description: "The product has been removed from your collection",
    });
  };

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="max-h-[90vh] bg-background border-t border-gold/30">
        <div className="mx-auto w-full max-w-2xl overflow-y-auto">
          <DrawerHeader className="border-b border-border/50 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-rose-gold rounded-full flex items-center justify-center">
                  <Package size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <DrawerTitle className="font-serif text-xl text-foreground">Secret Product Loader</DrawerTitle>
                  <DrawerDescription className="text-xs tracking-luxury text-muted-foreground">
                    Add products on-the-fly
                  </DrawerDescription>
                </div>
              </div>
              <DrawerClose asChild>
                <button className="p-2 hover:bg-muted rounded-sm transition-colors">
                  <X size={18} />
                </button>
              </DrawerClose>
            </div>
            
            {/* Tab Toggle */}
            <div className="flex mt-6 border border-border/50 rounded-none overflow-hidden">
              <button
                onClick={() => setShowAddForm(true)}
                className={`flex-1 py-3 text-xs tracking-luxury uppercase transition-colors ${
                  showAddForm ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Add Product
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className={`flex-1 py-3 text-xs tracking-luxury uppercase transition-colors ${
                  !showAddForm ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Manage ({customProducts.length})
              </button>
            </div>
          </DrawerHeader>

          {showAddForm ? (
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="text-xs tracking-luxury text-muted-foreground uppercase mb-2 block">
                  Product Name *
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Golden Heart Tee"
                  className="border-border/50 rounded-none focus:border-gold/50"
                />
              </div>

              <div>
                <label className="text-xs tracking-luxury text-muted-foreground uppercase mb-2 block">
                  Description *
                </label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Premium cotton with gold foil emblem..."
                  className="border-border/50 rounded-none focus:border-gold/50 min-h-[80px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-luxury text-muted-foreground uppercase mb-2 block">
                    Price ($) *
                  </label>
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="35"
                    min="1"
                    step="0.01"
                    className="border-border/50 rounded-none focus:border-gold/50"
                  />
                </div>

                <div>
                  <label className="text-xs tracking-luxury text-muted-foreground uppercase mb-2 block">
                    Category *
                  </label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="border-border/50 rounded-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter(c => c !== "All").map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-xs tracking-luxury text-muted-foreground uppercase mb-2 block">
                  Image URL *
                </label>
                <Input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="border-border/50 rounded-none focus:border-gold/50"
                />
                {image && (
                  <div className="mt-3 aspect-square w-24 border border-border/50 overflow-hidden">
                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="text-xs tracking-luxury text-muted-foreground uppercase mb-2 block">
                  Affirmation
                </label>
                <Input
                  value={affirmation}
                  onChange={(e) => setAffirmation(e.target.value)}
                  placeholder="I am worthy of love and healing"
                  className="border-border/50 rounded-none focus:border-gold/50"
                />
              </div>

              <div>
                <label className="text-xs tracking-luxury text-muted-foreground uppercase mb-2 block">
                  Colors (comma-separated)
                </label>
                <Input
                  value={colors}
                  onChange={(e) => setColors(e.target.value)}
                  placeholder="Black, Charcoal, Navy"
                  className="border-border/50 rounded-none focus:border-gold/50"
                />
              </div>

              <Button type="submit" className="w-full btn-gold rounded-none py-6">
                <Plus size={14} className="mr-2" />
                Add to Collection
              </Button>
            </form>
          ) : (
            <div className="p-6">
              {customProducts.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Package size={40} className="mx-auto mb-4 opacity-30" />
                  <p className="text-sm">No custom products added yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {customProducts.map((product) => (
                    <div 
                      key={product.id}
                      className="flex items-center gap-4 p-4 border border-border/50 hover:border-gold/30 transition-colors"
                    >
                      <div className="w-16 h-16 bg-muted overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm text-foreground truncate">{product.name}</h4>
                        <p className="text-xs text-muted-foreground">{product.category} • ${product.price}</p>
                      </div>
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                  
                  <Button
                    variant="outline"
                    onClick={clearCustomProducts}
                    className="w-full mt-4 rounded-none border-destructive/50 text-destructive hover:bg-destructive/10"
                  >
                    Clear All Custom Products
                  </Button>
                </div>
              )}
            </div>
          )}

          <DrawerFooter className="border-t border-border/50 pt-4">
            <p className="text-[10px] tracking-luxury text-muted-foreground text-center uppercase">
              Products saved locally • Only visible on your device
            </p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default HiddenProductLoader;
