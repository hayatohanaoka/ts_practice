import Link from "next/link";

export default function IdPage({params}:{params:{name: String, id: number}}) {
  return (
    <main>
      <h1 className="title"> Next sample</h1>
      <p>Your name is {params.name}</p>
      <p>Your id is {params.id}</p>
      <div>
        <Link href="/">Go to top page</Link>
      </div>
    </main>
  )
}
