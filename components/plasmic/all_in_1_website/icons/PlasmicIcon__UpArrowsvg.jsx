// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UpArrowsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 8"}
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
          "M6.72.22a.75.75 0 011.06 0l6 6a.75.75 0 01-1.06 1.06L7.25 1.81 1.78 7.28A.75.75 0 01.72 6.22l6-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UpArrowsvgIcon;
/* prettier-ignore-end */
