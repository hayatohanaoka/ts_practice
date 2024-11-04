'use client'; // クライアントレンダリングを有効にするオプション値

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("your name: ");
  const doChange = (event: any) => {
    setInput(event.target.value);
  }
  const doClick = () => {
    setMsg(`hello ${input} !!`);
    setInput("");
  }

  return (
    <main>
      <h1 className="title"> Next sample</h1>
      <p className="msg">{msg}</p>
      <div className="m-5">
        <input type="text" onChange={doChange} value={input} className="input" />
        <button onClick={doClick} className="button ">Click</button>
      </div>
      <div>
        <Link href="/other">Go to other page</Link>
      </div>
    </main>
  );
}
