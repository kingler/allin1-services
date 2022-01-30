// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BrandsSocialMedia2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
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
          "M18.83 9.44A1 1 0 0018 9h-3V7h2.2a1 1 0 001-1V2a1 1 0 00-1-1H14a5.8 5.8 0 00-5.8 5.8V9H6a1 1 0 00-1 1v4a1 1 0 001 1h2.2v7a1 1 0 001 1H14a1 1 0 001-1v-7h1.4a1 1 0 00.93-.63l1.6-4a1 1 0 00-.1-.93zM15.72 13H14a1 1 0 00-1 1v7h-2.8v-7a1 1 0 00-1-1H7v-2h2.2a1 1 0 001-1V6.8A3.81 3.81 0 0114 3h2.2v2h-.8a2.5 2.5 0 00-1.92.52A1.74 1.74 0 0013 6.8V10a1 1 0 001 1h2.52l-.8 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandsSocialMedia2Icon;
/* prettier-ignore-end */
