// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group14Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 129 110"}
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
          "M33.374.003C24.837.003 16.3 3.197 9.777 9.665c-13.044 12.932-13.028 33.952 0 46.893l52.276 51.974a3.221 3.221 0 004.528 0c17.452-17.301 34.928-34.622 52.38-51.925 13.044-12.932 13.044-33.912 0-46.845-13.044-12.932-34.151-12.932-47.196 0l-7.346 7.245-7.446-7.346C50.45 3.195 41.912 0 33.375 0v.003zm0 6.391c6.884 0 13.775 2.6 19.07 7.85l9.66 9.61a3.224 3.224 0 004.578 0l9.61-9.56a27.028 27.028 0 0138.14 0c10.588 10.499 10.588 27.238 0 37.737-16.694 16.55-33.421 33.11-50.114 49.662L14.305 51.979c-10.581-10.511-10.589-27.238 0-37.737 5.294-5.25 12.185-7.85 19.069-7.85v.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
