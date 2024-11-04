import Link from "next/link";
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>Hello nextjs</h1>
      <p>This is multi param page</p>
      <ol>
        <li>Your first name: <b>"{router.query.firstName}"</b>.</li>
        <li>Your last name: <b>"{router.query.lastName}"</b>.</li>
      </ol>
      <Link href="/other">Go to other page</Link>
    </main>
  );
}
