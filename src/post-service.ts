export const getRandomPost = async () => {
  const randomPostIndex = (posts: Record<string, unknown>) => {
    const randomInt = (max: number) => Math.floor(Math.random() * max);

    const numberOfPosts = Object.keys(posts).length;

    return randomInt(numberOfPosts);
  };

  const posts = import.meta.glob<{ default: string }>("./posts/*.md");

  return await fileContents(randomPostIndex(posts), posts);
};

const fileContents = async (
  fileIndex: number,
  files: Record<
    string,
    () => Promise<{
      default: string;
    }>
  >
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
