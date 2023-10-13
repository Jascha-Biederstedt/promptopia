import prisma from '../../db';

export const GET = async req => {
  try {
    const prompts = await prisma.prompt.findMany({
      include: {
        author: true,
      },
    });

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch prompts', { status: 500 });
  }
};
