import { BACKEND_URL } from "@/app/utils/config";

export default async function FetchData() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/sponsors?populate=image`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch {
    return {};
  }
}
