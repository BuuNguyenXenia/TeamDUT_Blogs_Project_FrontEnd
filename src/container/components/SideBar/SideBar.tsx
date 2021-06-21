import React from "react"
import FollowUs from "src/container/components/FollowUs/FollowUs"
import LatestDeals from "src/container/components/LatestDeals/LatestDeals"
import PopularPosts from "src/container/components/PopularPosts/PopularPosts"

export default function SideBar() {
  return (
    <div>
      <FollowUs />
      <PopularPosts />
      <LatestDeals />
    </div>
  )
}
