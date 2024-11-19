"use client"
import { useState } from "react";
import { apiUrls } from "../urls";

async function getSampleData(url: string) {
    const res = await fetch(url, { cache: "no-cache" });
    const result = await res.json();
    return result;
}

export default function Home() {

    const [query, setQuery] = useState('no fetched');
    function doAction() {
        getSampleData(apiUrls[0]).then( (res) => {
            setQuery(res.searchQuery);
        })
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
