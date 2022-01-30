// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M22.5 7.5H18v-6c0-.825-.675-1.5-1.5-1.5h-15C.675 0 0 .675 0 1.5v21c0 .825.675 1.5 1.5 1.5H6v-6h6v6h10.5c.825 0 1.5-.675 1.5-1.5V9c0-.825-.675-1.5-1.5-1.5zM7.5 15H3v-4.5h4.5V15zM3 7.5h4.5V3H3v4.5zM15 15h-4.5v-4.5H15V15zm-4.5-7.5H15V3h-4.5v4.5zM21 21h-3v-3h3v3zm-3-6h3v-4.5h-3V15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Container8Icon;
/* prettier-ignore-end */
