"use client"
import { SearQueryUseCase } from "@/main/usecase/searchQueryUseCase";
import { useState } from "react";

export default function Home() {

  const [query, setQuery] = useState('no fetched');
  function doAction() {
    SearQueryUseCase.getSearchQuery("/v1/industries/UBI100100100/searchQuery").then(
      searchQuery => setQuery(searchQuery)
    )
  }

  return (
    <main>
      <h1>Index Page</h1>
      <p>{query}</p>
      <div>
        <form method="GET"></form>
        <button onClick={doAction}>Search</button>
      </div>
    </main>
  )
}
