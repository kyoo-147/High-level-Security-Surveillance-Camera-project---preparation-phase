import { createContext, useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import APP from "../utils/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setUser } from "../redux/slices/authSlice.js";
import LoadingScreen from "../components/LoadingScreen.jsx";

export const FirebaseAuthContext = createContext({
  logout: () => {},
  user: null,
});
export const useAuth = () => {
  return useContext(FirebaseAuthContext);
};

const FirebaseAuthProvider = ({ children }) => {
  const auth = getAuth(APP);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const auth = getAuth(APP);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(setIsLoading(false));
      } else {
        dispatch(setUser(null));
        dispatch(setIsLoading(false));
      }
    });
  }, []);

  return (
    <FirebaseAuthContext.Provider
      value={{
        logout,
      }}
    >
      {isLoading ? <LoadingScreen /> : children}
    </FirebaseAuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
