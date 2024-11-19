"use server";
import { serverAction } from "./server-actions";

export default async function Form() {
  return (
    <main>
      <h1>form page</h1>
      <p>数字を入力してください</p>
      <div>
        <form action={serverAction}>
          <input type="number" name="input" />
          <button>send</button>
        </form>
      </div>
    </main>
  )
}
