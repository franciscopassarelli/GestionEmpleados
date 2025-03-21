import "@/styles/globals.css";


import Navbar from "../components/Navbar.js";
import Subheader from "@/components/SubHeader.js";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
      <Navbar />
      <Subheader/>
        <Component {...pageProps} />
      </main>
      
    </>
  )
}

export default MyApp
