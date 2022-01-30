// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon10Icon(props) {
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
          "M4.482 20.5v.5h1v-.5h-1zm8 0v.5h1v-.5h-1zm-7 0v-.8h-1v.8h1zm7-.8v.8h1v-.8h-1zm-3.5-3.5a3.5 3.5 0 013.5 3.5h1a4.5 4.5 0 00-4.5-4.5v1zm-3.5 3.5a3.5 3.5 0 013.5-3.5v-1a4.5 4.5 0 00-4.5 4.5h1zm3.5-12.5a2.9 2.9 0 00-2.9 2.9h1a1.9 1.9 0 011.9-1.9v-1zm2.9 2.9a2.9 2.9 0 00-2.9-2.9v1c1.05 0 1.9.85 1.9 1.9h1zm-2.9 2.9a2.9 2.9 0 002.9-2.9h-1a1.9 1.9 0 01-1.9 1.9v1zm0-1a1.9 1.9 0 01-1.9-1.9h-1a2.9 2.9 0 002.9 2.9v-1zm-5.6-7h19.2V4h-19.2v1zm20.3 1.1v12.8h1V6.1h-1zm-1.1 13.9h-19.2v1h19.2v-1zm-20.3-1.1V6.1h-1v12.8h1zm1.1 1.1a1.1 1.1 0 01-1.1-1.1h-1c0 1.16.94 2.1 2.1 2.1v-1zm20.3-1.1a1.1 1.1 0 01-1.1 1.1v1a2.1 2.1 0 002.1-2.1h-1zM22.582 5a1.1 1.1 0 011.1 1.1h1a2.1 2.1 0 00-2.1-2.1v1zm-19.2-1a2.1 2.1 0 00-2.1 2.1h1a1.1 1.1 0 011.1-1.1V4zm12 5.8h4.8v-1h-4.8v1zm0 4.8h4.8v-1h-4.8v1zm-14.4 9.6h24v-1h-24v1zM6.082.5v4h1v-4h-1zm12.8 0v4h1v-4h-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
