import React from "react"
import { Col, Row } from "react-bootstrap"
import Featured from "../Featured/Featured"
import SideBar from "../SideBar/SideBar"
import LatestNews from "../LatestNews/LatestNews"
import Reviews from "../Reviews/Reviews"
import { Main } from "./MainPage.styles"

export default function MainPage() {
  return (
    <Main className="container">
      <Row>
        <Featured />
      </Row>
      <Row>
        <Col xl={8} lg={8} md={12} sm={12}>
          <Reviews />
          <LatestNews />
        </Col>
        <Col xl={4} lg={4} md={12} sm={12}>
          <SideBar />
        </Col>
      </Row>
    </Main>
  )
}
