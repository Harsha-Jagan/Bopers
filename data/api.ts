import "server-only";
async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request, { method: "POST" });
  const body = await response.json();
  return body;
}

async function ping(): Promise<string> {
  const result: string = await http(process.env.BACKEND_URL!);
  console.log(result);
  return result;
}

export { ping };
