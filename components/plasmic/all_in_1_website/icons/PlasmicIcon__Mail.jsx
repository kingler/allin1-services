// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MailIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M3.736 7.528L16 16.113l12.264-8.585a1.677 1.677 0 00-1.597-1.195H5.333c-.75 0-1.392.507-1.597 1.195zM28.333 9.92l-11.76 8.232a1 1 0 01-1.146 0L3.667 9.92V24c0 .914.752 1.667 1.666 1.667h21.334c.914 0 1.666-.753 1.666-1.667V9.92zM1.667 8a3.674 3.674 0 013.666-3.667h21.334A3.675 3.675 0 0130.333 8v16a3.675 3.675 0 01-3.666 3.667H5.333A3.674 3.674 0 011.667 24V8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MailIcon;
/* prettier-ignore-end */
