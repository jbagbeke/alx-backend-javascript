import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((returnPromises) => {
    const returnArray = [];

    for (const obj of returnPromises) {
      if (obj) {
        returnArray.append({
          status: obj.status,
          value: obj,
        });
      }
    }
  });
}
