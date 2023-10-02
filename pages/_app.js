import React, { useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import UserState from "@/context/UserContext";

const App = ({ Component, pageProps }) => {
  return (
    <UserState>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UserState>
  );
};

export default App;
