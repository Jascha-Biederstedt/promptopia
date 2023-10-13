import prisma from '../../../db';

export const GET = async (req, { params }) => {
  try {
    const prompt = await prisma.prompt.findUnique({
      where: {
        id: params.id,
      },
      include: {
        author: true,
      },
    });

    if (!prompt) return new Response('Prompt not found', { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch prompt', { status: 500 });
  }
};
