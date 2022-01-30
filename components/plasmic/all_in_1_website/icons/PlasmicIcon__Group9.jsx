// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 109 109"}
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
          "M108.848 54.5l-7.37-33.404H82.514V10.548h3.511V0H61.447v10.548h3.511v10.548H7.37L.04 54.118 0 59.773h7.022V81.5s12.086 13 17.087 16c5 3 6 11.498 6 11.498h71.716V59.773h7.023V54.5zM64.958 3.515h17.556v3.516H64.958V3.516zm3.511 7.032h10.534v10.548H68.47V10.548zM31.602 59.773v7.033h3.51V98.45H24.598v-3.517h-3.489l-9.803-7.032h2.74v-3.516h-3.51V80.87h3.51v-3.516h-3.51v-3.516h3.51v-3.516h-3.51v-3.516h3.51V63.29h-3.51v-3.517h21.067zm42.134 42.194v3.516H35.113v-3.516h38.623zm-10.533-3.516H45.647V73.838h17.556V98.45zm3.51 0V70.32H42.136v28.13h-3.51V66.806h31.6V98.45h-3.511zm-31.6-35.161v-4.184l19.174-9.52 19.45 9.527v4.177H35.112zm-5.005 38.677h1.494v3.516h-1.494v-3.516zm47.14 3.516v-3.516h21.067v3.516H77.248zM98.315 63.29h-3.511v3.516h3.51v3.516h-3.51v3.516h3.51v3.516h-3.51v3.516h3.51v3.516h-3.51v3.516h3.51v3.516h-3.51v3.516h3.51v3.517H73.737V66.806h3.511v-7.032h21.068v3.516zm7.022-7.033h-29.44l-21.62-10.589-21.331 10.59H3.512V54.69l6.675-30.078H98.66l6.675 30.078.001 1.566z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M56.18 84.387h3.511v3.516h-3.51v-3.516z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
