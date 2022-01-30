// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Container5Icon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M53.698 23.244h15.515-.001c.628 0 1.159.46 1.159 1.089v42.01a1.173 1.173 0 01-1.16 1.157H5.787a1.173 1.173 0 01-1.159-1.157v-42.01c0-.629.53-1.088 1.16-1.088h15.514L36.696 7.84a1.138 1.138 0 011.61-.013l15.392 15.417zm-3.22 0L37.5 10.267 24.523 23.244h25.955zM6.907 65.223h61.188V25.521H6.907v39.702zm58.626-36.001a1.139 1.139 0 00-1.138-1.139H10.749a1.14 1.14 0 00-1.139 1.139v32.16a1.138 1.138 0 001.139 1.138h53.646a1.138 1.138 0 001.138-1.139v-32.16zM11.887 60.243v-4.08l12.864-8.52c.003-.003.003-.005.002-.007v-.004l.002-.002a4.887 4.887 0 015.853.245l8.248 6.888a7.064 7.064 0 007.996.728l16.263-8.88v13.632H11.887zM63.115 30.36v13.658l-17.364 9.48a4.825 4.825 0 01-5.46-.487l-8.243-6.888a7.139 7.139 0 00-8.563-.374l-11.598 7.685V30.36h51.228zM42.654 44.95c3.39 0 6.148-2.66 6.148-5.929 0-3.268-2.758-5.927-6.148-5.927-3.39 0-6.149 2.659-6.149 5.927 0 3.27 2.759 5.928 6.149 5.928zm0-9.58c2.134 0 3.871 1.639 3.871 3.652s-1.736 3.65-3.871 3.65c-2.136 0-3.872-1.638-3.872-3.65 0-2.014 1.737-3.652 3.872-3.652z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Container5Icon;
/* prettier-ignore-end */
