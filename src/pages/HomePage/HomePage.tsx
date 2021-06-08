import React from "react"
import Footer from "src/components/Footer/Footer"
import Header from "src/components/Header/Header"
import MainPage from "src/components/MainPage/MainPage"
import ScrollToTop from "src/components/ScrollToTop/ScrollToTop"

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <ScrollToTop />
      <MainPage />
      <Footer />
    </React.Fragment>
  )
}
