import React from "react"
import { Col } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"

export default function Loading({ height }) {
  const styled = {
    height: `${height}px`,
    display: "flex",
    justifyContent: "Center",
    alignItems: "center"
  }
  return (
    <Col xs={12} className="p-0" style={styled}>
      <Spinner animation="border" variant="info" size="sm" />
    </Col>
  )
}
