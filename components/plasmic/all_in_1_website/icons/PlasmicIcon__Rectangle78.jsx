// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rectangle78Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1155 256"}
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
          "M0 85.333C0 38.205 38.205 0 85.333 0H1059c53.02 0 96 42.98 96 96 0 88.366-71.63 160-160 160H170.667C76.41 256 0 179.59 0 85.333z"
        }
        fill={"currentColor"}
        fillOpacity={".1"}
      ></path>
    </svg>
  );
}

export default Rectangle78Icon;
/* prettier-ignore-end */
