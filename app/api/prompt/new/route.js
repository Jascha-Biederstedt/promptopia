import prisma from '../../../db';

export const POST = async req => {
  const { prompt, tag, userId } = await req.json();

  try {
    const newPrompt = await prisma.prompt.create({
      data: {
        authorId: userId,
        prompt,
        tag,
      },
    });

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 });
  }
};
