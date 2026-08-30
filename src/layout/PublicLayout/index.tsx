import React from "react";
import Header from "@/src/components/Header"
import Footer from "@/src/components/Footer"

const Index = ({ children }:any) => {
    return <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
}

export default Index