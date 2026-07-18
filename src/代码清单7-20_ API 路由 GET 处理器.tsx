// app/api/users/route.ts
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return Response.json(users);
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return Response.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.email || !body.name) {
      return Response.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return Response.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });

    return Response.json(user, { status: 201 });
  } catch (error) {
    console.error('Failed to create user:', error);
    return Response.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}