// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 75 75"}
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
          "M55.42 51.025A15 15 0 0143.57 57.5c-6.7 0-12.5-5-15-12.5h13.85a2.5 2.5 0 000-5H27.543c0-.825-.125-1.675-.125-2.5s0-1.675.125-2.5H42.42a2.5 2.5 0 000-5H28.594c2.5-7.5 8.275-12.5 15-12.5a15 15 0 0111.825 6.475 2.499 2.499 0 004.65-1.018 2.5 2.5 0 00-.65-1.932A19.8 19.8 0 0043.57 12.5c-9.4 0-17.5 7.1-20.175 17.5H17.42a2.5 2.5 0 100 5h5.125v5H17.42a2.5 2.5 0 100 5h5.975C26.12 55.4 34.17 62.5 43.57 62.5a19.8 19.8 0 0015.85-8.525 2.5 2.5 0 00-4-2.95z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Container2Icon;
/* prettier-ignore-end */
