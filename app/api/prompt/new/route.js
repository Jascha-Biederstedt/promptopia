export const POST = async req => {
  const { post, tag, userId } = await req.json();
};
