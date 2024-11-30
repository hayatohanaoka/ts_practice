"use server";
import { redirect } from "next/navigation";
import { SearchQueryGateway } from "@/main/gateway/searchQueryGateway";

type FormData = {
  input: number;
}

export async function serverAction(formData: FormData) {
  const num = formData.input;
  if (num === undefined) redirect("/form");
  const searchQuery = await new SearchQueryGateway().fetchSearchQuery(num);
  const redirectUrl = new URLSearchParams(searchQuery);
  redirect(redirectUrl.toString())
}
