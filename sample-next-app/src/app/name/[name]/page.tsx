export default function Name({params}:{params:{name: string}}) {
  return (
    <main>
      <h1 className="title"> Next sample</h1>
      <p className="msg">your name: {params.name}</p>
      <div>
        <a href="/">Go back!</a>
      </div>
    </main>
  )
}
