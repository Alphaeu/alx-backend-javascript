// 100-await.js

import { uploadPhoto, createUser } from './utils.js';

const asyncUploadUser = async () => {
  try {
    // Call the uploadPhoto and createUser functions using async/await
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If an error occurs in either function, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
};

export default asyncUploadUser;

