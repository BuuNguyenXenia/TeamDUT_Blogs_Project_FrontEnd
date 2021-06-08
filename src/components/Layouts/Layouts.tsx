import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Main } from "../MainPage/MainPage.styles"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import SideBar from "../SideBar/SideBar"

interface ParentCompProps {
  childComp?: React.ReactNode
}

const Layouts: React.FC<ParentCompProps> = props => {
  const { childComp } = props
  return (
    <React.Fragment>
      <Header />
      <ScrollToTop />
      <Main>
        <Container>
          <Row>
            <Col xl={8} lg={8} md={12} sm={12}>
              {childComp}
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} className="mt-2">
              <SideBar />
            </Col>
          </Row>
        </Container>
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default Layouts
