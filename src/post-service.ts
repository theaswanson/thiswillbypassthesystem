const posts = import.meta.glob<{ default: string }>("./posts/*.md");

export const numberOfPosts = Object.keys(posts).length;

export const getRandomPostIndex = () => {
  const randomInt = (max: number) => Math.floor(Math.random() * max);

  return randomInt(numberOfPosts);
};

export const getPostContents = async (postIndex: number) =>
  await fileContents(postIndex, posts);

const fileContents = async (
  fileIndex: number,
  files: Record<
    string,
    () => Promise<{
      default: string;
    }>
  >,
) => {
  // Get the path to the file
  const relativeFilePaths = Object.keys(files);

  const relativeFilePath = relativeFilePaths[fileIndex];

  // Get the file as a module
  const moduleLoader = files[relativeFilePath];

  const module = await moduleLoader();

  const absoluteFilePath = module.default;

  // Load the file contents
  const response = await fetch(absoluteFilePath);

  // Read contents as a string
  return await response.text();
};
