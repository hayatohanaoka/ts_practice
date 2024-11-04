import Link from "next/link";
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>Hello nextjs</h1>
      <p>This is my first page</p>
      <Link href="/other">Go to other page</Link>
    </main>
  );
}
