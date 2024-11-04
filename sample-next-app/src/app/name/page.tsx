import Link from "next/link"

export default function Name() {
    return (
        <main>
            <h1 className="title">404 Error page!</h1>
            <p className="msg">Please access /name/~ url again!</p>
            <p className="msg">ex) /name/Mike</p>
            <div>
                <Link href="/">Go to top page</Link>
            </div>
        </main>
    )
}
