import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "your-project-id",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token: "your-token",
});

export default client;

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
