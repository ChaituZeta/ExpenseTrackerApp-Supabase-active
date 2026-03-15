import fetch from "node-fetch";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// simple table query to wake DB
const endpoint = `${SUPABASE_URL}/rest/v1/?select=*`;

async function pingSupabase() {
  try {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json"
      }
    });

    const text = await res.text();

    console.log("Status:", res.status);
    console.log("Response:", text);

  } catch (error) {
    console.error("Error pinging Supabase:", error);
  }
}

pingSupabase();
