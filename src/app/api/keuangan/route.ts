import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { type, amount, description, date } = await request.json();

    const [result] = await pool.query(
      "INSERT INTO keuangan (type, amount, description, date) VALUES (?, ?, ?, ?)",
      [type, amount, description, date]
    );

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM keuangan ORDER BY date DESC");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
