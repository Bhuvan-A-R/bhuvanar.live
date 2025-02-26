import { NextResponse } from "next/server";
import { Resend } from 'resend'

export async function GET() {
  const resend = new Resend();
  try {
    return NextResponse.json({ "hello": "world" });
  } catch (error) {
    return NextResponse.json({ "error": error.message });
  }
}