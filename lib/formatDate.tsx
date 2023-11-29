export const formatTimestampRange = (timestamp: any) => {
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};
