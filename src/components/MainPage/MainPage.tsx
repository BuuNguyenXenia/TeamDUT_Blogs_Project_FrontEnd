import React from "react"
import { Col, Row } from "react-bootstrap"
import Featured from "../Featured/Featured"
import SideBar from "../SideBar/SideBar"
import LatestNews from "../LatestNews/LatestNews"
import Reviews from "../Reviews/Reviews"
import { Main } from "./MainPage.styles"
import { BrowserRouter, Route } from "react-router-dom"
import Switch from "react-bootstrap/esm/Switch"
import { PATH } from "src/constants/path"
import ViewPostsItem from "../ViewAllPosts/ViewPostsItem/ViewPostsItem"

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
        <Col xl={4} lg={4} md={12} sm={12} className="mt-2">
          <SideBar />
        </Col>
      </Row>
    </Main>
  )
}
