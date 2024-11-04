'use client'; // クライアントレンダリングを有効にするオプション値

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="title"> Next sample</h1>
      <div>
        <Image alt="gogo-btn" src="/gogo.png" width={200} height={200}></Image>
      </div>
      <div>
        <Link href="/">Go to top page</Link>
      </div>
    </main>
  );
}
