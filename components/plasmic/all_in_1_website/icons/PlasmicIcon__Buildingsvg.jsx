// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BuildingsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
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
          "M23.482 8h-4.5V2c0-.825-.675-1.5-1.5-1.5h-15c-.825 0-1.5.675-1.5 1.5v21c0 .825.675 1.5 1.5 1.5h4.5v-6h6v6h10.5c.825 0 1.5-.675 1.5-1.5V9.5c0-.825-.675-1.5-1.5-1.5zm-15 7.5h-4.5V11h4.5v4.5zM3.982 8h4.5V3.5h-4.5V8zm12 7.5h-4.5V11h4.5v4.5zm-4.5-7.5h4.5V3.5h-4.5V8zm10.5 13.5h-3v-3h3v3zm-3-6h3V11h-3v4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BuildingsvgIcon;
/* prettier-ignore-end */
