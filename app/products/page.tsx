import { ProductsHero } from "@/components/products-hero"
import { IndoorCameras } from "@/components/indoor-cameras"
import { OutdoorCameras } from "@/components/outdoor-cameras"
import { ProductFeatures } from "@/components/product-features"

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-16">
      <ProductsHero />
      <IndoorCameras />
      <OutdoorCameras />
      <ProductFeatures />
    </div>
  )
}
