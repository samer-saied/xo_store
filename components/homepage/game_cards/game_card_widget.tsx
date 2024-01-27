import Link from "next/link";

export default function GameCardWidget() {
  return (
    <Link href={"/products/00"}>
      <div className=" h-auto flex flex-col mx-1">
        <img
          className=" h-50 md:h-52 rounded-2xl "
          src="https://via.placeholder.com/244x210"
        />
        <div className="flex flex-row items-center justify-center">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="text-blue-900 md:text-base text-sm font-bold">
              شحن يلا لودو
            </div>
            <div className="text-stone-500 md:text-sm text-sm font-normal">
              {" "}
              50,000 جوهرة
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="flex flex-row">
              <span className="text-orange-400 md:text-base text-xs font-bold font-['Inter'] tracking-tight">
                ج.م
              </span>
              <span className="text-orange-400 md:text-base text-xs font-semibold font-['Inter'] tracking-tight">
                44.00
              </span>
            </div>
            <div className="flex flex-row">
              <div>
                <span className="text-slate-400 text-xs font-bold font-['Inter'] line-through tracking-tight">
                  ج.م
                </span>
                <span className="text-slate-400 text-xs font-normal font-['Inter'] line-through tracking-tight">
                  88.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
