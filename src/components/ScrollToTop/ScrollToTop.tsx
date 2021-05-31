import React, { useEffect, useState } from "react"
import { useWindowScroll } from "react-use"
import { Scroll } from "./ScrollToTop.styles"

export default function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll()
  const [visible, setVisiblity] = useState<boolean>(false)

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true)
    } else {
      setVisiblity(false)
    }
  }, [pageYOffset])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  if (!visible) {
    return <> </>
  }

  return (
    <Scroll>
      <span className="btn on-footer" id="back-top" onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </span>
    </Scroll>
  )
}
