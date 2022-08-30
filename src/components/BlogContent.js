import React from "react";

function BlogContent(props) {
  if(!props.isPublished) {
    return null
  } else {
    return (
      <div>
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead}</p>
      </div> 
    )
  }
}

export default BlogContent;
