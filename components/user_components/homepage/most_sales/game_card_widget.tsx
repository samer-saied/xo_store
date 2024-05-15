import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import { useInView, animated } from "@react-spring/web";

export default function GameCardWidget(params: any) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
    }
  );

  return (
    <animated.div ref={ref} style={springs}>
      <Link
        href={{
          pathname: "/categories/" + params.category?.id,
          query: { category: params.urls[0].name },
        }}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom,${params.category.primaryColor}, ${params.category.secandColor})`,
          }}
          className={`md:h-60 h-44 mx-1 bg-gradient-to-b  from-[${params.category.primaryColor}] to-[${params.category.secandColor}] rounded-2xl transition delay-150 duration-300 ease-in-out hover:shadow-md hover:shadow-slate-600 mb-5 hover:scale-105 m-3`}
        >
          <div className="w-full h-full flex flex-col justify-center items-center ">
            <Image
              priority={true}
              width={174}
              height={240}
              alt={params.category.title}
              className="p-3 rounded-2xl object-contain drop-shadow-md"
              src={params.category.image}
            />
          </div>
        </div>
      </Link>
    </animated.div>
  );
}
