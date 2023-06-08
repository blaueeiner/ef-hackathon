import * as gcpMetadata from 'gcp-metadata';

export default async () => {
  const isMetadataServerAvailable = await gcpMetadata.isAvailable();

  return {
    projectId: isMetadataServerAvailable
      ? await gcpMetadata.project('project-id')
      : process.env.PROJECT_ID,
    internalApiKey: process.env.INTERNAL_API_KEY,
  };
};
