import React from "react"
import { getLatestNews } from "src/redux/slices/latestNewsSlice/LatestNews.slice"
import { useAppDispatch } from "src/redux/store/hooks"
import MyPagination from "./MyPagination"

export default function PaginationPost({ lastPage }) {
  const dispatch = useAppDispatch()

  const [currPage, setCurrPage] = React.useState(1)

  React.useEffect(() => {
    afterPageClicked(1)
  }, [])

  const afterPageClicked = (page_number: number) => {
    setCurrPage(page_number)
    dispatch(getLatestNews(page_number))
  }

  return (
    <MyPagination
      totPages={lastPage}
      currentPage={currPage}
      pageClicked={ele => {
        afterPageClicked(ele)
      }}
    ></MyPagination>
  )
}
