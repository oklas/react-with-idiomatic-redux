export default conf => {
  if(!(
    conf &&
    conf.apiKey &&
    conf.authDomain &&
    conf.databaseURL &&
    conf.projectId &&
    conf.storageBucket
  )) console.error(`
    src/conf/firebase.json must be like this:
    {
      "apiKey": "your-google-api-key",
      "authDomain": "your-firebase-id.firebaseapp.com",
      "databaseURL": "https://your-firebase-id.firebaseio.com",
      "projectId": "your-firebase-id",
      "storageBucket": "your-firebase-id.appspot.com"
    }
  `)
}