// app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }

  return Response.json(user);
}