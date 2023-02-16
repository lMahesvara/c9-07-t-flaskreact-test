import ProductCard from '@/components/cards/product-card/ProductCard'
import ImageSkeleton from '@/components/skeleton/ImageSkeleton'

export default function Home() {
  return (
    <>
      <section className='min-h-wNav bg-hero-pattern bg-cover'></section>
      <section>
        <ImageSkeleton />
      </section>
      <section className='min-h-wNav p-4 bg-bgColor pb-8'>
        <h3 className='text-2xl font-bold text-white'>¡Nuevos Ingresos!</h3>
        <div className='grid grid-cols-2 gap-4 mt-4 content-center justify-items-center  sm:grid-cols-4'>
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <ProductCard key={i} />
            ))}
        </div>
      </section>
      <section>
        <ImageSkeleton />
      </section>
    </>
  )
}
