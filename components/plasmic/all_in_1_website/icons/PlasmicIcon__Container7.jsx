// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 110 110"}
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
          "M91.407 21.993l-5.57-2.901L99.05 10l.95 16.468-5.57-2.899-15.516 32.337a1.699 1.699 0 01-1.24.95 1.659 1.659 0 01-1.465-.493l-15.096-15.73-15.41 24.086c-.472.74-1.397.995-2.16.598L28.079 57.26l-15.69 16.351L10 71.124l16.552-17.25a1.645 1.645 0 011.949-.33l15.22 7.93 15.724-24.58c.28-.439.736-.723 1.24-.776a1.637 1.637 0 011.36.507L76.94 52.148l14.468-30.155zm2.549 74.487H11.195V100h82.76v-3.52z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Container7Icon;
/* prettier-ignore-end */
