import UploadModal from '../components/Modal'
import Chat from '../components/Chat/Chat'
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import { ToastContainer} from 'react-toastify';

function Home() {
  const loading = useSelector((state) => state.msgLoader.loading);
  const document = useSelector((state) => state.document.doc);

  return (
    <>
    <UploadModal/>
    {loading && <Loader/>}

    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
    />

    {document && <Chat/>}
    </>
  )
}

export default Home