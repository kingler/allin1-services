// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InstagramsvgIcon(props) {
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
          "M12.982 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5-9a1 1 0 100 2 1 1 0 000-2zm4.94 2.24a7.508 7.508 0 00-.48-2.5 5.56 5.56 0 00-3.2-3.2 7.51 7.51 0 00-2.5-.48c-.97-.06-1.29-.06-3.76-.06-2.47 0-2.79 0-3.76.06a7.51 7.51 0 00-2.5.48 5.56 5.56 0 00-3.2 3.2 7.51 7.51 0 00-.48 2.5c-.06.98-.06 1.3-.06 3.76s0 2.78.06 3.76c.017.855.18 1.7.48 2.5a5.56 5.56 0 003.2 3.2 7.51 7.51 0 002.5.48c1 0 1.29.06 3.76.06 2.47 0 2.79 0 3.76-.06a7.51 7.51 0 002.5-.48 5.56 5.56 0 003.2-3.2c.302-.8.464-1.645.48-2.5 0-1 .06-1.3.06-3.76s0-2.78-.06-3.76zm-2 7.43a5.997 5.997 0 01-.35 1.86 3.4 3.4 0 01-.82 1.25 3.26 3.26 0 01-1.25.81 5.75 5.75 0 01-1.87.36c-.94 0-1.23.05-3.66.05h-3.65a6 6 0 01-1.87-.35 3.4 3.4 0 01-1.25-.82 3.26 3.26 0 01-.81-1.25 5.74 5.74 0 01-.36-1.86V8.38a5.86 5.86 0 01.36-1.87 3.3 3.3 0 01.81-1.24 3.26 3.26 0 011.25-.81 5.75 5.75 0 011.87-.36c.94-.1 1.23-.1 3.66-.1h3.66a5.87 5.87 0 011.88.36 3.3 3.3 0 011.24.81c.363.349.64.776.81 1.25a5.74 5.74 0 01.41 1.91c0 1 .05 1.25.05 3.67s-.05 2.71-.05 3.67h-.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InstagramsvgIcon;
/* prettier-ignore-end */
