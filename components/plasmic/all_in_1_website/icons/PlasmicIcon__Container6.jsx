// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 170 170"}
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
          "M89.094 93.4h-1.023c-2.268 0-4.247-1.694-5.31-4.2h-1.855v-2.8h1.116a11.329 11.329 0 01-.093-1.4c0-.478.036-.944.093-1.4h-1.116v-2.8h1.854c1.064-2.506 3.043-4.2 5.31-4.2h1.024v2.8h-1.023c-1.03 0-1.96.539-2.68 1.4h1.656v2.8h-2.925a7.43 7.43 0 00-.146 1.4c0 .486.06.95.146 1.4h2.925v2.8h-1.656c.72.861 1.651 1.4 2.68 1.4h1.023v2.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Container6Icon;
/* prettier-ignore-end */
