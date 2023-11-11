export const containerName = `testfiles`;
export const sasToken = process.env.REACT_APP_STORAGESASTOKEN;
export const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME; 

export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}