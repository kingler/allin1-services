// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container4Icon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M36.349 11.02a1.875 1.875 0 012.302 0l22.5 17.5c.457.355.724.901.724 1.48v27.5A6.875 6.875 0 0155 64.375H20a6.875 6.875 0 01-6.875-6.875V30c0-.579.267-1.125.724-1.48l22.5-17.5zM16.875 30.917V57.5A3.125 3.125 0 0020 60.625h8.125V37.5c0-1.036.84-1.875 1.875-1.875h15c1.035 0 1.875.84 1.875 1.875v23.125H55a3.125 3.125 0 003.125-3.125V30.917L37.5 14.875 16.875 30.917zm26.25 29.708v-21.25h-11.25v21.25h11.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Container4Icon;
/* prettier-ignore-end */
