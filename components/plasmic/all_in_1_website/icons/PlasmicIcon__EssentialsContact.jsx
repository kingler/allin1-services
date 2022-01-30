// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EssentialsContactIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M3.5 20v.5h1V20h-1zm8 0v.5h1V20h-1zm-7 0v-.8h-1v.8h1zm7-.8v.8h1v-.8h-1zM8 15.7a3.5 3.5 0 013.5 3.5h1A4.5 4.5 0 008 14.7v1zm-3.5 3.5A3.5 3.5 0 018 15.7v-1a4.5 4.5 0 00-4.5 4.5h1zM8 6.7a2.9 2.9 0 00-2.9 2.9h1c0-1.05.85-1.9 1.9-1.9v-1zm2.9 2.9A2.9 2.9 0 008 6.7v1c1.05 0 1.9.85 1.9 1.9h1zM8 12.5a2.9 2.9 0 002.9-2.9h-1A1.9 1.9 0 018 11.5v1zm0-1a1.9 1.9 0 01-1.9-1.9h-1A2.9 2.9 0 008 12.5v-1zm-5.6-7h19.2v-1H2.4v1zm20.3 1.1v12.8h1V5.6h-1zm-1.1 13.9H2.4v1h19.2v-1zM1.3 18.4V5.6h-1v12.8h1zm1.1 1.1a1.1 1.1 0 01-1.1-1.1h-1c0 1.16.94 2.1 2.1 2.1v-1zm20.3-1.1a1.1 1.1 0 01-1.1 1.1v1a2.1 2.1 0 002.1-2.1h-1zM21.6 4.5a1.1 1.1 0 011.1 1.1h1a2.1 2.1 0 00-2.1-2.1v1zm-19.2-1A2.1 2.1 0 00.3 5.6h1a1.1 1.1 0 011.1-1.1v-1zm12 5.8h4.8v-1h-4.8v1zm0 4.8h4.8v-1h-4.8v1zM0 23.7h24v-1H0v1zM5.1 0v4h1V0h-1zm12.8 0v4h1V0h-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EssentialsContactIcon;
/* prettier-ignore-end */
