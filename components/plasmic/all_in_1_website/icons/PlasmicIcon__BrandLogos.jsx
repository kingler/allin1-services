// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BrandLogosIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M2.397 4.465H2.37A2.235 2.235 0 112.426.008a2.235 2.235 0 11-.029 4.457zm2.015 3h-4v12h4v-12zm10.499 0a4.473 4.473 0 00-3.5 1.704V7.465h-4v12h4v-5.5a2 2 0 014 0v5.5h4v-7.5a4.499 4.499 0 00-4.5-4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandLogosIcon;
/* prettier-ignore-end */
