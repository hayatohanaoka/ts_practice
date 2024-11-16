
"use server";
import urls from "../urls";

async function getSampleData(url: string){
  const res = await fetch(url, {cache: "no-store"});
  const result = await res.json();
  return result;
}

export default async function Home() {
  const fetchedData = await getSampleData(urls.apiUrls[0]);
  return (
    <main>
      <h1>Index Page</h1>
      <p>{fetchedData.searchQuery}</p>
    </main>
  )
}
