export default function handleResponseFromAPI(promise) {
  const myObject = {
    status: 200,
    body: 'success',
  };

  promise.then(() => myObject).then(() => console.log('Got a response from the API')).catch(() => new Error());
}
