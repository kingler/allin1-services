// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LinkedinsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#RpJ2dQhYja)"} fill={"#D8ECFF"}>
        <path
          d={
            "M3.388 4.465H3.36A2.235 2.235 0 113.416.008a2.236 2.236 0 11-.028 4.457zm2.014 3h-4v12h4v-12zm10.5 0a4.473 4.473 0 00-3.5 1.704V7.465h-4v12h4v-5.5a2 2 0 014 0v5.5h4v-7.5a4.499 4.499 0 00-4.5-4.5z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"RpJ2dQhYja"}>
          <path
            fill={"#fff"}
            transform={"translate(.99)"}
            d={"M0 0h19.411v19.465H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedinsvgIcon;
/* prettier-ignore-end */
