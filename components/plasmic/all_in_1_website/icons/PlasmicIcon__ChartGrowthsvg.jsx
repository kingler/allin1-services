// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChartGrowthsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 541 561"}
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
          "M0 427.978c160.95-47.469 439.1-232.9 470.99-381.99l-32.637 24.477-15.574-19.285L489.533 0l51.18 67.496-19.285 15.574-24.477-32.637c-35.602 162.44-327.1 358.25-496.95 404.98L0 427.978zm499.179 85.3V109.782c-11.867 29.668-31.153 59.34-54.887 88.266v315.23h54.887zm-88.27-278.15v278.14H355.28v-226.97c20.027-16.316 38.57-33.379 55.629-51.18v.01zm-79.36 278.15V306.345c-17.801 14.09-35.602 27.441-54.887 40.793v166.14h54.887zm-78.62-150.57v150.57h-54.887v-116.45c14.93-8.36 29.378-17.682 44.121-27.193l.114-.074c3.53-2.277 7.077-4.565 10.652-6.853zm-78.62 150.57v-103.1c-18.543 10.385-37.086 20.026-54.887 28.928v74.172h54.887zm-79.37-.001v-63.785c-18.543 8.898-37.086 16.316-54.887 22.25v41.535h54.887zm444.291 21.511H0v25.219h539.23v-25.219z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChartGrowthsvgIcon;
/* prettier-ignore-end */
