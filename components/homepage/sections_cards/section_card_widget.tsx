import { Section } from "@/models/section_model";
import Image from "next/image";
import Link from "next/link";
import { useInView, animated } from "@react-spring/web";

export default function SectionCardWidget(section: Section) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100 ,
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
          pathname: "/sections/" + section.id,
          query: { name: section.name.toString() },
        }}
      >
        <div
          key={section.id}
          style={{
            backgroundImage: `linear-gradient(to bottom,${section.primaryColor}, ${section.secandColor})`,
          }}
          className={`md:w-auto min-w-42 md:h-56 xl:h-64 h-44 m-2 relative rounded-3xl shadow`}
        >
          <div className="group">
            {/* Circle Shapes */}
            <div className=" absolute right-2 top-2">
              <div className="md:w-28 md:h-28 w-14 h-14 relative opacity-20">
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom,${section.primaryColor}, ${section.secandColor})`,
                  }}
                  className={`md:w-24 md:h-24 w-12 h-12 top-1 absolute rotate-180 bg-gradient-to-r from-white to-${section.secandColor}-800 rounded-full`}
                />
                <div
                  className={`md:w-14 md:h-14 w-7 h-7 -left-2 top-5 absolute  rotate-180 bg-gradient-to-br from-white via-white to-white rounded-full backdrop-blur-sm`}
                />
              </div>
            </div>

            {/* Text - Logo */}
            <div className="mx-auto md:h-64 h-44 flex flex-col justify-center group-hover:opacity-60 transition delay-150 duration-300 ease-in-out">
              {/* <div className="flex flex-col justify-center items-center h-full"> */}
              {/* Text */}
              <h1 className=" text-center text-zinc-100 text-lg md:text-3xl font-extrabold ">
                {section.name}
              </h1>
              {/* Icons -Logo */}
              <div className="h-2/4 w-full flex flex-row justify-center ">
                <Image
                  width={100}
                  height={100}
                  className="p-3 h-full w-auto"
                  src={section.icon ?? "/logo/logo.png"}
                  alt={section.name}
                />
              </div>
              {/* </div> */}
            </div>

            {/* Circle Shapes */}
            <div className="absolute top-5 left-5 opacity-20">
              <div className=" md:w-14 w-7 md:h-14 h-7 rotate-180 relative">
                <div
                  className={`md:w-14 w-7 md:h-14 h-7  absolute bg-gradient-to-r from-white to-${section.secandColor}-800 rounded-full `}
                />
                <div className="md:w-7 w-3 md:h-7 h-3  absolute bg-gradient-to-br from-white via-white to-white rounded-full backdrop-blur-sm" />
              </div>
            </div>

            {/* Hover Shapes */}
            <div className="flex flex-row justify-center items-center">
              <div className="transition duration-300 delay-150 ease-in-out opacity-0 group-hover:opacity-100 w-4/5  absolute top-2/4 md:h-20 h-8 px-2 py-5 bg-white bg-opacity-70 rounded-2xl flex flex-col justify-center items-center gap-2 ">
                <div
                  style={{ color: section.secandColor }}
                  className={`text-center text-${section.secandColor} text-md lg:text-3xl font-bold`}
                >
                  عرض المنتج
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </animated.div>
  );
}
