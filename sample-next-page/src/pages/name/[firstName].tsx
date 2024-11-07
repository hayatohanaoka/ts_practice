import Link from "next/link";
import { useRouter } from "next/router"

interface PageStaticProps {
  data: {
    header: string,
    msg: string
  }
}

// URLパラメータによって、dataの中身が変化する
export default function Home({ data }: PageStaticProps) {
  const router = useRouter();
  return (
    <main>
      <h1>{data.header}</h1>
      <ol>
        <li>Your first name: <b>&quot;{router.query.firstName}&quot;</b>.</li>
        <li>Message for you <b>&quot;{data.msg}&quot;</b>.</li>
      </ol>
      <Link href="/other">Go to other page</Link>
    </main>
  );
}

// ダイナミックルーティングで扱うパスのパターンを用意し、マッチしたものを返す
export function getStaticPaths() {
  const path = [
    "/name/taro",
    "/name/hanako",
    "/name/mike"
  ];
  return {
    paths: path,
    fallback: false  // path 配列にないものは404ページ
  }
}

interface StaticProps {
  params: {
    firstName: "taro" | "hanako" | "mike"
  }
}

// params には、URLのルーティングパラメータが入る
export function getStaticProps({ params }: StaticProps) {
  const data = {
    taro: {
      header: "Taro's-page",
      msg: "Hello, Taro!"
    },
    hanako: {
      header: "Hanako's-page",
      msg: "Hello, Hanako!"
    },
    mike: {
      header: "Mike's-page",
      msg: "Hello, Mike!"
    }
  };
  return {
    props: {
      data: data[params.firstName]
    }
  }
}

