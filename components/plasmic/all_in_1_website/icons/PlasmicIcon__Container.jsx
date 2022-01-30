// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ContainerIcon(props) {
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
        d={
          "M37.5 10a27.5 27.5 0 100 55 27.5 27.5 0 000-55zm0 50a22.5 22.5 0 110-45 22.5 22.5 0 010 45zm5-35v-2.5a2.5 2.5 0 00-5 0V25H35v-2.5a2.5 2.5 0 00-5 0V25h-2.5a2.5 2.5 0 000 5H30v15h-2.5a2.5 2.5 0 000 5H30v2.5a2.5 2.5 0 005 0V50h2.5v2.5a2.5 2.5 0 005 0V50a7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-1.925-5 7.5 7.5 0 001.925-5 7.5 7.5 0 00-7.5-7.5zm0 20H35v-5h7.5a2.5 2.5 0 010 5zm0-10H35v-5h7.5a2.5 2.5 0 010 5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ContainerIcon;
/* prettier-ignore-end */
