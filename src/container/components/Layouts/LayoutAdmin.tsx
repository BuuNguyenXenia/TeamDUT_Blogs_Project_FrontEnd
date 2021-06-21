import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import ScrollToTop from "../ScrollToTop/ScrollToTop"

interface ParentCompProps {
  childComp?: React.ReactNode
}

const LayoutAdmin: React.FC<ParentCompProps> = props => {
  const { childComp } = props
  return (
    <React.Fragment>
      <Header />
      <ScrollToTop />
      {childComp}
      <Footer />
    </React.Fragment>
  )
}

export default LayoutAdmin
