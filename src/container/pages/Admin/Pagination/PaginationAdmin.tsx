import React from "react"
import { useAppDispatch } from "src/redux/store/hooks"
import MyPagination from "../../../components/Pagination/MyPagination"
import { dataMyPost } from "../../../../redux/slices/PostsManageSlice/PostsManage.slice"

export default function PaginationAdmin({ lastPage }) {
  const dispatch = useAppDispatch()

  const [currPage, setCurrPage] = React.useState(1)

  React.useEffect(() => {
    afterPageClicked(1)
  }, [])

  const afterPageClicked = (page_number: number) => {
    setCurrPage(page_number)
    dispatch(dataMyPost(page_number))
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
