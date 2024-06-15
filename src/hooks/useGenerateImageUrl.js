export const useGenerateImageUrl = (thumb) => {
  if (!thumb) return null;

  return thumb.startsWith("http")
    ? thumb
    : `${process.env.REACT_APP_BACKEND_BASE_URL}/${thumb}`;
};
