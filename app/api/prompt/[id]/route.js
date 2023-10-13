import prisma from '../../../db';

export const GET = async (req, { params }) => {
  try {
    const prompt = await prisma.prompt.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!prompt) return new Response('Prompt not found', { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch prompt', { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    const updatedPrompt = await prisma.prompt.update({
      where: {
        id: params.id,
      },
      data: {
        prompt,
        tag,
      },
    });

    if (!updatedPrompt)
      return new Response('Prompt not found', { status: 404 });

    return new Response(JSON.stringify(updatedPrompt), { status: 200 });
  } catch (error) {
    return new Response('Failed to update prompt', { status: 500 });
  }
};
