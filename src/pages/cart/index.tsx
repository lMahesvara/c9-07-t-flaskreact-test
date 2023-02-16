import Title from "@/components/shared/Title"
import CartItem from "@/components/cards/CartItem"
import Link from "next/link"
import ValidateBtn from "@/components/shared/ValidateBtn"
import Submit from "@/components/shared/Submit"
import RecommendedProducts from "@/components/shared/RecommendedProducts"

const Cart = () => {
  return (
    <main className="p-6 bg-bgColor">
      <div className="flex flex-col gap-2 mb-4">
        <Title>Mi carrito</Title>
        <Link
          href="/"
          className="text-sm font-normal leading-4 text-white underline hover:text-primary"
        >
          Continuar comprando
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <CartItem />
        <CartItem />
      </div>
      <div>
        <div className="mt-6 mb-4">
          <h3 className="text-sm font-normal leading-6 text-white">
            Calcular costo de envío
          </h3>
          <div className="relative w-full mt-2">
            <input
              className="w-full rounded-lg text-[13px] leading-6 p-2 bg-white placeholder:text-description text-black focus:outline-none"
              type="number"
              placeholder="Código postal"
              maxLength={5}
            />
            <ValidateBtn />
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-[#D9D9D9] text-xs leading-6 font-normal">
              Costo de envío
            </p>
            <p className="text-[#D9D9D9] text-sm leading-6 font-normal"> $ -</p>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <h3 className="text-sm font-normal leading-6 text-white">
            Calcular costo de envío
          </h3>
          <div className="relative w-full mt-2">
            <input
              className="w-full rounded-lg text-[13px] leading-6 p-2 bg-white placeholder:text-description text-black focus:outline-none"
              type="text"
              placeholder="Ingresa tu código"
            />
            <ValidateBtn />
          </div>
          <div className="justify-between hidden mt-2">
            <p className="text-[#D9D9D9] text-xs leading-6 font-normal">
              Costo de envío
            </p>
            <p className="text-[#D9D9D9] text-sm leading-6 font-normal"> $ -</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-6 -mb-2">
          <p className="text-base font-normal leading-6 text-white uppercase">
            Subtotal
          </p>
          <p className="text-xl font-semibold leading-6 text-white"> $7.052</p>
        </div>
        <Submit label="Comprar" />
      </div>
      <RecommendedProducts />
    </main>
  )
}

export default Cart
