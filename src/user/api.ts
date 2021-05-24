import {User, HistoryItem} from "./types";

export default {
  user: () =>
    fetch("https://coding-challenge-api.aerolab.co/user/me", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEyYjExYTliNzc4MTAwMjA5YzVhOWIiLCJpYXQiOjE2MjEyNzQ5MDZ9.sA7_ybQE0NYpwma7hc0spHCpVjhmrSm0wHDkmaO_zAQ",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "get",
    }),
  points: (amount: number) =>
    fetch("https://coding-challenge-api.aerolab.co/user/points", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEyYjExYTliNzc4MTAwMjA5YzVhOWIiLCJpYXQiOjE2MjEyNzQ5MDZ9.sA7_ybQE0NYpwma7hc0spHCpVjhmrSm0wHDkmaO_zAQ",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "post",
      body: JSON.stringify({
        amount,
      }),
    }),

  history: () =>
    fetch("https://coding-challenge-api.aerolab.co/user/history", {
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
        products.map((p: HistoryItem) => ({
          id: p["_id"],
          name: p["name"],
          category: p["category"],
          cost: p["cost"],
          img: p["img"]["url"],
          itemId: p["productId"],
          date: p["createDate"],
        })),
      ),
};
