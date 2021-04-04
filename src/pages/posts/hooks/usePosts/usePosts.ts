import { types } from './duck';
import * as yup from 'yup';
import { firebaseApp } from 'firebaseApp';
import { useLoading } from 'hooks';

const usePosts: types.usePosts = () => {
  const { stopLoading, startLoading } = useLoading();
  const getValidationSchema: types.getValidationSchema = () => ({ title: yup.string().required() });

  const addPost: types.addPost = async (post) => {
    startLoading();
    try {
      await firebaseApp.firestore().collection('posts').add({
        ...post,
        createdAt: new Date(),
      });
    } catch {

    } finally {
      stopLoading();
    }
  };

  return {
    getValidationSchema,
    addPost,
  };
};

export default usePosts;
