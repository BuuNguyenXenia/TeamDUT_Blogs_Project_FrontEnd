import React, { useEffect } from "react"
import LatestNewsItem from "src/container/components/LatestNews/LatestNewsItem/LatestNewsItem"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppDispatch, useAppSelector } from "src/redux/store/hooks"
import { getDataSearchPosts, searchPostsSelector } from "./Search.slice"
import { SearchStyle } from "./SearchPage.slice"
import Loading from "src/container/components/Loading/Loading"

const SearchPage = () => {
  const dispatch = useAppDispatch()
  const dataSearch = useAppSelector(searchPostsSelector)
  const { isSuccess, data, isFetching } = dataSearch
  const keySearch: any = LocalStorageService.getItem<string>("keySearch")
  useEffect(() => {
    dispatch(getDataSearchPosts(keySearch))
    console.log(keySearch)
  }, [])
  return (
    <SearchStyle>
      <div className="queryMessage">
        <span className="query-info query-error">"{keySearch}"</span>
      </div>
      {isSuccess && data.count > 0 ? (
        data.posts.map((el, i) => (
          <LatestNewsItem {...el} key={"search-item-" + i} />
        ))
      ) : isFetching ? (
        <Loading height={50} />
      ) : (
        <p className="found text-center my-5">No results found</p>
      )}
    </SearchStyle>
  )
}
export default SearchPage
