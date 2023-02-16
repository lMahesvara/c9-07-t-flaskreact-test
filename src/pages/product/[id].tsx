import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs"
import DiscountTag from "@/components/cards/product-card/DiscountTag"
import ProductCard from "@/components/cards/product-card/ProductCard"
import SingleProductCarousel from "@/components/carousel/product-page-carousel/SingleProductCarousel"
import RecommendedProducts from "@/components/shared/RecommendedProducts"
import Submit from "@/components/shared/Submit"
import React from "react"

const Product = () => {
  return (
    <main className="p-4 bg-bgColor">
      <Breadcrumbs category="Figuras" productName="FUNKO POP Venom" />
      <div>
        {/* Carousel */}
        <div>
          <SingleProductCarousel />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">FUNKO POP Venom</h3>
          <p className="mt-2 text-sm font-medium line-through text-discount">
            $4.300
          </p>
          <span className="flex items-center text-[32px] font-semibold text-white">
            $3.526
            <DiscountTag discount={18} textSize="text-xs" w="w-12" h="h-6" />
          </span>
          <p className="text-sm font-normal text-description ">
            Lorem ipsum dolor sit amet consectetur. Nunc blan rem ipsum dolor
            sit amet consectetur. Nunc blan
          </p>
          <Submit label="Agregar al carrito" />
          <button className="rounded-lg bg-transparent py-3 grid place-content-center border-2 border-primary w-full text-white leading-[19px] font-medium tracking-[-0.165px] mt-4">
            Compra ahora
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-9">
          <h3 className="text-base font-medium text-white">Descripción</h3>
          <p className="text-sm font-normal text-description">
            Lorem ipsum dolor sit amet consectetur. Nunc blan rem ipsum dolor
            sit amet consectetur. Nunc blan
          </p>
          <p className="text-sm font-normal text-description">
            Lorem ipsum dolor sit amet consectetur. Nunc blan rem ipsum dolor
            sit amet consectetur. Nunc blan
          </p>
        </div>
        <RecommendedProducts />
      </div>
    </main>
  )
}

export default Product
