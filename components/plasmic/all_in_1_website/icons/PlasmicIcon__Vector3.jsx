// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 71 97"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M70.416 8.19V2.063c0-.586-.477-1.064-1.064-1.064H2.064A1.068 1.068 0 001 2.064V8.19c0 .587.478 1.065 1.064 1.065H9.37c-1.097 4.41-3.534 18.275 6.92 25.66a273.553 273.553 0 006.012 4.118c1.753 1.177 3.146 2.122 4.287 2.972.078.116.18.218.305.298.303.196.576.399.84.605.136.113.28.23.404.341a9.191 9.191 0 01.752.745c1.091 1.244 1.612 2.697 1.62 4.508-.007 1.489-.352 2.74-1.08 3.827-.032.042-.056.085-.089.128-.05.07-.114.137-.168.207-1.148 1.344-3.12 2.687-6.209 4.778a227.391 227.391 0 00-6.684 4.655C7.295 68.63 8.811 83.326 9.5 87.749H2.067c-.587 0-1.064.477-1.064 1.064v6.123c0 .586.477 1.064 1.064 1.064h67.288c.586 0 1.064-.478 1.064-1.064v-6.123c0-.587-.478-1.064-1.064-1.064H62.62c.69-4.425 2.205-19.118-6.779-25.653-2.613-1.9-4.83-3.4-6.684-4.655-3.09-2.091-5.06-3.434-6.209-4.778-.053-.07-.117-.136-.168-.207-.034-.043-.057-.086-.088-.128-.73-1.088-1.075-2.338-1.08-3.827.007-1.81.527-3.26 1.614-4.503.151-.162.3-.325.474-.489a8.63 8.63 0 01.268-.247c.131-.118.285-.242.429-.362.26-.203.528-.404.828-.598.124-.08.225-.18.304-.295 1.14-.85 2.535-1.796 4.29-2.975a288.364 288.364 0 006.012-4.116c10.453-7.387 8.017-21.254 6.92-25.662h6.602a1.065 1.065 0 001.063-1.064h0zm-2.13 81.689v3.994H3.127v-3.995h65.16zM54.6 33.179c-2.292 1.62-4.273 2.949-5.968 4.087-2.394 1.607-4.237 2.858-5.64 4.034-.197.156-.372.32-.551.483-.181.165-.366.332-.53.496-.086.09-.168.183-.249.274-1.199 1.281-1.885 2.586-2.089 4.297a13.337 13.337 0 00-.092 1.653c-.002.53.024 1.08.092 1.652.176 1.474.73 2.643 1.653 3.752.724.954 1.657 1.816 2.85 2.584.007.005.015.002.022.007 1.09.815 2.36 1.685 3.868 2.706a223.287 223.287 0 016.625 4.616c8.132 5.913 6.447 20.288 5.871 23.93H11.657c-.58-3.639-2.272-18.007 5.871-23.93a223.27 223.27 0 016.625-4.616c1.508-1.022 2.778-1.89 3.868-2.706.007-.005.015-.002.022-.007 1.194-.769 2.127-1.63 2.85-2.584.922-1.11 1.477-2.278 1.653-3.752a13.5 13.5 0 00.092-1.652 13.53 13.53 0 00-.092-1.653c-.205-1.712-.893-3.019-2.093-4.301a10.08 10.08 0 00-.24-.264c-.17-.17-.36-.345-.55-.515-.17-.156-.34-.313-.527-.462-1.405-1.177-3.25-2.43-5.648-4.04-1.695-1.138-3.676-2.467-5.968-4.09-9.674-6.833-6.809-20.61-5.947-23.922h48.975c.859 3.31 3.725 17.087-5.949 23.922h.001zM68.287 7.124H3.127V3.129h65.16v3.996zm-10.14 11.792c-.036-.004-.07-.022-.107-.022H13.506c-.051 0-.093.022-.142.028a.962.962 0 00-.394.138 1.096 1.096 0 00-.386.396.959.959 0 00-.083.21c-.01.037-.034.066-.041.103-.04.215-.88 5.331 5.028 11.443 1.607 1.66 5.495 4.077 8.619 6.018l1.354.844c4.262 2.673 7.216 7.256 7.343 7.454v7.57c0 .587.478 1.065 1.064 1.065.587 0 1.065-.478 1.065-1.065V45.54c.085-.132 3.057-4.774 7.351-7.467l1.338-.831c3.13-1.946 7.028-4.367 8.635-6.032 5.907-6.112 5.068-11.23 5.028-11.443a1.056 1.056 0 00-1.138-.85h0zm-5.424 10.82c-1.424 1.474-5.357 3.917-8.227 5.702l-1.344.837c-3.475 2.177-6.073 5.393-7.281 7.061-1.209-1.668-3.807-4.884-7.281-7.06l-1.36-.849c-2.865-1.782-6.788-4.22-8.212-5.69-3.777-3.908-4.42-7.2-4.49-8.712h42.686c-.07 1.51-.712 4.8-4.491 8.71h0zM36.626 65.862a2.09 2.09 0 00-.504-.087c-1.24 0-1.866 1.338-2.593 2.884-.345.737-.738 1.572-1.087 1.969-2.779 3.136-4.777 3.702-8.086 4.637-1.155.327-2.432.687-3.902 1.206-8.267 2.908-6.924 8.607-6.909 8.665.12.473.545.803 1.031.803h42.859c.532 0 .981-.393 1.053-.918.44-3.163.623-6.348-.999-8.214-1.177-1.35-3.138-1.89-6.22-1.792-.425.017-.852.03-1.288.03-2.325 0-4.396-.436-6.939-2.574-1.593-1.337-2.509-2.61-3.317-3.739-.918-1.277-1.71-2.382-3.099-2.87h0zm5.048 8.241c3.873 3.253 6.991 3.134 9.676 3.04 2.345-.095 3.82.243 4.533 1.063.774.887.965 2.587.617 5.604H15.576c.103-1.262.945-3.699 5.584-5.332 1.421-.5 2.659-.847 3.773-1.164 3.431-.972 5.909-1.671 9.103-5.277.552-.624.992-1.566 1.42-2.476.215-.463.55-1.173.794-1.538.593.345 1.072 1.013 1.746 1.953.84 1.168 1.881 2.618 3.677 4.127h0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */