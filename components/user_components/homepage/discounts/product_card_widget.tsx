import { Product } from "@/models/product_model";
import Image from "next/image";
import Link from "next/link";
import { useInView, animated } from "@react-spring/web";

export default function GameCardWidget(props: {
  product: Product;
  index: number;
}) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100 * (props.index + 0.25),
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
    }
  );


  return (
    <animated.div ref={ref} style={springs}>
      <Link href={"/products/" + props.product.id}>
        <div className=" xl:p-5 h-auto w-auto mx-auto flex flex-col min-w-44 justify-center items-center">
          <Image
            alt={props.product.title}
            width={300}
            height={300}
            className=" h-52 md:h-64 w-full rounded-2xl border p-5 hover:shadow-md"
            src={props.product.image}
          />
          <div className="flex flex-row items-center justify-center px-2 pt-1 h-20 w-full">
            <div className="w-3/4 flex flex-col justify-center items-start">
              <div className="text-blue-900 md:text-base text-sm font-bold">
                {props.product.title}
              </div>
              <div className="text-stone-500 md:text-sm text-sm font-normal line-clamp-2">
                {props.product.details}
              </div>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-center">
              <div className="flex flex-row">
                <span className="text-orange-400 md:text-base text-xs font-bold tracking-tight">
                  ج.م
                </span>
                <span className="text-orange-400 md:text-xl text-lg font-semibold tracking-tight px-1">
                  {props.product.currentPrice}
                </span>
              </div>
              <div className="flex flex-row">
                <div>
                  <span className="text-slate-400 text-xs font-bold line-through tracking-tight">
                    ج.م
                  </span>
                  <span className="text-slate-400 text-base font-normal line-through tracking-tight px-1">
                    {props.product.prePrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </animated.div>
  );
}
