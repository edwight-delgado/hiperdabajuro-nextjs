import { NextResponse } from "next/server";
import { prisma } from "../../../seed/prisma";

export async function GET() {
  const users = await prisma?.user.findMany();
  return NextResponse.json({
    users,
  });
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  const newProduct = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return NextResponse.json({
    newProduct,
  });
}
