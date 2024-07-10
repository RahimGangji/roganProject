import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Provider} from 'react-redux';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

import '../styles/globals.css';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import Preloader from '../components/common/preloader';
import { animationCreate } from '../utils/utils';

function MyApp({ Component, pageProps }) {
  const [preloader,setPreLoader] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    setTimeout(() => {
      setPreLoader(false);
      animationCreate();
    }, 200);
  }, [])
  return (
    <Provider store={store}>
      {preloader ? <Preloader/> : <Component {...pageProps} />}
      <ToastContainer />
    </Provider>
  )
}

export default MyApp
