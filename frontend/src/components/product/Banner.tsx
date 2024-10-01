"use client";

import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
// import useCarrinho from '@/data/hooks/useCarrinho'
import { Currency } from "@/core";
import Product from "@/core/product/Product";
import useInstallment from "@/data/hooks/useInstallment";
import { useRouter } from "next/navigation";

export interface BannerProps {
  product: Product;
}

export default function Banner(props: BannerProps) {
  const router = useRouter();
  const { product } = props;
  // const { adicionarItem } = useCarrinho()
  const installment = useInstallment(product.promotionalPrice);

  return (
    <div className="flex">
      <div className="flex flex-col border-r border-zinc-500 pr-5">
        <div className="line-through text-zinc-400">
          de R$ {product?.basePrice}
        </div>
        <div className="text-2xl font-semibold">
          <span className="text-base text-zinc-300">por</span>{" "}
          <span className="text-emerald-500">
            R$ {product?.promotionalPrice}
          </span>{" "}
          <span className="text-base text-zinc-300">à vista</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
        <span className="text-base text-zinc-300">
          {installment.installmentsQuantity}x de
        </span>
        {Currency.format(installment.parcelValue)}{" "}
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="flex-1 button bg-pink-600"
          onClick={() => {}}
          // onClick={() => adicionarItem(product)}
        >
          <IconShoppingCart size={20} />
          <span>Adicionar</span>
        </button>
        <button
          className="flex-1 button bg-violet-700"
          onClick={() => {
            // adicionarItem(product)
            router.push("/checkout/pagamento");
          }}
        >
          <IconCreditCard size={20} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
}
