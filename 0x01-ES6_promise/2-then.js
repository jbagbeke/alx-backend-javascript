export default function handleResponseFromAPI(promise) {
  promise.then((promiseObject) => promiseObject).then(() => console.log('Got a response from the API')).catch(() => new Error());
}
