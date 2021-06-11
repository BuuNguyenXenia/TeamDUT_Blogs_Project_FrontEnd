import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Featured from "../Featured/Featured"
import SideBar from "../SideBar/SideBar"
import LatestNews from "../LatestNews/LatestNews"
import Reviews from "../Reviews/Reviews"
import { Main } from "./MainPage.styles"

export default function MainPage() {
  return (
    <Main>
      <Container>
        <Row>
          <Featured />
        </Row>
        <Row>
          <Col xl={8} lg={8} md={12} sm={12}>
            <Reviews />
            <LatestNews />
          </Col>
          <Col xl={4} lg={4} md={12} sm={12} className="mt-2">
            <SideBar />
          </Col>
        </Row>
      </Container>
    </Main>
  )
}
