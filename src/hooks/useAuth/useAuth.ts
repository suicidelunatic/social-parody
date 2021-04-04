import { firebaseApp } from 'firebaseApp';
import { useDispatch } from 'react-redux';
import { types } from './duck';
import { useAppSelector } from '../useSelector';
import useLoading from '../useLoading';

const useAuth: types.UseAuth = () => {
  const { stopLoading, startLoading } = useLoading();
  const dispatch = useDispatch();
  const auth = useAppSelector((state) => state.auth);

  const signIn: types.SignIn = async (email, password) => {
    startLoading();
    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    } catch {

    } finally {
      stopLoading();
    }
  };

  const setUser: types.SetUser = (user: any) => dispatch({
    type: 'setUser',
    payload: user?.providerData?.[0] || null,
  });

  const logOut = async () => {
    startLoading();
    try {
      await firebaseApp.auth().signOut();
    } catch {

    } finally {
      stopLoading();
    }
  };

  return {
    isLogged: auth.isLogged,
    isInitialized: auth.isInitialized,
    user: auth.user,
    signIn,
    setUser,
    logOut,
  };
};

export default useAuth;