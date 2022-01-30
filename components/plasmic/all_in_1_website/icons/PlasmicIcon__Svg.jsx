// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 315 328"}
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
          "M309.427 163.574h-47.201V43.622a5.567 5.567 0 00-1.536-3.856 5.145 5.145 0 00-3.708-1.596h-18.808l6.78-7.05h.002a5.554 5.554 0 001.599-3.874 5.545 5.545 0 00-1.536-3.902 5.128 5.128 0 00-3.753-1.597 5.15 5.15 0 00-3.727 1.663l-15.734 16.357c-2.046 2.13-2.046 5.581 0 7.71l15.734 16.358c2.058 2.066 5.329 2.035 7.352-.068 2.023-2.103 2.053-5.504.065-7.643l-6.782-7.05h13.563v114.5H73.423c-2.896 0-5.244 2.442-5.244 5.453s2.348 5.452 5.244 5.452h199.292c.01 8.673 3.327 16.99 9.225 23.124 5.9 6.131 13.9 9.58 22.242 9.59v76.333c-8.342.01-16.342 3.459-22.242 9.591-5.898 6.134-9.215 14.451-9.225 23.123H41.956c-.01-8.672-3.327-16.99-9.225-23.123-5.9-6.132-13.9-9.581-22.242-9.591v-76.333c8.342-.01 16.343-3.459 22.242-9.59 5.898-6.134 9.216-14.451 9.225-23.124 2.896 0 5.245-2.441 5.245-5.452s-2.349-5.453-5.245-5.453H5.245c-2.897 0-5.245 2.442-5.245 5.453v152.666c0 1.445.553 2.833 1.536 3.855a5.148 5.148 0 003.709 1.597h304.182a5.145 5.145 0 003.709-1.597 5.565 5.565 0 001.535-3.855V169.027a5.566 5.566 0 00-1.535-3.856 5.15 5.15 0 00-3.709-1.597zM10.489 174.479h20.978c0 5.783-2.21 11.331-6.144 15.422-3.935 4.089-9.271 6.387-14.834 6.387v-21.809zm0 119.951c5.563 0 10.899 2.298 14.834 6.387 3.934 4.092 6.144 9.64 6.144 15.423H10.489v-21.81zm272.715-119.951h20.978v21.809c-5.563 0-10.899-2.298-14.834-6.387-3.934-4.092-6.144-9.639-6.144-15.422zm20.978 141.761h-20.978c0-5.783 2.21-11.331 6.144-15.423 3.935-4.089 9.271-6.387 14.834-6.387v21.81z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M213.961 245.359c0-15.906-6.078-31.161-16.897-42.409-10.819-11.248-25.492-17.567-40.793-17.567-15.301 0-29.973 6.32-40.792 17.567-10.82 11.248-16.897 26.502-16.897 42.409s6.078 31.162 16.897 42.41c10.819 11.248 25.491 17.566 40.792 17.566 15.296-.019 29.957-6.343 40.774-17.586 10.814-11.246 16.897-26.488 16.916-42.39zm-104.89 0c0-13.015 4.973-25.497 13.825-34.698 8.85-9.203 20.856-14.373 33.375-14.373 12.519 0 24.525 5.17 33.376 14.373 8.853 9.201 13.825 21.683 13.825 34.698s-4.973 25.497-13.825 34.698c-8.851 9.204-20.857 14.373-33.376 14.373-12.514-.014-24.511-5.189-33.361-14.388-8.848-9.201-13.825-21.672-13.839-34.683z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M151.024 201.74v11.182c-6.176.918-11.479 5.038-14.071 10.939-2.594 5.9-2.119 12.766 1.26 18.219 3.378 5.452 9.194 8.743 15.433 8.731h5.245c4.345 0 7.867 3.661 7.867 8.179 0 4.517-3.522 8.178-7.867 8.178h-5.245c-4.345 0-7.866-3.661-7.866-8.178v-1.363c0-3.011-2.349-5.453-5.245-5.453s-5.244 2.442-5.244 5.453v1.363c.011 4.576 1.608 8.996 4.497 12.448 2.889 3.454 6.879 5.71 11.236 6.358v11.182c0 3.011 2.349 5.452 5.245 5.452s5.244-2.441 5.244-5.452v-11.182c6.177-.918 11.479-5.039 14.072-10.939 2.594-5.901 2.119-12.767-1.26-18.219-3.378-5.453-9.194-8.743-15.434-8.732h-5.244c-4.346 0-7.867-3.66-7.867-8.178 0-4.518 3.521-8.179 7.867-8.179h5.244c4.346 0 7.867 3.661 7.867 8.179v1.363c0 3.011 2.348 5.452 5.244 5.452 2.897 0 5.245-2.441 5.245-5.452v-1.363c-.012-4.576-1.608-8.997-4.498-12.448-2.889-3.454-6.879-5.711-11.235-6.358V201.74c0-3.011-2.349-5.452-5.245-5.452s-5.245 2.441-5.245 5.452zM161.617.002h-10.7c-2.753.005-5.392 1.144-7.337 3.167-1.946 2.023-3.042 4.766-3.046 7.628l-.127 13.6a44.86 44.86 0 00-8.302 3.68l-9.293-9.656c-1.95-2.02-4.589-3.155-7.342-3.155-2.754 0-5.392 1.134-7.343 3.155l-7.562 7.872c-1.945 2.027-3.037 4.77-3.037 7.633 0 2.862 1.091 5.608 3.037 7.633l9.162 9.722a48.644 48.644 0 00-3.377 8.724H93.24c-2.752.002-5.388 1.137-7.336 3.155-1.948 2.017-3.048 4.756-3.06 7.614v11.124c.005 2.862 1.1 5.605 3.046 7.628 1.945 2.023 4.584 3.162 7.337 3.167l13.081.131a48.685 48.685 0 003.54 8.632l-9.288 9.661c-1.945 2.025-3.036 4.77-3.036 7.633 0 2.862 1.09 5.608 3.036 7.633l7.567 7.867c1.948 2.023 4.589 3.157 7.343 3.157 2.753 0 5.394-1.134 7.342-3.157l9.351-9.524a44.74 44.74 0 008.371 3.505v13.631c.002 2.865 1.095 5.61 3.041 7.636 1.948 2.027 4.589 3.166 7.342 3.171h10.7c2.754-.005 5.392-1.144 7.338-3.167 1.946-2.022 3.041-4.766 3.046-7.628l.126-13.599a45.086 45.086 0 008.307-3.68l9.288 9.656c1.95 2.02 4.589 3.154 7.342 3.154 2.754 0 5.392-1.134 7.343-3.154l7.567-7.867c1.945-2.026 3.036-4.771 3.036-7.634 0-2.862-1.091-5.608-3.036-7.633l-9.166-9.7a48.625 48.625 0 003.376-8.723h13.111c2.756-.003 5.397-1.14 7.345-3.162 1.95-2.025 3.046-4.771 3.05-7.633V70.773c-.004-2.862-1.1-5.605-3.046-7.628-1.945-2.023-4.584-3.162-7.337-3.167l-13.081-.131a48.599 48.599 0 00-3.54-8.632l9.288-9.66c1.946-2.026 3.037-4.771 3.037-7.634 0-2.862-1.091-5.608-3.037-7.633l-7.572-7.862c-1.95-2.023-4.589-3.157-7.342-3.157-2.754 0-5.395 1.134-7.343 3.157l-9.325 9.524a44.774 44.774 0 00-8.391-3.51V10.798c-.005-2.862-1.101-5.606-3.046-7.628-1.946-2.023-4.585-3.162-7.338-3.167zm13.92 37.621a10.146 10.146 0 006.445 1.181 10.361 10.361 0 005.863-3.023l9.14-9.651 7.567 7.716-9.278 9.651.002-.002a11.086 11.086 0 00-2.91 6.095 11.294 11.294 0 001.133 6.703 44.804 44.804 0 012.733 6.847 10.907 10.907 0 003.755 5.57 10.218 10.218 0 006.198 2.173l13.017-.11v11.015h-13.017a10.257 10.257 0 00-6.205 2.166 10.931 10.931 0 00-3.76 5.572 44.135 44.135 0 01-2.733 6.842 11.268 11.268 0 00-1.133 6.701 11.077 11.077 0 002.906 6.095l9.283 9.502-7.422 7.867-9.283-9.651.002.003a10.33 10.33 0 00-5.865-3.023 10.141 10.141 0 00-6.443 1.18 41.288 41.288 0 01-6.588 2.841 10.49 10.49 0 00-5.348 3.906 11.193 11.193 0 00-2.084 6.441l.106 13.534-10.595.109v-13.631a11.207 11.207 0 00-2.084-6.45 10.486 10.486 0 00-5.359-3.909 40.996 40.996 0 01-6.581-2.841 10.5 10.5 0 00-5.008-1.288c-2.739-.009-5.369 1.118-7.305 3.131l-9.136 9.651-7.567-7.717 9.278-9.651h-.002a11.07 11.07 0 002.91-6.095 11.278 11.278 0 00-1.133-6.7 44.702 44.702 0 01-2.732-6.848 10.908 10.908 0 00-3.756-5.566 10.232 10.232 0 00-6.197-2.172l-13.018.11-.105-11.014h13.111a10.252 10.252 0 006.205-2.167 10.906 10.906 0 003.76-5.571 44.428 44.428 0 012.732-6.842 11.276 11.276 0 001.135-6.701 11.054 11.054 0 00-2.907-6.095l-9.284-9.503 7.423-7.867 9.283 9.646v-.002a10.338 10.338 0 005.862 3.025 10.15 10.15 0 006.446-1.178 41.226 41.226 0 016.586-2.84 10.497 10.497 0 005.354-3.905 11.191 11.191 0 002.089-6.443l-.106-13.534 10.595-.11v13.632a11.21 11.21 0 002.084 6.45 10.491 10.491 0 005.359 3.91c2.266.75 4.47 1.696 6.581 2.835h.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M119.565 76.336c.012 10.118 3.884 19.819 10.765 26.975 6.884 7.153 16.214 11.179 25.947 11.192 2.896 0 5.244-2.442 5.244-5.453s-2.348-5.452-5.244-5.452c-6.954 0-13.624-2.872-18.544-7.984-4.916-5.114-7.679-12.048-7.679-19.278 0-7.23 2.763-14.164 7.679-19.278 4.919-5.112 11.59-7.984 18.544-7.984 6.954 0 13.623 2.873 18.543 7.984 4.917 5.114 7.679 12.049 7.679 19.278 0 3.011 2.349 5.453 5.245 5.453s5.244-2.442 5.244-5.453c0-13.636-6.998-26.235-18.356-33.052-11.357-6.818-25.354-6.818-36.711 0-11.358 6.817-18.356 19.416-18.356 33.052z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M178.124 91.403a26.78 26.78 0 01-7.342 7.633c-1.253.752-2.15 2.008-2.482 3.471a5.636 5.636 0 00.726 4.257c.798 1.254 2.055 2.11 3.481 2.366a5.085 5.085 0 004.044-1.01 37.335 37.335 0 0010.295-10.698c1.603-2.507.948-5.893-1.466-7.558-2.412-1.667-5.668-.986-7.272 1.524l.016.015zm126.527 30.147l-6.78 7.051V5.452a5.567 5.567 0 00-1.536-3.855A5.146 5.146 0 00292.627 0H187.736c-2.896 0-5.244 2.441-5.244 5.452s2.348 5.453 5.244 5.453h99.646V128.6l-6.78-7.049v-.002c-2.058-2.067-5.329-2.035-7.352.068-2.023 2.103-2.053 5.503-.066 7.643l15.734 16.357a5.108 5.108 0 007.417 0l15.734-16.357c1.988-2.14 1.957-5.54-.066-7.643-2.023-2.104-5.293-2.135-7.352-.068zM125.877.002H20.987c-2.897 0-5.245 2.442-5.245 5.453v123.148l-6.78-7.051c-2.058-2.067-5.329-2.035-7.352.068-2.023 2.103-2.053 5.503-.066 7.643l15.734 16.357a5.107 5.107 0 007.417 0l15.734-16.357c1.987-2.139 1.957-5.54-.066-7.643-2.023-2.103-5.294-2.135-7.352-.068l-6.78 7.051V10.907h99.646c2.896 0 5.245-2.441 5.245-5.452S128.773.002 125.877.002z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M69.717 63.836a5.108 5.108 0 007.417 0l15.734-16.357c2.046-2.13 2.046-5.581 0-7.711L77.134 23.41c-2.058-2.067-5.329-2.035-7.352.068-2.023 2.103-2.053 5.503-.065 7.643l6.782 7.049H57.691c-2.896 0-5.244 2.441-5.244 5.452v125.405c0 3.011 2.348 5.452 5.244 5.452s5.245-2.441 5.245-5.452V49.076h13.563l-6.78 7.048h-.002c-2.047 2.13-2.047 5.582 0 7.712zm195.619 186.976c2.897 0 5.245-2.442 5.245-5.453s-2.348-5.452-5.245-5.452h-36.711c-2.896 0-5.245 2.441-5.245 5.452s2.349 5.453 5.245 5.453h36.711zm-223.369-5.453c0 1.446.553 2.834 1.536 3.856a5.148 5.148 0 003.709 1.597h36.711c2.897 0 5.245-2.442 5.245-5.453s-2.349-5.452-5.245-5.452H47.212c-2.897 0-5.245 2.441-5.245 5.452z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SvgIcon;
/* prettier-ignore-end */