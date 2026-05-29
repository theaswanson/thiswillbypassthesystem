const bypasses = import.meta.glob<{ default: string }>("./posts/*.md");

export const numberOfBypasses = Object.keys(bypasses).length;

export const getRandomBypassId = () => {
  const randomInt = (max: number) => Math.floor(Math.random() * max);

  return randomInt(numberOfBypasses);
};

export const getBypassContents = async (bypassIndex: number) =>
  await fileContents(bypassIndex, bypasses);

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
