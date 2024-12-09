"use server";

export async function fetchPageData() {
  const res = await fetch("http://localhost:3001/page");
  const data = await res.json();

  // Validate that data is a plain object
  if (data && typeof data === "object" && data.constructor === Object) {
    return data;
  } else {
    throw new Error("Invalid data format");
  }
}

export async function fetchFaqData() {
  const res = await fetch("http://localhost:3001/faq");
  const data = await res.json();

  // Validate that data is a plain object
  if (data && typeof data === "object" && data.constructor === Object) {
    return data;
  } else {
    throw new Error("Invalid data format");
  }
}
