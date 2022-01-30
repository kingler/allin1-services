// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebooksvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
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
          "M19.812 9.44a1 1 0 00-.83-.44h-3V7h2.2a1 1 0 001-1V2a1 1 0 00-1-1h-3.2a5.8 5.8 0 00-5.8 5.8V9h-2.2a1 1 0 00-1 1v4a1 1 0 001 1h2.2v7a1 1 0 001 1h4.8a1 1 0 001-1v-7h1.4a1 1 0 00.93-.63l1.6-4a1 1 0 00-.1-.93zM16.702 13h-1.72a1 1 0 00-1 1v7h-2.8v-7a1 1 0 00-1-1h-2.2v-2h2.2a1 1 0 001-1V6.8a3.81 3.81 0 013.8-3.8h2.2v2h-.8a2.5 2.5 0 00-1.92.52 1.738 1.738 0 00-.48 1.28V10a1 1 0 001 1h2.52l-.8 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebooksvgIcon;
/* prettier-ignore-end */
