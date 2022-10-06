export const splitChunks = (data, chunkSize) => {
  const chunks = [];
  data = [].concat(...data);

  while (data.length) {
    chunks.push(data.splice(0, chunkSize));
  }

  return chunks;
};
