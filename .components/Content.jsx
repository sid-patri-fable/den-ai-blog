import React from "react";
import TOC from "./toc";

export default function Content(props) {
  return (
    <div className="content-con">
      <TOC toc={props.toc} />
      <div className="content">{props.children}</div>
      <div></div>
    </div>
  );
}
