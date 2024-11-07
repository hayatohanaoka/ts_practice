import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>This is my first page</p>
      <Link href="/other">Go to other page</Link>
    </main>
  );
}
