import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_API_TOKEN,
});

export default client;

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
