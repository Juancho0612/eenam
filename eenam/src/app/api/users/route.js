import { query } from "@/libs/db";
export async function GET(request) {
  const products = await query({
    query: "SELECT * FROM users",
    values: [],
  });

  let data = JSON.stringify(products);
  return new Response(data,{
    status: 200,
  })
}
