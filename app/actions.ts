"use server";

export async function fetchPageData() {
  const res = await fetch("http://localhost:3001/page");
  return res.json();
}

export async function fetchFaqData() {
  const res = await fetch("http://localhost:3001/faq");
  return res.json();
}

export async function fetchFaqCategories() {
  const res = await fetch("http://localhost:3001/categories");
  return res.json();
}

export async function fetchTermsPrivacyData() {
  const res = await fetch("http://localhost:3001/terms");
  return res.json();
}
