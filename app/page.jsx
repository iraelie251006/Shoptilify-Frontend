import Link from "next/link"
import { ArrowRight, ShoppingBag, Truck, CreditCard, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#6050DC] to-[#6050DC] px-4 py-24 text-center md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Welcome to <span className="text-primary">Shopitilify</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl">
              Discover a new way to shop with our curated collection of premium products at unbeatable prices.
            </p>
          </div>
          <div>
            <Button size="lg" className="group rounded-full px-8 text-base">
                <Link href={"/home"} className="flex items-center">
                Visit Our Store
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Why Choose Our Platform</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Premium Selection</h3>
              <p className="text-muted-foreground">Curated products from top global brands</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Fast Delivery</h3>
              <p className="text-muted-foreground">Free shipping on orders over $50</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Secure Payments</h3>
              <p className="text-muted-foreground">Multiple payment options with encryption</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">24/7 Support</h3>
              <p className="text-muted-foreground">Our team is always here to help you</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
