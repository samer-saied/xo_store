import { Product } from "@/models/product_model";

export default function getStarsRate(product: Product): number[] {
  let stars = [];
  for (let index = 0; index < 5; index++) {
    if (index < product.rate) {
      stars.push(1);
    } else {
      stars.push(0);
    }
  }
  return stars;
}
