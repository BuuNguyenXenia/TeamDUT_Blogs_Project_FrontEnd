import React from "react"
import FollowUs from "src/components/FollowUs/FollowUs"
import LatestDeals from "src/components/LatestDeals/LatestDeals"
import PopularPosts from "src/components/PopularPosts/PopularPosts"

export default function SideBar() {
  return (
    <div>
      <FollowUs />
      <PopularPosts />
      <LatestDeals />
    </div>
  )
}
