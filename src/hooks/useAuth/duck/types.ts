export type SignIn = (email: string, password: string) => Promise<any>;

export type SetUser = (user: any) => any;

export type UseAuth = () => {
  isLogged: boolean;
  isInitialized: boolean;
  signIn: SignIn;
  setUser: SetUser;
  logOut: () => void;
  user: object,
}