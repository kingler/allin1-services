// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconSmallTickIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M30 11.25c-.7 0-1.325.275-1.775.725L17.5 22.725l-5.725-5.75A2.492 2.492 0 0010 16.25a2.507 2.507 0 00-2.5 2.5c0 .7.275 1.325.725 1.775l7.5 7.5c.45.45 1.075.725 1.775.725s1.325-.275 1.775-.725l12.5-12.5c.45-.45.725-1.075.725-1.775 0-1.375-1.125-2.5-2.5-2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSmallTickIcon;
/* prettier-ignore-end */
