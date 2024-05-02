export default async function TopBarComponent() {
  // const response = await fetch("https://fakestoreapi.com/products");
  // const products = await response.json();
  // console.log(products[0])

  return (
    <div className="w-full bg-amber-50 h-14 flex flex-row justify-center items-center">
      <p className=" font-bold text-MainBlueColor text-sm text-left tracking-[0] leading-[normal] whitespace-nowrap [direction:rtl]">
        خصم 50% يوم الجمعة السوداء
      </p>
      {/* <>
        {products.map((product: any) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </> */}
    </div>
  );
}
