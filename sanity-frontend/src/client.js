const client = sanityClient({
  projectId: "your-project-id",
  dataset: "your-dataset",
  apiVersion: "2021-08-31",
  useCdn: true,
  token: "your-token",
});

export default client;
