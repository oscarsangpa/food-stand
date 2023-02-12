import Head from "next/head"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import ModalProduct from "../components/ModalProduct";
import Sidebar from "../components/Sidebar"
import Steps from "../components/Steps";
import useStand from "../hooks/useStand";
import "react-toastify/dist/ReactToastify.css"



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');


export default function Layout({ children, page }) {

  const { modal } = useStand()

    return (
      <>
        <Head>
            <title>Stand - {page}</title>
            <meta name="description" content="Stand Food"/>
        </Head>

        <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
               <Sidebar/>
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
              <div className="p-10">
                <Steps/>
                {children}
              </div>
            </main>

        </div>
        {modal && (
          <Modal
            isOpen={modal}
            style={customStyles}
          >
           <ModalProduct/>
          </Modal>
        )}
        <ToastContainer/>
      </>
    )
  }