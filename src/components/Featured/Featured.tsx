import React from "react"
import { FeaturedList } from "./Featured.styles"
import FeaturedItem from "./FeaturedItem"

interface featuredList {
  id: string
  theme: string
  title: string
  author: string
}

export default function Featured() {
  const featuredList: Array<object> = [
    {
      id: "1",
      theme: "Apple",
      title: "Opera Browser Lets You Apply Dark Mode to Web Page",
      author: "Sore Blogger",
      dateSubmitted: "july 30, 2020"
    },
    {
      id: "2",
      theme: "Apple",
      title: "Opera Browser Lets You Apply Dark Mode to Web Page",
      author: "Sore Blogger",
      dateSubmitted: "july 30, 2020"
    },
    {
      id: "3",
      theme: "Apple",
      title: "Opera Browser Lets You Apply Dark Mode to Web Page",
      author: "Sore Blogger",
      dateSubmitted: "july 30, 2020"
    }
  ]
  const data = featuredList.map((el, index) => (
    <FeaturedItem {...el} key={"featured" + index} />
  ))
  return <FeaturedList>{data}</FeaturedList>
}
