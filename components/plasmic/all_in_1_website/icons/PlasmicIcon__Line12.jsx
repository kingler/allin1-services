// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Line12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 52"}
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
        d={
          "M54.475 28.475a3.5 3.5 0 000-4.95L32.2 1.251a3.5 3.5 0 10-4.95 4.95L47.051 26l-19.8 19.799a3.5 3.5 0 104.95 4.95l22.274-22.274zM0 29.5h52v-7H0v7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Line12Icon;
/* prettier-ignore-end */
