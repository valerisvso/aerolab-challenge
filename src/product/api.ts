import {Product, RawProduct} from "./types";

export default {
  list: (): Promise<Product[]> =>
    fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEyYjExYTliNzc4MTAwMjA5YzVhOWIiLCJpYXQiOjE2MjEyNzQ5MDZ9.sA7_ybQE0NYpwma7hc0spHCpVjhmrSm0wHDkmaO_zAQ",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "get",
    })
      .then((res) => res.json())
      .then((products) =>
        products.map((p: RawProduct) => ({
          id: p["_id"],
          name: p["name"],
          category: p["category"],
          cost: p["cost"],
          img: p["img"]["url"],
        })),
      ),

  redeem: (productId: string) =>
    fetch("https://coding-challenge-api.aerolab.co/redeem", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEyYjExYTliNzc4MTAwMjA5YzVhOWIiLCJpYXQiOjE2MjEyNzQ5MDZ9.sA7_ybQE0NYpwma7hc0spHCpVjhmrSm0wHDkmaO_zAQ",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "post",
      body: JSON.stringify({
        productId,
      }),
    }),
};
