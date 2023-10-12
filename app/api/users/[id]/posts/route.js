import prisma from '../../../../db';

export const GET = async (req, { params }) => {
  try {
    const posts = await prisma.prompt.findMany({
      where: {
        authorId: params.id,
      },
    });

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch your prompts', { status: 500 });
  }
};
