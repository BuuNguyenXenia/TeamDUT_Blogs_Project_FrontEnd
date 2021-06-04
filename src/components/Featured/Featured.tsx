import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { featuredPostsSelector, getFeaturedPosts } from "./Featured.slice"
import FeaturedItem from "./FeaturedItem/FeaturedItem"

const Featured = () => {
  const dispatch = useAppDispatch()
  const featuredPosts = useAppSelector(featuredPostsSelector)
  const { current, isSuccess } = featuredPosts

  useEffect(() => {
    dispatch(getFeaturedPosts())
  },[])
  return (
    <React.Fragment>
      {isSuccess
        ? current.map((el, i) => (
            <FeaturedItem {...el} key={"featured-item" + i} />
          ))
        : null}
    </React.Fragment>
  )
}

export default Featured
