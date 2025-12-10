import { db } from "@/lib/mysql";
import { NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";

type WMQuestion = RowDataPacket & {
  id: number;
  word: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_option: string;
  level: number;
};

export async function GET() {
  const [rows] = await db.query<WMQuestion[]>(
    "SELECT * FROM wm_questions ORDER BY RAND() LIMIT 1"
  );

  return NextResponse.json(rows[0]);
}
