import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return {
    photo: await uploadPhoto().catch(() => null),
    user: await createUser().catch(() => null),
  };
}
