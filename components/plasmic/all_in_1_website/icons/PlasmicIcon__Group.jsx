// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
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
        d={
          "M24.847 23.375l-7.262-7.263a9.845 9.845 0 002.207-6.216C19.792 4.439 15.352 0 9.896 0 4.439 0 0 4.44 0 9.896s4.44 9.896 9.896 9.896c2.354 0 4.516-.83 6.216-2.207l7.263 7.262a.521.521 0 00.736 0l.736-.736a.521.521 0 000-.736zM9.896 17.708c-4.308 0-7.813-3.504-7.813-7.812s3.505-7.813 7.813-7.813 7.812 3.505 7.812 7.813-3.504 7.812-7.812 7.812z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
