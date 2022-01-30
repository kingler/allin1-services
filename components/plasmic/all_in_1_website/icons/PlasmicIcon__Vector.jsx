// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 45"}
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
          "M27.637 1.086A11.268 11.268 0 0132.442 0c1.65 0 3.282.369 4.806 1.086a12.579 12.579 0 014.073 3.091 14.515 14.515 0 012.723 4.625c.631 1.73.956 3.583.956 5.456 0 1.872-.325 3.726-.956 5.456a14.516 14.516 0 01-2.723 4.625l-17.756 20.16c-.589.668-1.543.668-2.13 0L3.677 24.339C1.323 21.665 0 18.039 0 14.258 0 10.477 1.323 6.85 3.678 4.177 6.033 1.503 9.226 0 12.557 0c3.33 0 6.524 1.502 8.879 4.176L22.5 5.385l1.063-1.208a12.58 12.58 0 014.074-3.091z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
