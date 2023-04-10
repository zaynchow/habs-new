export async function GET(request) {
  return new Response("hi");
}

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  return new Response("hi");
}
