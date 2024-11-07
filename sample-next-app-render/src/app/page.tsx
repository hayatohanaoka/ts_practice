"use server";
import { Metadata } from "next";

export async function generateMetadata() {
  return {
    title: "Next App",
    description: "My sample page"
  }
}

const defaultProps = {
  title: "Next App sample",
  msg: "My sample page"
}

export default async function Home() {
  return (
    <main>
      <h1>{defaultProps.title}</h1>
      <p>{defaultProps.msg}</p>
    </main>
  )
}
