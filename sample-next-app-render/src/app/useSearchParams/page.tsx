"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";  // App routerでクエリパラメータを使用する際に使用るラッパー

/*
  一度別関数でクエリパラメータの値を受け取りSSRでDOMを作成しないと、
  クライアントサイドレンダリングの際に埋め込みでエラーになる
*/
function QueryParamList() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const pass = searchParams.get("pass");

  return (
    <ul> ※パラメータ
      <li>{id}</li>
      <li>{pass}</li>
    </ul>
  )
}

export default async function Home() {
  return (
    <main>
      <h1>Index Page</h1>
      <Suspense>
        <QueryParamList />
      </Suspense>
    </main>
  )
}
