// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MobileHamburgersvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
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
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M19 11H1c-.552 0-1-.45-1-1 0-.56.448-1 1-1h18c.55 0 1 .44 1 1 0 .55-.45 1-1 1zm0-7H1c-.56 0-1-.45-1-1 0-.56.448-1 1-1h18c.55 0 1 .44 1 1 0 .55-.45 1-1 1zm0 14H1c-.552 0-1-.45-1-1 0-.56.448-1 1-1h18c.55 0 1 .44 1 1 0 .55-.45 1-1 1z"
        }
      ></path>
    </svg>
  );
}

export default MobileHamburgersvgIcon;
/* prettier-ignore-end */
