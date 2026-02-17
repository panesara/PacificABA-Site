import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, Award, BookOpen } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { toast } from "sonner";

export default function Store() {
  const { isAuthenticated } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [cart, setCart] = useState<{ type: "product" | "bundle"; id: number; name: string; price: string }[]>([]);

  const { data: products, isLoading: productsLoading } = trpc.store.products.useQuery();
  const { data: bundles, isLoading: bundlesLoading } = trpc.store.bundles.useQuery();
  const createCheckout = trpc.store.createCheckoutSession.useMutation();

  const categories = ["All", "General", "Ethics", "Supervision"];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products?.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (item: { type: "product" | "bundle"; id: number; name: string; price: string }) => {
    setCart([...cart, item]);
    toast.success(`${item.name} added to cart!`);
  };

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      window.location.href = getLoginUrl("/store");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
      const itemType = cart[0].type;
      const itemIds = cart.map((item) => item.id);

      const result = await createCheckout.mutateAsync({
        itemType,
        itemIds,
        amount: totalAmount,
      });

      if (result.url) {
        window.open(result.url, "_blank");
        setCart([]);
        toast.success("Redirecting to checkout...");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to create checkout session");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12 border-b">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            CEU Store
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Professional development courses and bundles for BCBAs and ABA professionals
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Filter by Category</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent/10"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Cart Summary */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Cart
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {cart.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                        {cart.map((item, idx) => (
                          <div key={idx} className="text-sm flex justify-between items-start">
                            <span className="flex-1">{item.name}</span>
                            <button
                              onClick={() => setCart(cart.filter((_, i) => i !== idx))}
                              className="text-xs text-destructive hover:underline ml-2"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-2 mb-4">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2)}</span>
                        </div>
                      </div>
                      <Button
                        onClick={handleCheckout}
                        disabled={createCheckout.isPending}
                        className="w-full"
                      >
                        {createCheckout.isPending ? "Processing..." : "Checkout"}
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="courses">Individual Courses</TabsTrigger>
                <TabsTrigger value="bundles">Bundle Packages</TabsTrigger>
              </TabsList>

              {/* Courses Tab */}
              <TabsContent value="courses" className="space-y-6">
                {productsLoading ? (
                  <div className="text-center py-12">Loading courses...</div>
                ) : filteredProducts && filteredProducts.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredProducts.map((product) => (
                      <Card key={product.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{product.name}</CardTitle>
                              <CardDescription>{product.format}</CardDescription>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">${product.price}</div>
                              {product.originalPrice && (
                                <div className="text-xs text-muted-foreground line-through">
                                  ${product.originalPrice}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                          <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Award className="w-4 h-4 text-primary" />
                              <span>{product.ceuCredits} CEUs</span>
                            </div>
                            {product.ethicsCredits > 0 && (
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4 text-accent" />
                                <span>{product.ethicsCredits} Ethics</span>
                              </div>
                            )}
                            {product.supervisionCredits > 0 && (
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span>{product.supervisionCredits} Sup.</span>
                              </div>
                            )}
                          </div>

                          {product.rating && (
                            <div className="flex items-center gap-2 mb-4 text-sm">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(product.rating || 0)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                            </div>
                          )}

                          <Button
                            onClick={() =>
                              handleAddToCart({
                                type: "product",
                                id: product.id,
                                name: product.name,
                                price: product.price.toString(),
                              })
                            }
                            className="w-full"
                          >
                            Add to Cart
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">No courses found</div>
                )}
              </TabsContent>

              {/* Bundles Tab */}
              <TabsContent value="bundles" className="space-y-6">
                {bundlesLoading ? (
                  <div className="text-center py-12">Loading bundles...</div>
                ) : bundles && bundles.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {bundles.map((bundle) => (
                      <Card key={bundle.id} className="group hover:shadow-lg transition-shadow overflow-hidden border-2 border-primary/20 hover:border-primary/50">
                        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs rounded-full mb-2">
                                {bundle.bundleType} Bundle
                              </div>
                              <CardTitle className="text-lg">{bundle.name}</CardTitle>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">${bundle.price}</div>
                              {bundle.originalPrice && (
                                <div className="text-xs text-muted-foreground line-through">
                                  ${bundle.originalPrice}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{bundle.description}</p>

                          <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Award className="w-4 h-4 text-primary" />
                              <span>{bundle.totalCeus} Total CEUs</span>
                            </div>
                            {bundle.ethicsCeus > 0 && (
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4 text-accent" />
                                <span>{bundle.ethicsCeus} Ethics</span>
                              </div>
                            )}
                            {bundle.supervisionCeus > 0 && (
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span>{bundle.supervisionCeus} Sup.</span>
                              </div>
                            )}
                          </div>

                          <Button
                            onClick={() =>
                              handleAddToCart({
                                type: "bundle",
                                id: bundle.id,
                                name: bundle.name,
                                price: bundle.price.toString(),
                              })
                            }
                            className="w-full"
                          >
                            Add to Cart
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">No bundles available</div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
