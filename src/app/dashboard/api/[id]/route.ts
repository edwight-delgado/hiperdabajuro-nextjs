import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}
export async function GET(request: Request, { params }: Params) {
  const user = await prisma?.user.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json({
    user,
  });
}

export async function DELETE(request: Request, { params }: Params) {
  const userDelete = await prisma?.user.delete({
    where: { id: Number(params.id) },
  });
  if (!userDelete)
    return NextResponse.json({
      message: "user no found",
      status: 404,
    });
  return NextResponse.json({
    userDelete,
  });
}

export async function PUT(request: Request, { params }: Params) {
  const { name, email } = await request.json();
  const userUpdate = await prisma?.user.update({
    where: { id: Number(params.id) },
    data: {
      name,
      email,
    },
  });
  if (!userUpdate)
    return NextResponse.json({
      message: "user no found",
      status: 404,
    });

  return NextResponse.json({
    userUpdate,
  });
}
