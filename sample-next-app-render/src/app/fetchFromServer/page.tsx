
"use server";

import { SearQueryUseCase } from "@/main/usecase/searchQueryUseCase";

export default async function Home() {
  const searchQuery = await SearQueryUseCase.getSearchQuery("/v1/industries/UBI100100100/searchQuery");
  return (
    <main>
      <h1>Index Page</h1>
      <p>{searchQuery}</p>
    </main>
  )
}
