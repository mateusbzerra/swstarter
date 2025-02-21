//url  "https://swapi.py4e.com/api/films/1/"

export const getObjectIdFromUrl = (url?: string) => {
  if (!url) return "";
  console.log({ url });
  const urlParts = url.split("/");
  console.log({ urlParts });
  return urlParts[urlParts.length - 2];
};
