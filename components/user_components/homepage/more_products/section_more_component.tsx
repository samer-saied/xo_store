import { DefaultCardsCarouselWidget } from "./default_card_widget";

export default function SectionMoreWidget() {
  return (
    <div className="relative w-full h-auto flex md:flex-row flex-col  bg-amber-50">
      <div className=" py-8 md:py-24 md:w-6/12 w-full min-h-80 bg-MainBlueColor flex flex-col justify-center">
        <div className=" p-10 w-10/12 ">
          <h1 className="lg:text-3xl text-right lg:leading-relaxed leading-normal md:text-2xl text-xl text-zinc-50">
            هناك العديد من الخيارات التي تناسبك من فئات مختلفة.
          </h1>
          <h1 className=" md:text-md  text-sm text-right text-stone-200 mt-5 leading-relaxed">
            هناك أكثر من 10 الف من العروض رائعة حقًا من مختلف الاحتياجات والفئات
            يمكنك شراءها بأسعار منخفضة جدًا
          </h1>
        </div>
        <div className="w-full md:hidden flex-col justify-center pb-5">
          <DefaultCardsCarouselWidget />
        </div>
      </div>
      <div className="w-1/2 hidden"></div>
      <div className=" md:absolute md:left-0 hidden bottom-0 md:top-0 md:w-7/12 md:flex flex-col justify-center ">
        <DefaultCardsCarouselWidget />
      </div>
    </div>
  );
}
