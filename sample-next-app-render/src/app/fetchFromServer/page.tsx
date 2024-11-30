
"use server";

import { searchQueryUseCase } from "@/main/dependecyInjection";

export default async function Home() {
  const searchQuery = await searchQueryUseCase.getSearchQuery("/v1/industries/UBI100100100/searchQuery");
  return (
    <main>
      <h1>Index Page</h1>
      <p>{searchQuery}</p>
    </main>
  )
}
