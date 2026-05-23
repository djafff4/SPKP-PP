import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { title, slug, description, release_date } = await request.json();

    const [result] = await pool.query(
      "INSERT INTO majalah (title, slug, description, release_date) VALUES (?, ?, ?, ?)",
      [title, slug, description, release_date]
    );

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM majalah ORDER BY release_date DESC");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
