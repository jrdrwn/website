import prisma from "@db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  try {
    await prisma.message.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
    return NextResponse.json({ message: "Berhasil menyimpan data" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Kesalahan dalam menyimpan data" },
      {
        status: 500,
      }
    );
  }
}
