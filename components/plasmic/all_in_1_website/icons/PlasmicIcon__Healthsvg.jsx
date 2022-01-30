// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HealthsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 155 139"}
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
          "M151.933 0H108.3c-4.085 0-8.001 1.464-10.89 4.07-2.888 2.608-4.51 6.143-4.51 9.83-.007 2.049-.767 4.039-2.16 5.656-1.393 1.619-3.341 2.774-5.54 3.286v-7.436c1.752-1.794 2.668-4.128 2.557-6.517-.11-2.388-1.24-4.646-3.15-6.3C82.694.934 80.148.01 77.5.01c-2.65 0-5.195.924-7.107 2.579-1.911 1.654-3.04 3.912-3.15 6.3-.112 2.39.805 4.723 2.557 6.517v7.436c-2.2-.512-4.147-1.667-5.54-3.286-1.394-1.617-2.153-3.607-2.16-5.656 0-3.687-1.623-7.222-4.51-9.83C54.7 1.465 50.785 0 46.7 0H3.067C1.649 0 .5 1.037.5 2.317c-.001 3.313 1.309 6.52 3.695 9.038 2.386 2.52 5.69 4.186 9.318 4.7.505 2.909 2.02 5.598 4.326 7.678 2.305 2.082 5.285 3.45 8.508 3.905.568 3.274 2.415 6.257 5.206 8.41 2.79 2.154 6.342 3.337 10.014 3.335H69.8v34.75H49.267c-2.751 0-5.293-1.324-6.669-3.474-1.375-2.15-1.375-4.8 0-6.95 1.376-2.15 3.918-3.476 6.669-3.476H62.1c.68 0 1.334-.244 1.815-.678a2.209 2.209 0 00.752-1.638v-4.634a2.204 2.204 0 00-.745-1.644l-7.7-6.95a2.713 2.713 0 00-1.822-.672h-5.133c-8.334.018-16.138 3.688-20.931 9.84-4.794 6.153-5.98 14.022-3.18 21.107 2.798 7.085 9.233 12.502 17.258 14.529a18.674 18.674 0 00-.847 5.49c.002 4.111 1.35 8.13 3.876 11.552 2.526 3.421 6.116 6.091 10.317 7.677a17.693 17.693 0 00-.77 5.096c-.004 5.089 2.174 9.982 6.079 13.653 3.905 3.672 9.232 5.835 14.866 6.039H77.5c5.548-.306 10.758-2.508 14.572-6.157 3.814-3.648 5.946-8.472 5.962-13.488a17.62 17.62 0 00-.59-4.495c5.65-1.652 10.377-5.203 13.202-9.918 2.824-4.715 3.529-10.232 1.966-15.403 8.088-1.984 14.593-7.406 17.427-14.526 2.832-7.12 1.636-15.038-3.206-21.214-4.841-6.174-12.719-9.827-21.1-9.782H100.6a2.713 2.713 0 00-1.822.672l-7.7 6.95a2.204 2.204 0 00-.745 1.644v4.634c0 .614.27 1.204.752 1.638a2.714 2.714 0 001.815.678h12.833c2.751 0 5.293 1.325 6.669 3.476 1.375 2.15 1.375 4.8 0 6.95-1.376 2.15-3.918 3.474-6.669 3.474H85.2v-34.75h28.233c3.672.002 7.224-1.18 10.014-3.335 2.791-2.153 4.638-5.136 5.206-8.41 3.223-.455 6.203-1.823 8.508-3.905 2.307-2.08 3.821-4.77 4.326-7.679 3.627-.513 6.932-2.18 9.318-4.7 2.386-2.518 3.696-5.724 3.695-9.037 0-.615-.27-1.204-.752-1.639A2.713 2.713 0 00151.933 0zM41.567 34.75c-2.275-.001-4.485-.685-6.283-1.943s-3.081-3.02-3.65-5.007h12.5c1.417 0 2.566-1.037 2.566-2.317 0-1.279-1.15-2.316-2.567-2.316h-15.4c-2.274-.001-4.484-.685-6.282-1.944-1.798-1.257-3.081-3.018-3.65-5.006h15.066c1.417 0 2.566-1.038 2.566-2.317 0-1.28-1.149-2.317-2.566-2.317H15.9c-2.274 0-4.485-.684-6.282-1.943-1.798-1.257-3.082-3.019-3.65-5.007h40.731c2.723 0 5.334.977 7.26 2.714 1.925 1.739 3.007 4.096 3.007 6.553.003 3.283 1.295 6.458 3.642 8.964 2.35 2.505 5.606 4.18 9.191 4.727v7.159H41.567zM28.733 67.183c0-4.915 2.164-9.63 6.015-13.104 3.85-3.477 9.073-5.43 14.519-5.43h4.081l6.185 5.584V55.6H49.267c-4.585 0-8.822 2.208-11.114 5.792-2.292 3.583-2.292 8 0 11.583s6.53 5.791 11.114 5.791h.923c-2.414 1.755-4.412 3.928-5.877 6.394-4.447-.997-8.396-3.31-11.22-6.566-2.823-3.258-4.357-7.275-4.36-11.411zm45.66 57.917c-.915-1.025-1.421-2.298-1.438-3.614-.02-1.493.623-2.931 1.785-3.993 1.163-1.062 2.747-1.66 4.402-1.66h.923v5.583c-.007 1.65-.825 3.211-2.233 4.263l-1.693 1.274-1.745-1.853zm18.506-5.792c.007 3.948-1.707 7.74-4.77 10.557-3.064 2.818-7.233 4.434-11.605 4.501h-.437a.626.626 0 01-.513-.394.523.523 0 01.205-.671l5.365-4.031c2.575-1.946 4.06-4.823 4.055-7.854v-5.583h7.161c.34 1.133.52 2.301.539 3.475zm15.4-24.325c0 4.301-1.893 8.426-5.263 11.467-3.369 3.041-7.938 4.75-12.704 4.75h-11.19c-3.013.006-5.901 1.094-8.024 3.024-2.123 1.929-3.31 4.542-3.295 7.262.037 2.345.942 4.611 2.566 6.44l1.849 2.039c-1.002.861-1.623 2.023-1.746 3.266-4.795-1.782-8.399-5.476-9.75-9.995-1.354-4.518-.302-9.348 2.846-13.067 3.147-3.72 8.033-5.907 13.218-5.919h13.526c2.723 0 5.334-.976 7.26-2.714 1.925-1.738 3.007-4.095 3.007-6.552a8.411 8.411 0 00-1.437-4.634h8.367c.504 1.503.763 3.063.77 4.634zm-12.834 0c0 1.229-.54 2.408-1.503 3.277-.963.868-2.269 1.356-3.63 1.356h-5.133V90.35h5.133c1.361 0 2.668.488 3.63 1.357.962.869 1.503 2.047 1.503 3.276zm-15.4 4.633h-5.133V90.35h5.133v9.267zm-10.266 0h-5.134c-1.834 0-3.529-.883-4.445-2.316a4.247 4.247 0 010-4.633c.916-1.434 2.611-2.317 4.445-2.317H69.8v9.267zm35.933-20.85c4.584 0 8.822-2.208 11.113-5.791 2.293-3.584 2.293-8 0-11.583-2.291-3.584-6.529-5.792-11.113-5.792H95.465v-1.367l6.186-5.583h4.081c7.336 0 14.114 3.533 17.782 9.267 3.668 5.733 3.668 12.8 0 18.533-3.668 5.733-10.446 9.266-17.782 9.266H64.665c-3.415.063-6.573 1.654-8.424 4.247-1.85 2.593-2.15 5.846-.8 8.68 1.35 2.832 4.172 4.873 7.53 5.444-2.162 1.617-3.966 3.59-5.312 5.816-5.116-1.967-8.934-5.962-10.341-10.817-1.407-4.856-.243-10.026 3.15-14.001 3.394-3.976 8.637-6.31 14.197-6.319h41.067zm-30.8-4.633V14.456c.006-.662-.302-1.295-.847-1.737-1.092-.879-1.717-2.134-1.72-3.453 0-1.656.979-3.185 2.567-4.012a5.618 5.618 0 015.133 0c1.588.827 2.567 2.357 2.567 4.012-.002 1.319-.628 2.574-1.72 3.453-.544.442-.852 1.075-.847 1.737v59.677h-5.133zm64.166-62.55h-17.966c-1.418 0-2.567 1.038-2.567 2.317 0 1.28 1.149 2.317 2.567 2.317h15.066c-.569 1.987-1.853 3.749-3.65 5.006-1.798 1.259-4.008 1.943-6.283 1.944h-15.4c-1.417 0-2.566 1.037-2.566 2.316 0 1.28 1.149 2.317 2.566 2.317h12.5c-.569 1.988-1.853 3.749-3.651 5.006-1.797 1.26-4.008 1.943-6.282 1.944H85.199v-7.16c3.585-.546 6.841-2.22 9.19-4.726 2.348-2.506 3.64-5.681 3.643-8.964 0-2.457 1.082-4.814 3.007-6.553 1.926-1.737 4.537-2.714 7.26-2.714h40.732c-.57 1.988-1.853 3.75-3.651 5.007-1.798 1.259-4.008 1.942-6.282 1.943z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HealthsvgIcon;
/* prettier-ignore-end */