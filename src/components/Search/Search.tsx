import React from "react"
import "./Search.styles"
import { MainSearch } from "./Search.styles"

export default function Search() {
  return (
    <MainSearch className="search__container">
      <input className="search__input" type="text" placeholder="Search" />
    </MainSearch>
  )
}
