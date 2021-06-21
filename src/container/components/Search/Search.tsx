import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { PATH } from "src/services/constants/path"
import { getDataSearchPosts } from "src/container/pages/SearchPage/Search.slice"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppDispatch } from "src/redux/store/hooks"
import "./Search.styles"
import { MainSearch } from "./Search.styles"

export default function Search() {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const keySearch: any = LocalStorageService.getItem<string>("keySearch")
  const [valueSearch, setValueSearch] = useState<string>(keySearch)

  const handleChangeSearch = e => {
    setValueSearch(e.target.value)
  }
  const handleSearch = (valueSearch, e) => {
    if (e.key === "Enter") {
      dispatch(getDataSearchPosts(valueSearch))
      history.push(PATH.SEARCH_POST)
    }
  }

  return (
    <MainSearch className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        onChange={handleChangeSearch}
        onKeyPress={e => handleSearch(valueSearch, e)}
      />
    </MainSearch>
  )
}
