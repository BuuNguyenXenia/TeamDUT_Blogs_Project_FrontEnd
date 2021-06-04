import React from "react"
import { ViewItem } from "./ViewPosts.styles"
import CommentsPost from "../Comments/CommentsPost"
const ViewPostsItem = () => {
  return (
    <ViewItem>
      <div className="post-item">
        <div className="post-item-header">
          <a href="1" className="header">
            Home
          </a>
          <span> Post </span>
        </div>
        <h2 className="post-item-title ">
          The 18 Practices for Building Responsive Web Applications
        </h2>
      </div>
      <div className="post-item-meta">
        <div className="post-item-author">
          <img
            src="https://images.viblo.asia/120x120/a2ac1e41-bc36-48b4-b572-f2c1252a7e7a.jpg"
            alt=""
          />
          <span>
            by
            <span className="author"> Sora Blogging Tips </span> •
            <time dateTime="21-12-2002"> July 30, 2020</time>
          </span>
        </div>
        <div className="post-item-countComment">
          <div className="like">
            <i className="fas fa-thumbs-up"></i>
            <span className="count">12</span>
          </div>
          <div className="comment ml-3">
            <i className="far fa-comments"></i>
            <span className="count">12</span>
          </div>
        </div>
      </div>
      <div className="post-item-body">
        <div className="body-image">
          <img
            src="https://1.bp.blogspot.com/-k_4VhcdaHds/XyMrIZP2mWI/AAAAAAAACb0/43LgXMLoZPEiVqOL1SUWKJMUIU3t0pd5QCLcBGAsYHQ/s1600/ify10.jpg"
            alt=""
          />
        </div>
        <div className="body-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. - John Doe It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum. Lorem Ipsum has been the
            industry's The generated Lorem Ipsum is therefore always Making this
            the first true generator It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout.
          </p>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <div className="comments-posts">
          <p className="header-comment">Post a Comment</p>
          <CommentsPost />
        </div>
      </div>
    </ViewItem>
  )
}

export default ViewPostsItem
