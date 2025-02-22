export const getObjectIdFromUrl = (url?: string) => {
  if (!url) return "";

  const urlParts = url.split("/");

  return urlParts[urlParts.length - 2];
};
