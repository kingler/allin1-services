// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container3Icon(props) {
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
          "M20.959 8.249l13.136 13.137a2.627 2.627 0 010 3.73 2.628 2.628 0 01-3.73 0l-8.644-8.67v19.942a2.627 2.627 0 11-5.255 0V16.446l-8.644 8.67a2.638 2.638 0 01-3.731-3.73L17.228 8.249c.25-.24.544-.427.867-.552a2.627 2.627 0 011.997 0c.322.125.617.313.867.552zM57.768 66.75l13.136-13.137a2.627 2.627 0 000-3.73 2.628 2.628 0 00-3.73 0l-8.644 8.67V38.612a2.627 2.627 0 10-5.255 0v19.942l-8.644-8.67a2.638 2.638 0 00-3.731 3.73l13.137 13.137c.25.24.544.427.867.552.64.263 1.357.263 1.997 0 .322-.125.617-.313.867-.552z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Container3Icon;
/* prettier-ignore-end */
