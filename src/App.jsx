import "@goongmaps/goong-js/dist/goong-js.css";
import Router from "./router/index.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import FirebaseAuthProvider from "./context/FirebaseAuthContext.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <ThemeProvider>
          {/* <FirebaseAuthProvider> */}
            <Router />
          {/* </FirebaseAuthProvider> */}
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
