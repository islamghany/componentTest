import React from "react";

export function Atom(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      {...props}
    >
      <circle cx="12" cy="12" r="2" ></circle>
      <path
        d="M19.23 12c1.996-1.646 3.347-3.257 3.682-4.51.154-.578.106-1.083-.145-1.502-.879-1.467-3.866-1.167-7.286.025-.192-1.053-.436-2.028-.732-2.873a.985.985 0 00.248-.64 1 1 0 00-.99-.998C13.447.565 12.778 0 12 0c-1.682 0-2.859 2.602-3.481 6.013-3.42-1.191-6.408-1.492-7.286-.024-.25.419-.3.924-.145 1.502.335 1.252 1.686 2.863 3.683 4.509a19.357 19.357 0 00-2.139 2.025.978.978 0 00-.623.109.991.991 0 00-.405 1.25c-.243.397-.422.777-.516 1.126-.154.578-.106 1.083.145 1.502.414.69 1.294.99 2.468.99 1.319 0 3.008-.379 4.819-1.01C9.142 21.401 10.319 24 12 24c1.682 0 2.858-2.6 3.48-6.009.889.31 1.746.557 2.546.73a.99.99 0 00.966.779 1 1 0 00.867-.5c.005-.008.004-.018.009-.026.142.008.296.028.431.028 1.173 0 2.054-.3 2.468-.991.25-.419.3-.924.145-1.502-.335-1.252-1.686-2.863-3.683-4.509zm2.673-5.488c.103.173.115.413.034.715-.254.949-1.428 2.447-3.512 4.132a34.139 34.139 0 00-2.504-1.734c-.058-.89-.15-1.763-.272-2.604 3.438-1.218 5.803-1.26 6.254-.51zm-8.334 8.074a39.55 39.55 0 01-1.568.822 39.489 39.489 0 01-1.57-.823 38 38 0 01-1.386-.818A37.481 37.481 0 019 12c0-.614.019-1.198.045-1.768.447-.273.896-.545 1.386-.818.537-.299 1.06-.568 1.573-.825.51.255 1.032.53 1.565.826a38 38 0 011.386.818c.026.57.045 1.154.045 1.767 0 .614-.019 1.198-.045 1.768-.447.273-.896.545-1.386.818zm1.305.427c-.046.56-.102 1.103-.171 1.611a32.975 32.975 0 01-1.55-.665c.306-.159.612-.316.911-.482.275-.153.544-.308.81-.464zm-4.025.946a32.34 32.34 0 01-1.552.666 30.892 30.892 0 01-.172-1.613c.267.156.536.311.81.464.3.166.608.324.914.483zm-2.832-2.843A32.025 32.025 0 016.42 12c.492-.368 1.024-.74 1.598-1.116a36.664 36.664 0 000 2.232zm1.109-4.129c.046-.559.101-1.1.17-1.606.496.195 1.01.416 1.541.658a38.33 38.33 0 00-1.711.948zm4.032-.95c.53-.241 1.05-.466 1.545-.662.07.509.125 1.052.172 1.613a38.358 38.358 0 00-1.716-.95zm2.825 2.847A32.66 32.66 0 0117.581 12c-.492.368-1.024.74-1.598 1.116a36.664 36.664 0 000-2.232zM12 1c.36 0 .76.356 1.148 1.009A.971.971 0 0013 2.5c0 .482.35.867.805.96.282.794.537 1.762.738 2.898a35.39 35.39 0 00-2.544 1.1 35.447 35.447 0 00-2.542-1.1C10.06 2.954 11.145 1 12 1zM2.062 7.228c-.08-.302-.068-.542.035-.715.194-.323.74-.499 1.572-.499 1.104 0 2.725.325 4.68 1.016a33.337 33.337 0 00-.27 2.594c-.9.568-1.74 1.15-2.504 1.735C3.49 9.674 2.317 8.177 2.062 7.228zm.035 10.26c-.103-.173-.115-.413-.034-.715.06-.228.192-.497.36-.783.026.002.052.01.079.01.17 0 .341-.043.498-.134a.988.988 0 00.42-1.206 18.439 18.439 0 012.155-2.019 34.139 34.139 0 002.504 1.734c.058.89.15 1.763.272 2.604-3.438 1.218-5.804 1.26-6.254.51zM12 23c-.856 0-1.94-1.954-2.544-5.361a35.407 35.407 0 002.545-1.104c.85.407 1.702.778 2.543 1.103C13.94 21.046 12.856 23 12 23zm9.903-5.513c-.23.382-.964.554-2.074.475a.976.976 0 00-.329-.328.993.993 0 00-1.145.116 20.666 20.666 0 01-2.706-.771 32.8 32.8 0 00.271-2.603c.902-.568 1.74-1.15 2.505-1.735 2.084 1.685 3.258 3.182 3.512 4.131.081.302.07.542-.034.715z"
      ></path>
      <linearGradient
        id="a"
        x1="0.846"
        x2="23.154"
        y1="6.8"
        y2="17.202"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#FFF" stopOpacity="0.2"></stop>
        <stop offset="1" stopColor="#FFF" stopOpacity="0"></stop>
      </linearGradient>
      <path
        fill="url(#a)"
        d="M12 10c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm7.23 2c1.996-1.646 3.347-3.257 3.682-4.51.154-.578.106-1.083-.145-1.502-.879-1.467-3.866-1.167-7.286.025-.192-1.053-.436-2.028-.732-2.873a.985.985 0 00.248-.64 1 1 0 00-.99-.998C13.447.565 12.778 0 12 0c-1.682 0-2.859 2.602-3.481 6.013-3.42-1.191-6.408-1.492-7.286-.024-.25.419-.3.924-.145 1.502.335 1.252 1.686 2.863 3.683 4.509a19.364 19.364 0 00-2.139 2.025.978.978 0 00-.623.109.991.991 0 00-.405 1.25c-.243.397-.422.777-.516 1.126-.154.578-.106 1.083.145 1.502.414.69 1.294.99 2.468.99 1.319 0 3.008-.379 4.819-1.01C9.142 21.401 10.319 24 12 24c1.682 0 2.858-2.6 3.48-6.009.889.31 1.746.557 2.546.73a.99.99 0 00.966.779 1 1 0 00.867-.5c.005-.008.004-.018.009-.026.142.008.296.028.431.028 1.173 0 2.054-.3 2.468-.991.25-.419.3-.924.145-1.502-.335-1.252-1.686-2.863-3.683-4.509zM2.061 7.228c-.08-.302-.068-.542.035-.715.194-.323.74-.499 1.572-.499 1.104 0 2.725.325 4.68 1.016a33.337 33.337 0 00-.27 2.594c-.9.568-1.74 1.15-2.504 1.735C3.49 9.674 2.317 8.177 2.062 7.228zm5.955 5.888A32.025 32.025 0 016.42 12c.492-.368 1.024-.74 1.598-1.116a36.664 36.664 0 000 2.232zm-5.92 4.372c-.103-.173-.115-.413-.034-.715.06-.228.192-.497.36-.783.026.002.052.01.079.01.17 0 .341-.043.498-.134a.988.988 0 00.42-1.206 18.439 18.439 0 012.155-2.019 34.139 34.139 0 002.504 1.734c.058.89.15 1.763.272 2.604-3.438 1.218-5.804 1.26-6.254.51zm12.778-8.5a38.357 38.357 0 00-1.716-.95 32.61 32.61 0 011.544-.663c.07.509.125 1.052.172 1.613zM12 1c.36 0 .76.356 1.148 1.009A.971.971 0 0013 2.5c0 .482.35.867.805.96.282.794.537 1.762.738 2.898a35.39 35.39 0 00-2.544 1.1 35.447 35.447 0 00-2.542-1.1C10.06 2.954 11.145 1 12 1zM9.296 7.38c.496.196 1.01.417 1.541.66a38.33 38.33 0 00-1.711.947c.046-.559.101-1.1.17-1.606zm-.17 7.632c.266.156.535.311.81.464.3.166.607.324.913.483a32.34 32.34 0 01-1.552.666 30.892 30.892 0 01-.172-1.613zM12 23c-.856 0-1.94-1.954-2.544-5.361a35.407 35.407 0 002.545-1.104c.85.407 1.702.778 2.543 1.103C13.94 21.046 12.856 23 12 23zm2.703-6.376a32.975 32.975 0 01-1.55-.665c.306-.159.612-.316.911-.482.275-.153.544-.308.81-.464-.046.56-.102 1.103-.171 1.611zm.252-2.856c-.447.273-.896.545-1.386.818a39.55 39.55 0 01-1.568.822 39.489 39.489 0 01-1.57-.823 38 38 0 01-1.386-.818A37.481 37.481 0 019 12c0-.614.019-1.198.045-1.768.447-.273.896-.545 1.386-.818.537-.299 1.06-.568 1.573-.825.51.255 1.032.53 1.565.826a38 38 0 011.386.818c.026.57.045 1.154.045 1.767 0 .614-.019 1.198-.045 1.768zm6.948-7.256c.103.173.115.413.034.715-.254.949-1.428 2.447-3.512 4.132a34.139 34.139 0 00-2.504-1.734c-.058-.89-.15-1.763-.272-2.604 3.438-1.218 5.803-1.26 6.254-.51zm-5.92 4.372A32.66 32.66 0 0117.581 12c-.492.368-1.024.74-1.598 1.116a36.664 36.664 0 000-2.232zm5.92 6.603c-.23.382-.964.554-2.074.475a.976.976 0 00-.329-.328.993.993 0 00-1.145.116 20.666 20.666 0 01-2.706-.771 32.8 32.8 0 00.271-2.603c.902-.568 1.74-1.15 2.505-1.735 2.084 1.685 3.258 3.182 3.512 4.131.081.302.07.542-.034.715z"
      ></path>
    </svg>
  );
}
export function Arrow_up(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      enableBackground="new 0 0 64 64"
      version="1.1"
      {...props}   viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <style></style>
      <g id="Icon-Chevron-Left" transform="translate(237 335)">
        <path
          id="Fill-35"
          d="M-191.3 -296.9L-193.3 -294.9 -205 -306.6 -216.7 -294.9 -218.7 -296.9 -205 -310.6 -191.3 -296.9"
          className="st0"
        ></path>
      </g>
    </svg>
  );
}
export function Heart_4() {
  return (
    <svg
      width="24"
      height="24"
      fill="#ed4956"
      ariaLabel="Unlike"
      className="_8-yf5"
      viewBox="0 0 48 48"
    >
      <path
        fillRule="evenodd"
        d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function Mail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M.621 3l-.012.016H.527a.5.5 0 00-.5.5v.232L0 3.783l.027.022V12.5a.5.5 0 00.5.5h14.97a.5.5 0 00.501-.5V3.809L16 3.807l-.002-.002v-.29a.5.5 0 00-.502-.5H.641L.62 3zm1.281 1.016H14.13l-6.11 4.847-6.117-4.847zm-.877.582l6.686 5.297a.5.5 0 00.62 0l6.665-5.293V12H1.026V4.598z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
        style={{
          lineHeight: "normal",
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          WebkitTextDecorationLine: "none",
          textDecorationLine: "none",
          WebkitTextDecorationStyle: "solid",
          textDecorationStyle: "solid",
          WebkitTextDecorationColor: "#000",
          textDecorationColor: "#000",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
      ></path>
    </svg>
  );
}
  export function Password(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      version="1.1"
      viewBox="0 0 48 48"
      {...props}
    >
      <g transform="translate(0 -1004.362)">
        <g
          fill="#343433"
          fillOpacity="1"
          fillRule="nonzero"
          stroke="none"
          strokeDasharray="none"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.5"
          clipRule="nonzero"
          color="#000"
          colorInterpolation="sRGB"
          colorInterpolationFilters="linearRGB"
          colorRendering="auto"
          direction="ltr"
          fontFamily="sans-serif"
          fontSize="medium"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          imageRendering="auto"
          letterSpacing="normal"
          shapeRendering="auto"
          textAnchor="start"
          textRendering="auto"
          visibility="visible"
          wordSpacing="normal"
          writingMode="lr-tb"
        >
          <path
            d="M37.773 1050.861c1.836 0 3.338-1.5 3.338-3.336v-18.972a3.346 3.346 0 00-3.338-3.336H10.227a3.346 3.346 0 00-3.338 3.336v18.972a3.346 3.346 0 003.338 3.336h27.546zm0-1.5H10.227a1.817 1.817 0 01-1.838-1.836v-18.972c0-1.03.807-1.836 1.838-1.836h27.546c1.031 0 1.838.805 1.838 1.836v18.972c0 1.031-.807 1.836-1.838 1.836z"
            style={{
              lineHeight: "normal",
              WebkitTextIndent: "0",
              textIndent: "0",
              WebkitTextAlign: "start",
              textAlign: "start",
              WebkitTextDecorationLine: "none",
              textDecorationLine: "none",
              WebkitTextDecorationStyle: "solid",
              textDecorationStyle: "solid",
              WebkitTextDecorationColor: "#000000",
              textDecorationColor: "#000000",
              WebkitTextTransform: "none",
              textTransform: "none",
              blockProgression: "tb",
              whiteSpace: "normal",
              isolation: "auto",
              mixBlendMode: "normal",
              solidColor: "#000000",
              solidOpacity: "1"
            }}
            baselineShift="baseline"
            display="inline"
            enableBackground="accumulate"
            opacity="1"
            overflow="visible"
            textDecoration="none"
          ></path>
          <path
            d="M23.47 1005.861a.75.75 0 00-.26.053c-6.269.146-11.312 5.21-11.312 11.51v8.059a.75.75 0 101.5 0v-8.059a10.03 10.03 0 0110.073-10.062h1.058a10.03 10.03 0 0110.073 10.062v8.322a.75.75 0 101.5 0v-8.322c0-6.393-5.175-11.563-11.573-11.563h-1.058zm.165 2.928c-4.53 0-8.207 3.643-8.207 8.147v8.752a.75.75 0 101.5 0v-8.753c0-3.691 2.974-6.646 6.707-6.646h.73c3.733 0 6.707 2.955 6.707 6.647v8.79a.75.75 0 101.5 0v-8.79c0-4.504-3.676-8.147-8.207-8.147h-.73z"
            style={{
              lineHeight: "normal",
              WebkitTextIndent: "0",
              textIndent: "0",
              WebkitTextAlign: "start",
              textAlign: "start",
              WebkitTextDecorationLine: "none",
              textDecorationLine: "none",
              WebkitTextDecorationStyle: "solid",
              textDecorationStyle: "solid",
              WebkitTextDecorationColor: "#000000",
              textDecorationColor: "#000000",
              WebkitTextTransform: "none",
              textTransform: "none",
              blockProgression: "tb",
              whiteSpace: "normal",
              isolation: "auto",
              mixBlendMode: "normal",
              solidColor: "#000000",
              solidOpacity: "1"
            }}
            baselineShift="baseline"
            display="inline"
            enableBackground="accumulate"
            opacity="1"
            overflow="visible"
            textDecoration="none"
          ></path>
          <path
            d="M24 1031.725a3.584 3.584 0 00-3.572 3.572c0 1.11.593 2.074 1.453 2.744v4.193c0 1.161.957 2.122 2.119 2.122 1.162 0 2.12-.96 2.12-2.122v-4.195c.859-.67 1.451-1.633 1.452-2.742a3.584 3.584 0 00-3.572-3.572zm0 1.5c1.153 0 2.072.919 2.072 2.072a2.07 2.07 0 01-1.066 1.809.75.75 0 00-.387.656v4.472a.603.603 0 01-.619.622.603.603 0 01-.62-.622v-4.47a.75.75 0 00-.386-.657 2.07 2.07 0 01-1.066-1.81c0-1.154.919-2.072 2.072-2.072z"
            style={{
              lineHeight: "normal",
              WebkitTextIndent: "0",
              textIndent: "0",
              WebkitTextAlign: "start",
              textAlign: "start",
              WebkitTextDecorationLine: "none",
              textDecorationLine: "none",
              WebkitTextDecorationStyle: "solid",
              textDecorationStyle: "solid",
              WebkitTextDecorationColor: "#000000",
              textDecorationColor: "#000000",
              WebkitTextTransform: "none",
              textTransform: "none",
              blockProgression: "tb",
              whiteSpace: "normal",
              isolation: "auto",
              mixBlendMode: "normal",
              solidColor: "#000000",
              solidOpacity: "1"
            }}
            baselineShift="baseline"
            display="inline"
            enableBackground="accumulate"
            opacity="1"
            overflow="visible"
            textDecoration="none"
          ></path>
        </g>
      </g>
    </svg>
  );
}
export function Lock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        d="M7.973 1A2.977 2.977 0 005 3.973v2.054C3.794 6.942 3 8.374 3 10c0 2.756 2.244 5 5 5s5-2.244 5-5c0-1.625-.792-3.058-1.998-3.973V3.973A2.98 2.98 0 008.027 1h-.054zm0 1h.054C9.128 2 10 2.872 10 3.973v1.45A4.953 4.953 0 008 5c-.712 0-1.386.154-2 .424V3.973C6 2.872 6.872 2 7.973 2zM8 6c.244 0 .48.029.71.07.082.015.161.035.241.055.148.036.291.081.432.133.089.033.179.064.265.103.161.073.315.158.463.25.037.023.076.04.112.065a.5.5 0 00.029.017A3.99 3.99 0 0112 10c0 2.215-1.785 4-4 4s-4-1.785-4-4a3.99 3.99 0 011.738-3.299.5.5 0 00.041-.025c.055-.037.114-.062.17-.096.128-.077.256-.152.393-.215.093-.043.19-.076.287-.111.134-.05.271-.092.412-.127A3.984 3.984 0 018 6zm0 2c-.822 0-1.5.678-1.5 1.5 0 .411.169.79.44 1.06.155.156.348.273.56.348V13h1v-2.092c.213-.075.407-.192.563-.347A1.5 1.5 0 008 8zm0 1c.286 0 .5.214.5.5a.495.495 0 01-.5.5.495.495 0 01-.5-.5c0-.286.214-.5.5-.5z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
        style={{
          lineHeight: "normal",
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          WebkitTextDecorationLine: "none",
          textDecorationLine: "none",
          WebkitTextDecorationStyle: "solid",
          textDecorationStyle: "solid",
          WebkitTextDecorationColor: "#000",
          textDecorationColor: "#000",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
      ></path>
    </svg>
  );
}
export function Arrow_right(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 64 64"
      transform="rotate(90)"
      version="1.1"
      {...props}   viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <g transform="translate(237 335)">
        <path
          fill="#134563"
          d="M-191.3 -296.9L-193.3 -294.9 -205 -306.6 -216.7 -294.9 -218.7 -296.9 -205 -310.6 -191.3 -296.9"
          className="st0"
        ></path>
      </g>
    </svg>
  );
}
export function Arrow_down(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 64 64"
      transform="rotate(180)"
      version="1.1"
      {...props}   viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <g transform="translate(237 335)">
        <path
          fill="#134563"
          d="M-191.3 -296.9L-193.3 -294.9 -205 -306.6 -216.7 -294.9 -218.7 -296.9 -205 -310.6 -191.3 -296.9"
          className="st0"
        ></path>
      </g>
    </svg>
  );
}
export function Menu_3(props) {
  return (
    <svg {...props}   viewBox="0 0 24 24">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
}
export function Arrow_down2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(90)"
      {...props}   viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19.93 11.29a3.5 3.5 0 00-1-1.78L10 1a3.5 3.5 0 10-5 5l6.37 6L5 18a3.5 3.5 0 005 5l9-8.5a3.48 3.48 0 001-1.77 3.52 3.52 0 000-.73 3.62 3.62 0 00-.07-.71z"
      ></path>
    </svg>
  );
}
export function Arrow_up2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(270)"
      {...props}   viewBox="0 0 24 24"
    >
      <path
        fill="#303c42"
        d="M19.93 11.29a3.5 3.5 0 00-1-1.78L10 1a3.5 3.5 0 10-5 5l6.37 6L5 18a3.5 3.5 0 005 5l9-8.5a3.48 3.48 0 001-1.77 3.52 3.52 0 000-.73 3.62 3.62 0 00-.07-.71z"
      ></path>
    </svg>
  );
}

export function Arrow_left2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
      {...props}   viewBox="0 0 24 24"
    >
      <path
        fill="#303c42"
        d="M19.93 11.29a3.5 3.5 0 00-1-1.78L10 1a3.5 3.5 0 10-5 5l6.37 6L5 18a3.5 3.5 0 005 5l9-8.5a3.48 3.48 0 001-1.77 3.52 3.52 0 000-.73 3.62 3.62 0 00-.07-.71z"
      ></path>
    </svg>
  );
}
export function Arrow_left3(props){
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(90)"
      {...props}   viewBox="0 0 24 24"
    >
 <g>
        <g data-name="&lt;Group&gt;">
          <path
            fill="none"
            stroke="#303c42"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.38 9.62l8.5 9a3 3 0 004.24 0l8.5-9a3 3 0 10-4.24-4.24L12 12.13 5.62 5.38a3 3 0 10-4.24 4.24z"
            data-name="&lt;Path&gt;"
          ></path>
        </g>
      </g>
      </svg>
      );
}
export function Jewel(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0"
      y="0"
      enableBackground="new 0 0 24 24"
      version="1.1"
      {...props}   viewBox="0 0 24 24"
      xmlSpace="preserve"
    >
      <style></style>
      <g id="Diamond">
        <g
          id="_Group_"
          fill="none"
          stroke="#303C42"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            id="_Path_"
            d="M0.5 9.5L6.5 3.5 17.5 3.5 23.5 9.5 12 20.5z"
          ></path>
          <path id="_Path_2" d="M0.5 9.5L23.5 9.5"></path>
          <path id="_Path_3" d="M6.5 3.5L12 20.5 17.5 3.5"></path>
          <path id="_Path_4" d="M8.5 9.5L12 3.5 15.5 9.5"></path>
        </g>
      </g>
    </svg>
  );
}
export function Trash(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 24 24">
      <g fill="#303c42" data-name="Trash Can">
        <path d="M19 3h-3V2a2 2 0 00-2-2h-4a2 2 0 00-2 2v1H5a2 2 0 00-2 2v1.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5V5a2 2 0 00-2-2zm-9-1h4v1h-4zM19.5 8h-15a.5.5 0 00-.5.5V22a2 2 0 002 2h12a2 2 0 002-2V8.5a.5.5 0 00-.5-.5z"></path>
      </g>
    </svg>
  );
}
export function Close(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      {...props}   viewBox="0 0 24 24"
    >
      <path
        fill="#263238"
        d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"
        opacity="0.45"
      ></path>
    </svg>
  );
}
export function Search_2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      {...props}   viewBox="0 0 24 24"
    >
      <path
        fill="#263238"
        fillOpacity="0.5"
        d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
      ></path>
    </svg>
  );
}
export function User_5(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      {...props}   viewBox="0 0 32 32"
    >
      <path
        style={{
          lineHeight: "normal",
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          WebkitTextDecorationLine: "none",
          textDecorationLine: "none",
          WebkitTextDecorationStyle: "solid",
          textDecorationStyle: "solid",
          WebkitTextDecorationColor: "#000",
          textDecorationColor: "#000",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
        fillRule="evenodd"
        d="M15.48 4.434c-3.021 0-5.48 2.469-5.48 5.5 0 3.03 2.459 5.5 5.48 5.5 3.022 0 5.48-2.47 5.48-5.5.001-3.031-2.458-5.5-5.48-5.5zm0 1c2.48 0 4.481 2.007 4.48 4.5 0 2.492-2 4.5-4.48 4.5a4.483 4.483 0 01-4.48-4.5c0-2.493 2.001-4.5 4.48-4.5zm-2.98 11c-4.148 0-7.5 3.368-7.5 7.529v4.516a.5.5 0 00.5.5h3.854a.5.5 0 00.292 0h11.708a.5.5 0 00.292 0H25.5a.5.5 0 00.5-.5v-4.516c0-4.161-3.352-7.53-7.5-7.53h-6zm0 1h6c3.609 0 6.5 2.902 6.5 6.529v4.016h-3v-4.024a.5.5 0 00-.508-.506.5.5 0 00-.492.506v4.024H10v-4.024a.5.5 0 00-.508-.506.5.5 0 00-.492.506v4.024H6v-4.016c0-3.627 2.891-6.53 6.5-6.53z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
      ></path>
    </svg>
  );
}
export function Search(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="#303c42"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9.5" cy="9.5" r="9"></circle>
        <path d="M23.5 23.5L15.86 15.86"></path>
      </g>
    </svg>
  );
}
export function Menu_4(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="#303c42"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-name="Menu Horizontal"
      >
        <circle cx="12" cy="12" r="2.5"></circle>
        <circle cx="21" cy="12" r="2.5"></circle>
        <circle cx="3" cy="12" r="2.5"></circle>
      </g>
    </svg>
  );
}
export function Arrow_down3(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0)"
      {...props}   viewBox="0 0 24 24"
    >
      <g>
        <g data-name="&lt;Group&gt;">
          <path
            fill="none"
            stroke="#303c42"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.38 9.62l8.5 9a3 3 0 004.24 0l8.5-9a3 3 0 10-4.24-4.24L12 12.13 5.62 5.38a3 3 0 10-4.24 4.24z"
            data-name="&lt;Path&gt;"
          ></path>
        </g>
      </g>
    </svg>
  );
}
export function Arrow_right3(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(270)"
      {...props}   viewBox="0 0 24 24"
    >
       <g>
        <g data-name="&lt;Group&gt;">
          <path
            fill="none"
            stroke="#303c42"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.38 9.62l8.5 9a3 3 0 004.24 0l8.5-9a3 3 0 10-4.24-4.24L12 12.13 5.62 5.38a3 3 0 10-4.24 4.24z"
            data-name="&lt;Path&gt;"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export function Arrow_up3(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
      {...props}   viewBox="0 0 24 24"
    >
      <g>
        <g data-name="&lt;Group&gt;">
          <path
            fill="none"
            stroke="#303c42"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.38 9.62l8.5 9a3 3 0 004.24 0l8.5-9a3 3 0 10-4.24-4.24L12 12.13 5.62 5.38a3 3 0 10-4.24 4.24z"
            data-name="&lt;Path&gt;"
          ></path>
        </g>
      </g>
    </svg>
  );
}



export function Arrow_right2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 24 24">
      <path
        fill="#303c42"
        d="M19.93 11.29a3.5 3.5 0 00-1-1.78L10 1a3.5 3.5 0 10-5 5l6.37 6L5 18a3.5 3.5 0 005 5l9-8.5a3.48 3.48 0 001-1.77 3.52 3.52 0 000-.73 3.62 3.62 0 00-.07-.71z"
      ></path>
    </svg>
  );
}
export function Phone(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 24 24">
      <path
        fill="#303c42"
        d="M19.56 14.81a10.22 10.22 0 01-3.21-.51 1.47 1.47 0 00-1.43.3l-2 1.53a11.18 11.18 0 01-5-5l1.48-2a1.46 1.46 0 00.36-1.47 10.23 10.23 0 01-.51-3.21A1.45 1.45 0 007.75 3H4.44A1.45 1.45 0 003 4.44 16.57 16.57 0 0019.56 21 1.45 1.45 0 0021 19.56v-3.3a1.45 1.45 0 00-1.44-1.45z"
      ></path>
    </svg>
  );
}
export function User_4(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="#303c42"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-name="&lt;Group&gt;"
      >
        <circle cx="12" cy="7" r="5.5" data-name="&lt;Path&gt;"></circle>
        <path
          d="M12 14.5a18.74 18.74 0 00-8.31 2.2 4 4 0 00-2.19 3.57V21A1.5 1.5 0 003 22.5h18a1.5 1.5 0 001.5-1.5v-.73a4 4 0 00-2.19-3.57A18.74 18.74 0 0012 14.5z"
          data-name="&lt;Path&gt;"
        ></path>
      </g>
    </svg>
  );
}
export function Upload(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 21 19">
      <path d="M7.295 6.62a.798.798 0 00.56-.238L9.78 4.498v8.305a.803.803 0 101.606 0V4.506l1.864 1.865a.804.804 0 00.576.248.788.788 0 00.55-.23.75.75 0 00.25-.577.796.796 0 00-.24-.56l-3.253-3.253a.81.81 0 00-.575-.25.798.798 0 00-.562.24L6.74 5.242a.744.744 0 00-.249.574.789.789 0 00.23.554.758.758 0 00.575.248z"></path>
      <path d="M17.528 8.746a.804.804 0 00-.803.803v5.25H4.339v-5.25a.803.803 0 00-1.606 0v6.085a.807.807 0 00.803.802h14.02a.783.783 0 00.775-.802V9.549a.804.804 0 00-.803-.803z"></path>
    </svg>
  );
}
export function Share_3(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 15.034 15.949">
      <path
        d="M12.175 10.242a2.861 2.861 0 00-2.259 1.113L5.537 8.91a2.861 2.861 0 000-1.883l4.374-2.442a2.865 2.865 0 10-.426-.79L5.111 6.236A2.848 2.848 0 105.119 9.7L9.5 12.146a2.806 2.806 0 00-.166.952 2.851 2.851 0 102.843-2.855zm0-9.344a1.957 1.957 0 11-1.953 1.957A1.959 1.959 0 0112.175.9zm-9.32 9.025a1.957 1.957 0 111.958-1.957 1.959 1.959 0 01-1.958 1.957zm9.319 5.123a1.957 1.957 0 111.957-1.957 1.959 1.959 0 01-1.957 1.957zm0 0"
        data-name="Path 19760"
      ></path>
    </svg>
  );
}
export function Logout(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 13.684 14.591">
      <g data-name="Group 9077">
        <path
          d="M10.003 10.99a.484.484 0 01-.373-.16.527.527 0 01-.16-.373.484.484 0 01.16-.373l2.214-2.214h-8.59a.533.533 0 010-1.067h8.589L9.629 4.536a.527.527 0 01-.16-.373.484.484 0 01.16-.373.527.527 0 01.373-.16.484.484 0 01.373.16l3.146 3.146a.527.527 0 01.16.373.484.484 0 01-.16.373l-3.145 3.146a.527.527 0 01-.373.162z"
          data-name="Path 19750"
        ></path>
        <path
          d="M.533 14.591A.535.535 0 010 14.057V.533A.535.535 0 01.533 0H6.4a.533.533 0 010 1.067H1.094V13.5H6.4a.533.533 0 010 1.067H.533z"
          data-name="Path 19751"
        ></path>
      </g>
    </svg>
  );
}
export function Gift(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 20.271 21.398">
      <path d="M18.71 4.948h-3.596c.037-.026.078-.05.113-.077a3.24 3.24 0 001.371-2.505 2.321 2.321 0 00-2.271-2.37c-.072 0-.142 0-.16.004-1.858 0-2.84 1.597-3.559 2.765-.12.198-.248.44-.377.687l-.11.21-.032-.07a8.733 8.733 0 00-.426-.828c-.673-1.1-1.69-2.762-3.5-2.762h-.002a2.328 2.328 0 00-2.483 2.15 2.356 2.356 0 00-.005.234 3.222 3.222 0 001.35 2.469c.042.032.092.062.137.093H1.562A1.55 1.55 0 00.027 6.51v2.137a1.55 1.55 0 001.535 1.562h.565v9.505a1.732 1.732 0 001.716 1.744h12.585a1.732 1.732 0 001.716-1.744v-9.505h.565a1.55 1.55 0 001.535-1.562V6.51a1.55 1.55 0 00-1.535-1.562zm-7.149-.802c.112-.215.222-.426.326-.598.714-1.16 1.335-2.048 2.28-2.048l.128-.003a.817.817 0 01.576.252.807.807 0 01.228.566 1.74 1.74 0 01-.755 1.343 2.996 2.996 0 01-.42.266 11.763 11.763 0 01-2.544.565c.06-.11.12-.225.181-.343zM6.036 1.498c.024 0 .047 0 .07.002.95 0 1.568.887 2.28 2.05a7.352 7.352 0 01.346.681l.124.261a11.228 11.228 0 01-2.465-.546 3.122 3.122 0 01-.487-.304 1.737 1.737 0 01-.73-1.384.832.832 0 01.862-.76zM16.67 19.714a.243.243 0 01-.24.244H3.842a.243.243 0 01-.241-.244v-9.505h13.067zM1.562 8.709v-2.26L18.7 6.51l.01 2.199z"></path>
    </svg>
  );
}
export function Settings(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 15.646 15.686">
      <path
        d="M15.411 6.66a.027.027 0 01-.028-.028l-1.9-.55a5.97 5.97 0 00-.413-.963l.963-1.734a.085.085 0 01.028-.055.481.481 0 00-.083-.468l-1.154-1.156a.415.415 0 00-.468-.083c-.028 0-.028 0-.055.028l-1.734.963A7.243 7.243 0 009.6 2.2L9.054.3V.275A.414.414 0 008.669 0H7.017a.414.414 0 00-.385.275A.027.027 0 016.6.3l-.55 1.926a4.28 4.28 0 00-.908.385l-1.757-.96a.027.027 0 01-.028-.028.469.469 0 00-.468.083l-1.21 1.211a.415.415 0 00-.083.468c0 .028 0 .028.028.055l.963 1.76a7.925 7.925 0 00-.358.853L.33 6.6c-.03 0-.03 0-.055.032A.414.414 0 000 7.018v1.706a.414.414 0 00.275.385.1.1 0 00.055.028l1.9.55a5.628 5.628 0 00.358.853l-.964 1.76a.027.027 0 01-.028.028.469.469 0 00.083.468l1.211 1.212a.415.415 0 00.468.083.027.027 0 00.028-.028l1.733-.963a7.109 7.109 0 00.853.358l.55 1.9c0 .028 0 .028.028.055a.414.414 0 00.385.275h1.706a.414.414 0 00.385-.275.1.1 0 00.028-.055l.55-1.9a6.41 6.41 0 00.908-.385l1.734.963a.085.085 0 01.055.028.349.349 0 00.165.028.577.577 0 00.3-.11l1.156-1.156a.415.415 0 00.083-.468c0-.028 0-.028-.028-.055l-.963-1.734a5.97 5.97 0 00.416-.969l1.9-.55h.028a.414.414 0 00.275-.385V7.018a.286.286 0 00-.22-.358m-.578 1.706l-1.954.55a.215.215 0 00-.11.11 5.82 5.82 0 01-.605 1.486.123.123 0 000 .138l.991 1.789-.716.716-1.789-.991a.123.123 0 00-.138 0 4.972 4.972 0 01-1.431.605.215.215 0 00-.11.11l-.578 1.981H7.348l-.578-1.981a.215.215 0 00-.11-.11 4.455 4.455 0 01-1.4-.578.123.123 0 00-.138 0l-1.822.991-.743-.743.991-1.816a.123.123 0 000-.138 4.455 4.455 0 01-.578-1.4.215.215 0 00-.11-.11L.881 8.394V7.348l1.981-.578a.215.215 0 00.11-.11 4.455 4.455 0 01.578-1.4.123.123 0 000-.138L2.559 3.3l.741-.741 1.816.991a.123.123 0 00.138 0 5.459 5.459 0 011.431-.605.215.215 0 00.11-.11L7.348.881h1.018l.55 1.954a.215.215 0 00.11.11 4.974 4.974 0 011.486.605.123.123 0 00.138 0l1.789-.991.716.716-.991 1.789a.123.123 0 000 .138 4.449 4.449 0 01.605 1.486.215.215 0 00.11.11l1.954.55z"
        data-name="Path 19748"
      ></path>
      <path
        d="M7.844 4.981a2.89 2.89 0 102.89 2.89 2.889 2.889 0 00-2.89-2.89m0 4.926A2.036 2.036 0 119.88 7.871a2.032 2.032 0 01-2.036 2.036"
        data-name="Path 19749"
      ></path>
    </svg>
  );
}
export function Heart_2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 17.498 17.498">
      <path d="M12.169 1.26a5.182 5.182 0 00-3.36 1.19 5.343 5.343 0 00-7.069.28A5.244 5.244 0 00.2 6.44c0 4.27 3.85 6.929 6.369 8.749a10.815 10.815 0 011.68 1.33l.56.56.49-.56a16.435 16.435 0 011.75-1.33c2.52-1.82 6.369-4.48 6.369-8.749a5.228 5.228 0 00-5.249-5.18z"></path>
    </svg>
  );
}
export function Heart_3(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 17 15.67">
      <path
        d="M8.5 15.67l-.517-.517a34.053 34.053 0 00-1.7-1.33C3.77 12.048 0 9.387 0 5.174A5.189 5.189 0 015.174 0 5.033 5.033 0 018.5 1.257 5.033 5.033 0 0111.826 0 5.189 5.189 0 0117 5.174c0 4.213-3.77 6.874-6.283 8.648-.591.443-1.183.887-1.7 1.33zM5.174.961A4.211 4.211 0 00.961 5.174c0 3.7 3.548 6.209 5.913 7.909.591.37 1.109.813 1.7 1.257a14.429 14.429 0 011.7-1.257c2.365-1.626 5.839-4.139 5.839-7.835A4.259 4.259 0 0011.9 1.035a4.313 4.313 0 00-3.03 1.257l-.37.3-.3-.37A4.313 4.313 0 005.174.961z"
        data-name="Path 19592"
      ></path>
    </svg>
  );
}
export function Add(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      data-supported-dps="24x24"
    >
      <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8v2z"></path>
    </svg>
  );
}

export function Message(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="nav-icon"
      preserveAspectRatio="xMinYMin meet"
      {...props}   viewBox="0 0 24 24"
    >
      <path
        d="M21 9H8a1 1 0 00-1 1v10a1 1 0 001 1h10l4 3V10a1 1 0 00-1-1zm-4 8h-5v-1h5v1zm1-3h-7v-1h7v1zm-1-9v2H6a1 1 0 00-1 1v8H3a1 1 0 01-1-1V5a1 1 0 011-1h13a1 1 0 011 1z"
        className="active-item"
      ></path>
      <path
        fill="currentColor"
        d="M21 8H8a1 1 0 00-1 1v10a1 1 0 001 1h10l4 3V9a1 1 0 00-1-1zm-1 11.11L18.52 18H9v-8h11v9.11zM12 15h5v1h-5v-1zm-8-2h1v2H3a1 1 0 01-1-1V4a1 1 0 011-1h13a1 1 0 011 1v2h-2V5H4v8zm14 0h-7v-1h7v1z"
        className="inactive-item"
      ></path>
    </svg>
  );
}
export function Bell_3(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="nav-icon"
      preserveAspectRatio="xMinYMin meet"
      {...props}   viewBox="0 0 24 24"
      fill="#fff"
    >
      <path
       fill="#fff"
        d="M18.94 14H5.06l.73-5.56A6.26 6.26 0 0112 3a6.26 6.26 0 016.21 5.44zm2 5l-1.71-4H4.78l-1.72 4a.71.71 0 00-.06.28.75.75 0 00.75.76H10a2 2 0 104 0h6.27a.74.74 0 00.67-1.04z"
        className="active-item"
      ></path>
      <path
        fill="#333"
        d="M20.94 19L19 14.49s-.41-3.06-.8-6.06A6.26 6.26 0 0012 3a6.26 6.26 0 00-6.21 5.44L5 14.49 3.06 19a.71.71 0 00-.06.28.75.75 0 00.75.76H10a2 2 0 104 0h6.27a.74.74 0 00.67-1.04zM12 4.75a4.39 4.39 0 014.35 3.81c.28 2.1.56 4.35.7 5.44H7l.65-5.44A4.39 4.39 0 0112 4.75zM5.52 18l1.3-3h10.36l1.3 3h-13z"
        className="inactive-item"
      ></path>
    </svg>
  );
}
export function Like_2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      data-supported-dps="24x24"
    >
      <path d="M17.51 11l-2.15-3a14.81 14.81 0 01-2.25-5.29L12.74 1H10.5A2.5 2.5 0 008 3.5v.58a9 9 0 00.32 2.39L9 9H4.66A2.61 2.61 0 002 11.4a2.48 2.48 0 00.39 1.43 2.48 2.48 0 00.69 3.39 2.46 2.46 0 001.45 2.92 2.47 2.47 0 000 .36A2.5 2.5 0 007 22h4.52a8 8 0 001.94-.24l3-.76H21V11h-3.49zM19 19h-2.12l-3.41.82A6 6 0 0112 20H7a.9.9 0 01-.9-.89v-.14l.15-1-1-.4a.9.9 0 01-.55-.83.93.93 0 010-.22l.3-.95-.73-.57a.9.9 0 01-.39-.74.88.88 0 01.12-.44l.46-.72-.46-.72a.88.88 0 01-.14-.51 1 1 0 011-.87h6.64l-1.3-4.7a9 9 0 01-.33-2.37v-.55a.5.5 0 01.5-.5h.95a17.82 17.82 0 002.52 6.22L16.6 13H19v6z"></path>
    </svg>
  );
}
export function Comment_2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      data-supported-dps="24x24"
    >
      <path d="M18 10H6V9h12v1zm4-5v17l-5-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1zm-2 1H4v10h13.7l2.3 1.84V6zm-4 6H8v1h8v-1z"></path>
    </svg>
  );
}
export function Share_2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      data-supported-dps="24x24"
    >
      <path d="M24 12a1.18 1.18 0 00-.36-.84L14 2v6h-3A10 10 0 001 18v4h1.87A6.11 6.11 0 019 16h5v6l9.63-9.14A1.18 1.18 0 0024 12zm-8 5.54V14H9a8.15 8.15 0 00-6 2.84A8 8 0 0111 10h5V6.48L21.81 12z"></path>
    </svg>
  );
}
export function Arrow_left(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 64 64"
      transform="rotate(270)"
      version="1.1"
      {...props}   viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <g transform="translate(237 335)">
        <path
          fill="#134563"
          d="M-191.3 -296.9L-193.3 -294.9 -205 -306.6 -216.7 -294.9 -218.7 -296.9 -205 -310.6 -191.3 -296.9"
          className="st0"
        ></path>
      </g>
    </svg>
  );
}

export function Bag(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      {...props}   viewBox="0 0 32 32"
    >
      <path
        fill="#2b4255"
        style={{
          lineHeight: "normal",
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          WebkitTextDecorationLine: "none",
          textDecorationLine: "none",
          WebkitTextDecorationStyle: "solid",
          textDecorationStyle: "solid",
          WebkitTextDecorationColor: "#000",
          textDecorationColor: "#000",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
        d="M15 1022.361c-2.757 0-4.996 2.222-4.996 4.967v5.524a.5.5 0 101 0v-5.524c0-2.205 1.772-3.967 3.996-3.967s3.996 1.762 3.996 3.967v5.524a.5.5 0 101 0v-5.524c0-2.745-2.239-4.967-4.996-4.967z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#e42c34"
        d="M9 1029.362h16c.554 0 1 .446 1 1v20c0 .554-.446 1-1 1H9c-.554 0-1-.446-1-1v-20c0-.554.446-1 1-1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#fcd062"
        d="M8.056 1029.362h16.888c.585 0 1.056.446 1.056 1v20c0 .554-.47 1-1.056 1H8.056c-.585 0-1.056-.446-1.056-1v-20c0-.554.47-1 1.056-1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#e6e6e6"
        d="M13.5 1032.862a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1zm9 0a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#2b4255"
        style={{
          lineHeight: "normal",
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          WebkitTextDecorationLine: "none",
          textDecorationLine: "none",
          WebkitTextDecorationStyle: "solid",
          textDecorationStyle: "solid",
          WebkitTextDecorationColor: "#000",
          textDecorationColor: "#000",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
        d="M17 1022.365c-2.757 0-4.996 2.222-4.996 4.967v5.523a.5.5 0 101 0v-5.523c0-2.205 1.772-3.967 3.996-3.967s3.996 1.762 3.996 3.967v5.523a.5.5 0 101 0v-5.523c0-2.745-2.239-4.967-4.996-4.967z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#f8b84e"
        d="M6 1029.362c-.554 0-1 .446-1 1v20c0 .554.446 1 1 1h3c-.554 0-1-.446-1-1v-20c0-.554.446-1 1-1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#f17f53"
        d="M6 1029.362c-.554 0-1 .446-1 1v.01a1.5 1.233 0 00.75 1.06 1.5 1.233 0 001.5 0 1.5 1.233 0 00.75-1.06 1.5 1.233 0 000-.01c0-.554.446-1 1-1H6z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#576d7e"
        style={{ isolation: "auto", mixBlendMode: "normal" }}
        d="M17.1 1040.637a.7.7 0 00-.7.702v2.808h-.787c-.34 0-.613.313-.613.702v.064c0 .01.002.01.002.01a3.5 3.51 0 001.748 2.969 3.5 3.51 0 003.5 0 3.5 3.51 0 001.75-3.033v-.71c0-.388-.273-.701-.612-.701H17.8v-2.106a.7.7 0 00-.7-.703z"
        color="#000"
        overflow="visible"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#2b4255"
        fillRule="evenodd"
        style={{
          lineHeight: "normal",
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          WebkitTextDecorationLine: "none",
          textDecorationLine: "none",
          WebkitTextDecorationStyle: "solid",
          textDecorationStyle: "solid",
          WebkitTextDecorationColor: "#000",
          textDecorationColor: "#000",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
        d="M17 1036.861v2h1v-2h-1zm3.414 1.44L19 1039.715l.707.709 1.414-1.416-.707-.707zm-5.828-.06l-.707.706 1.414 1.414.707-.707-1.414-1.414zM13 1041.86v1h2v-1h-2z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
        transform="translate(0 -1020.362)"
      ></path>
    </svg>
  );
}
export function Bag_2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      {...props}   viewBox="0 0 32 32"
    >
      <path
        fill="#2b4255"
        style={{
          lineHeight: "normal",
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          WebkitTextDecorationLine: "none",
          textDecorationLine: "none",
          WebkitTextDecorationStyle: "solid",
          textDecorationStyle: "solid",
          WebkitTextDecorationColor: "#000",
          textDecorationColor: "#000",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
        d="M11 1022.361c-2.757 0-4.996 2.222-4.996 4.967v5.524a.5.5 0 101 0v-5.524c0-2.205 1.772-3.967 3.996-3.967s3.996 1.762 3.996 3.967v5.524a.5.5 0 101 0v-5.524c0-2.745-2.239-4.967-4.996-4.967z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#e42c34"
        d="M5 1029.362h16c.554 0 1 .446 1 1v20c0 .554-.446 1-1 1H5c-.554 0-1-.446-1-1v-20c0-.554.446-1 1-1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#fcd062"
        d="M4.056 1029.362h16.888c.585 0 1.056.446 1.056 1v20c0 .554-.47 1-1.056 1H4.056c-.585 0-1.056-.446-1.056-1v-20c0-.554.47-1 1.056-1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#e6e6e6"
        d="M9.5 1032.862a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1zm9 0a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#2b4255"
        style={{
          lineHeight: "normal",
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          WebkitTextDecorationLine: "none",
          textDecorationLine: "none",
          WebkitTextDecorationStyle: "solid",
          textDecorationStyle: "solid",
          WebkitTextDecorationColor: "#000",
          textDecorationColor: "#000",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
        d="M13 1022.363c-2.757 0-4.996 2.224-4.996 4.969v5.523a.5.5 0 101 0v-5.523c0-2.205 1.772-3.969 3.996-3.969s3.996 1.764 3.996 3.969v5.523a.5.5 0 101 0v-5.523c0-2.745-2.239-4.969-4.996-4.969z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#f8b84e"
        d="M2 1029.362c-.554 0-1 .446-1 1v20c0 .554.446 1 1 1h3c-.554 0-1-.446-1-1v-20c0-.554.446-1 1-1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#f17f53"
        d="M2 1029.362c-.554 0-1 .446-1 1v.01a1.5 1.233 0 00.75 1.06 1.5 1.233 0 001.5 0 1.5 1.233 0 00.75-1.06 1.5 1.233 0 000-.01c0-.554.446-1 1-1H2z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#60c5b8"
        d="M13.5 1037.362h16c.554 0 1 .446 1 1v12c0 .554-.446 1-1 1h-16c-.554 0-1-.446-1-1v-12c0-.554.446-1 1-1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#e6e6e6"
        d="M18 1039.862a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1zm9 0a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#2b4255"
        style={{
          lineHeight: "normal",
          WebkitTextIndent: "0",
          textIndent: "0",
          WebkitTextAlign: "start",
          textAlign: "start",
          WebkitTextDecorationLine: "none",
          textDecorationLine: "none",
          WebkitTextDecorationStyle: "solid",
          textDecorationStyle: "solid",
          WebkitTextDecorationColor: "#000",
          textDecorationColor: "#000",
          WebkitTextTransform: "none",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
        d="M16.996 1039.361a.5.5 0 00-.492.508v3.524c0 2.745 2.239 4.966 4.996 4.966 2.757 0 4.996-2.221 4.996-4.966v-3.524a.5.5 0 10-1 0v3.524c0 2.205-1.772 3.966-3.996 3.966s-3.996-1.761-3.996-3.966v-3.524a.5.5 0 00-.508-.508z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight="400"
        overflow="visible"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#25b39e"
        d="M10.5 1037.362c-.554 0-1 .446-1 1v12c0 .554.446 1 1 1h3c-.554 0-1-.446-1-1v-12c0-.554.446-1 1-1h-3z"
        transform="translate(0 -1020.362)"
      ></path>
      <path
        fill="#576d7e"
        d="M10.5 1037.362c-.554 0-1 .446-1 1v.01a1.5 1.233 0 00.75 1.06 1.5 1.233 0 001.5 0 1.5 1.233 0 00.75-1.06 1.5 1.233 0 000-.01c0-.554.446-1 1-1h-3z"
        transform="translate(0 -1020.362)"
      ></path>
    </svg>
  );
}

export function Backspace(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      {...props}   viewBox="0 0 24 24"
      xmlSpace="preserve"
    >
      <g
        fill="none"
        stroke="#303C42"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      >
        <path d="M.5 12l7-7.5h16v15h-16zM11.5 8.5l7 7M11.5 15.5l7-7"></path>
      </g>
    </svg>
  );
}

export function Bell(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 21.9 21.7" >
      <path d="M5 14.6l-3.9-3C.2 11.1-.2 9.9.2 9c.1-.2.3-.4.4-.5 2.1-1.5 4-3.3 5.5-5.3 2.4-3 6.5-4 10.1-2.5.3.2.7.1 1-.1 1.1-.7 2.5-.6 3.4.4.9.9 1 2.3.4 3.3-.1.2-.1.4 0 .6 1.6 3.2 1.2 7-1 9.7-1.5 1.8-2.6 3.8-3.4 6-.3.9-1.2 1.4-2.1 1.1-.2-.1-.3-.1-.5-.2m-3.3-2c-.1.1-.2.2-.3.4l-.2.2c-.6.5-1.2.8-1.2.8-.8.3-1.5.3-1.6.3-.2 0-.7 0-1.3-.2-.5-.2-.9-.4-1.1-.6-.2-.1-.7-.5-1.1-1.2-.5-.8-.5-1.5-.6-1.7 0-.1-.1-1.6.8-2.8 0-.1.1-.1.1-.2 2.2 1.6 4.3 3.3 6.5 5z"></path>
    </svg>
  );
}
export function Bell_2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 30 30">
      <path height='2.5rem' width='2.5rem'
        d="M17 27h-4a1 1 0 010-2h4a1 1 0 010 2zm10-4.77a1 1 0 01-1 .77H4a1 1 0 01-.45-1.89A2.61 2.61 0 005 18.76V13a10 10 0 0120 0v5.76a2.61 2.61 0 001.45 2.35 1 1 0 01.55 1.12z"
      ></path>
    </svg>
  );
}

export function Menu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 24 24" >
      <g data-name="Layer 2">
        <g data-name="menu">
          <rect width="18" height="2" x="3" y="11" rx="0.95" ry="0.95"></rect>
          <rect width="18" height="2" x="3" y="16" rx="0.95" ry="0.95"></rect>
          <rect width="18" height="2" x="3" y="6" rx="0.95" ry="0.95"></rect>
        </g>
      </g>
    </svg>
  );
}
export function Minus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      {...props}   viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M501.333 245.333H10.667C4.776 245.333 0 250.109 0 256s4.776 10.667 10.667 10.667h490.667c5.891 0 10.667-4.776 10.667-10.667-.001-5.891-4.777-10.667-10.668-10.667z"></path>
    </svg>
  );
}

export function User_3(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 30 30">
      <circle cx="15" cy="9" r="5" fill="#464646"></circle>
      <path
        fill="#464646"
        d="M25 22v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2a6 6 0 016-6h8a6 6 0 016 6z"
      ></path>
    </svg>
  );
}

export function User_2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      {...props}   viewBox="0 0 32 32"
    >
      <g transform="translate(0 -1020.362)">
        <path
          fillRule="evenodd"
          d="M6 1048.346v-4.687c0-4.042 3.122-7.297 7-7.297h6c3.879 0 7 3.255 7 7.297v4.687z"
          color="#000"
          overflow="visible"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        ></path>
        <ellipse
          cx="15.981"
          cy="1029.802"
          fillRule="evenodd"
          color="#000"
          overflow="visible"
          rx="4.98"
          ry="5"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        ></ellipse>
        <path
          fill="none"
          strokeLinejoin="round"
          d="M10 1043.824v4.538m12-4.538v4.538"
        ></path>
      </g>
    </svg>
  );
}
export  function Like(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      {...props}   viewBox="0 0 32 32"
    >
      <g transform="translate(0 -1020.362)">
        <rect
          width="9"
          height="8"
          x="14.5"
          y="1034.864"
          fill="#fcd062"
          rx="1.51"
          ry="1.714"
        ></rect>
        <path
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          fill="#fcd062"
          stroke="#f8b84e"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24.39 1046.06H13.424c-.116 0-.23-.023-.339-.036a1.696 1.696 0 01-1.207-1.01l-.131-.255h-4.8v-9.982h5.231"
          color="#000"
          overflow="visible"
        ></path>
        <path
          fill="#fcd062"
          fillRule="evenodd"
          stroke="#f8b84e"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.178 1039.117H16.924c1.63 0 3.121-1.205 3.854-3.114.732-1.91.58-4.197-.392-5.912l-.013-.07v-2.545c0-1.725-1.497-3.115-3.357-3.115h-.094v3.472-.088c0 2.257-4.745 4.86-4.745 7.464"
        ></path>
        <rect
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          width="7.764"
          height="3.428"
          x="21.236"
          y="1032.173"
          fill="#fcd062"
          stroke="#f8b84e"
          strokeLinejoin="round"
          color="#000"
          overflow="visible"
          rx="1.704"
          ry="1.714"
        ></rect>
        <rect
          strokeLinejoin="round"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          width="8.627"
          height="3.428"
          x="20.373"
          y="1035.645"
          fill="#fcd062"
          stroke="#f8b84e"
          color="#000"
          overflow="visible"
          rx="1.677"
          ry="1.714"
        ></rect>
        <rect
          width="7.764"
          height="3.428"
          x="-28.137"
          y="1039.16"
          fill="#fcd062"
          stroke="#f8b84e"
          strokeLinejoin="round"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          color="#000"
          overflow="visible"
          rx="1.51"
          ry="1.714"
          transform="scale(-1 1)"
        ></rect>
        <rect
          strokeLinejoin="round"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          width="6.901"
          height="3.428"
          x="-27.275"
          y="1042.632"
          fill="#fcd062"
          stroke="#f8b84e"
          color="#000"
          overflow="visible"
          rx="1.342"
          ry="1.714"
          transform="scale(-1 1)"
        ></rect>
        <rect
          width="6.524"
          height="17"
          x="2"
          y="1030.362"
          fill="#0c5286"
          color="#000"
          overflow="visible"
          rx="0"
          ry="0"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        ></rect>
        <ellipse
          cx="5.262"
          cy="1042.981"
          fill="#f0f4f7"
          color="#000"
          overflow="visible"
          rx="1.089"
          ry="1.095"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        ></ellipse>
      </g>
    </svg>
  );
}
export function Premuim(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      {...props}   viewBox="0 0 32 32"
    >
      <g color="#000" transform="translate(261 -1506.091)">
        <path
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          fill="#f9b536"
          d="M-243.108 1530.115l3.373 5.976.786-2.933 2.934.786-3.191-5.588m-7.669 1.722l-3.394 6.013-.787-2.936-2.935.787 3.148-5.513"
          overflow="visible"
        ></path>
        <path
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          fill="#105286"
          d="M-247.01 1508.602c-.286.051-1.287 1.508-1.56 1.609-.272.1-1.966-.366-2.217-.22-.251.147-.699 1.863-.92 2.05-.222.189-1.974.335-2.16.56-.186.224-.026 1.992-.17 2.245-.145.254-1.742.998-1.841 1.273-.1.275.65 1.878.6 2.167-.05.288-1.297 1.538-1.297 1.83 0 .294 1.246 1.544 1.297 1.832.05.288-.7 1.892-.6 2.167.1.275 1.696 1.02 1.84 1.273.146.253-.015 2.02.171 2.245.186.224 1.938.37 2.16.559.221.188.669 1.904.92 2.05.25.147 1.945-.32 2.217-.219.273.1 1.274 1.557 1.56 1.608.285.051 1.72-.973 2.01-.973.289 0 1.725 1.024 2.01.973.286-.05 1.287-1.508 1.56-1.608.272-.1 1.966.366 2.217.22.251-.147.699-1.863.92-2.051.223-.188 1.974-.335 2.16-.559.186-.224.026-1.992.17-2.245.145-.254 1.74-.998 1.84-1.273.098-.275-.65-1.879-.6-2.167.05-.288 1.298-1.539 1.298-1.831 0-.293-1.248-1.543-1.299-1.831-.05-.289.7-1.892.6-2.167-.099-.275-1.694-1.02-1.839-1.273-.144-.253.016-2.021-.17-2.245-.186-.225-1.937-.37-2.16-.56-.221-.187-.669-1.903-.92-2.05-.25-.146-1.945.32-2.217.22-.273-.1-1.274-1.558-1.56-1.609-.285-.05-1.721.973-2.01.973-.29 0-1.725-1.024-2.01-.973z"
          overflow="visible"
        ></path>
        <circle
          cx="-245"
          cy="1520.117"
          r="8.028"
          fill="#406b95"
          overflow="visible"
          style={{ isolation: "auto", mixBlendMode: "normal" }}
        ></circle>
        <circle
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          cx="-245"
          cy="1520.117"
          r="6"
          fill="#f0f4f7"
          overflow="visible"
        ></circle>
        <path
          style={{ isolation: "auto", mixBlendMode: "normal" }}
          fill="#f9b536"
          d="M-242.195 1524.34c-.316.233-2.388-1.183-2.78-1.18-.394.002-2.448 1.443-2.767 1.215-.32-.23.39-2.634.265-3.006-.123-.372-2.131-1.877-2.012-2.25.119-.374 2.629-.445 2.945-.677.317-.233 1.13-2.604 1.523-2.606.393-.003 1.235 2.358 1.555 2.587.319.228 2.83.268 2.953.64.124.372-1.865 1.902-1.984 2.275-.12.374.619 2.77.302 3.002z"
          overflow="visible"
        ></path>
      </g>
    </svg>
  );
}
export function Plus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      {...props}   viewBox="0 0 512 512"
    >
      <path d="M485.883 264.742H26.781c-4.971 0-9-4.029-9-9s4.029-9 9-9h459.102c4.971 0 9 4.029 9 9s-4.029 9-9 9z"></path>
      <path d="M256.332 494.293a9 9 0 01-9-9V26.192c0-4.971 4.029-9 9-9s9 4.029 9 9v459.101a9 9 0 01-9 9z"></path>
    </svg>
  );
}
export function Percentage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      version="1.1"
      {...props}   viewBox="0 0 8.467 8.467"
    >
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        strokeWidth="0.265"
        transform="translate(0 -288.533)"
      >
        <path fillRule="evenodd" d="M1.192 295.808l6.083-6.083"></path>
        <path
          fillOpacity="1"
          strokeDasharray="none"
          strokeMiterlimit="4"
          d="M1.984 290.253h.794c.147 0 .265.118.265.265v.793a.264.264 0 01-.265.265h-.794a.264.264 0 01-.264-.265v-.793c0-.147.118-.265.264-.265z"
          opacity="1"
        ></path>
        <path
          fillOpacity="1"
          strokeDasharray="none"
          strokeMiterlimit="4"
          d="M5.689 293.957h.793c.147 0 .265.118.265.265v.794a.264.264 0 01-.265.264H5.69a.264.264 0 01-.265-.264v-.794c0-.147.118-.265.265-.265z"
          opacity="1"
        ></path>
      </g>
    </svg>
  );
}

export function Multiply(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      {...props}   viewBox="0 0 512 512"
    >
      <path d="M485.841 494.293a8.973 8.973 0 01-6.364-2.636L20.459 32.64a9 9 0 010-12.728 9 9 0 0112.728 0l459.018 459.017a9 9 0 01-6.364 15.364z"></path>
      <path d="M26.823 494.293a8.967 8.967 0 01-6.363-2.636 9 9 0 01-.001-12.728l459.018-459.1a9 9 0 0112.729 12.727l-459.018 459.1a8.972 8.972 0 01-6.365 2.637z"></path>
    </svg>
  );
}
export function Edit(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 30 30">
      <path
        fill="#464646"
        d="M21.5 27h-15A3.5 3.5 0 013 23.5v-15A3.5 3.5 0 016.5 5H13a1 1 0 010 2H6.5A1.5 1.5 0 005 8.5v15A1.5 1.5 0 006.5 25h15a1.5 1.5 0 001.5-1.5V17a1 1 0 012 0v6.5a3.5 3.5 0 01-3.5 3.5zm3.92-17l1.23-1.23a2.51 2.51 0 000-3.54l-1.88-1.88a2.57 2.57 0 00-3.54 0L20 4.58z"
      ></path>
      <path
        fill="#464646"
        d="M18.58 6l-6.29 6.29a1 1 0 00-.27.51l-1 5a1 1 0 00.27.91A1 1 0 0012 19h.2l5-1a1 1 0 00.51-.27L24 11.42z"
      ></path>
    </svg>
  );
}
export function Home_3(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 17.498 17.498">
      <path d="M15.64 6.964l-6.494-5.68-.008-.016a.884.884 0 00-.591-.218H8.53a.884.884 0 00-.591.218l-.008.023-6.073 5.68A1.568 1.568 0 001.337 8.1v8.17a.809.809 0 00.81.809h4.065a.76.76 0 00.755-.81v-5.088h3.564v5.089a.764.764 0 00.755.809h4.065a.809.809 0 00.81-.81V8.1a1.564 1.564 0 00-.522-1.135zm-.48 9.115h-3.63v-4.898a1 1 0 00-1-1H6.968a1 1 0 00-1 1v4.898h-3.63v-7.98a.58.58 0 01.157-.356l.048-.041 6.003-5.615 6.458 5.649a.587.587 0 01.157.364z"></path>
    </svg>
  );
}
export function Download(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 30 30">
      <path
        fill="#464646"
        d="M24 25H6a1 1 0 010-2h18a1 1 0 010 2zm-4.08-10.38A1 1 0 0019 14h-3V7a1 1 0 00-2 0v7h-3a1 1 0 00-.92.62 1 1 0 00.21 1.09l4 4a.86.86 0 00.2.13.57.57 0 00.13.08.94.94 0 00.76 0 .57.57 0 00.13-.08.86.86 0 00.2-.13l4-4a1 1 0 00.21-1.09z"
      ></path>
    </svg>
  );
}
export function Comment(props) {
  return (
    <svg
      width="24"
      height="24"
      fill="#262626"
      ariaLabel="Comment"
      className="_8-yf5"
      {...props}   viewBox="0 0 48 48"
    >
      <path
        fillRule="evenodd"
        d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function Bookmark(props) {
  return (
    <svg
      width="24"
      height="24"
      fill="#262626"
      ariaLabel="Save"
      className="_8-yf5"
      {...props}   viewBox="0 0 48 48"
    >
      <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
    </svg>
  );
}
export function Share(props) {
  return (
    <svg
      width="24"
      height="24"
      fill="#262626"
      ariaLabel="Share Post"
      className="_8-yf5"
      {...props}   viewBox="0 0 48 48"
    >
      <path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3zM14.7 48.4l2.9-.7"></path>
    </svg>
  );
}
export function Heart(props) {
  return (
    <svg
      width="24"
      height="24"
      fill="#262626"
      ariaLabel="Activity Feed"
      className="_8-yf5"
      {...props}   viewBox="0 0 48 48"
    >
      <path
        fillRule="evenodd"
        d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function Compass(props) {
  return (
    <svg
      width="24"
      height="24"
      fill="#262626"
      ariaLabel="Find People"
      className="_8-yf5"
      {...props}   viewBox="0 0 48 48"
    >
      <path
        fillRule="evenodd"
        d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function User(props) {
  return (
    <svg
      width="24"
      height="24"
      fill="#262626"
      ariaLabel="Profile"
      className="_8-yf5"
      {...props}   viewBox="0 0 48 48"
    >
      <path d="M24 27c-7.1 0-12.9-5.8-12.9-12.9s5.8-13 12.9-13c7.1 0 12.9 5.8 12.9 12.9S31.1 27 24 27zm0-22.9c-5.5 0-9.9 4.5-9.9 9.9s4.4 10 9.9 10 9.9-4.5 9.9-9.9-4.4-10-9.9-10zm20 42.8c-.8 0-1.5-.7-1.5-1.5V42c0-5-4-9-9-9h-19c-5 0-9 4-9 9v3.4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V42c0-6.6 5.4-12 12-12h19c6.6 0 12 5.4 12 12v3.4c0 .8-.7 1.5-1.5 1.5z"></path>
    </svg>
  );
}
export function Friends(props) {
 return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 34.108 30.55" >
      <g data-name="Group 14924" transform="translate(-200.233 -559.29)">
        <ellipse
          cx="6.552"
          cy="7.332"
          data-name="Ellipse 686"
          rx="6.552"
          ry="7.332"
          transform="translate(205.215 559.29)"
        ></ellipse>
        <ellipse
          cx="4.624"
          cy="5.174"
          data-name="Ellipse 687"
          rx="4.624"
          ry="5.174"
          transform="translate(221.946 563.919)"
        ></ellipse>
        <path
          d="M223.157 576.496c-2.673.081 3.1 2.629 1.725 9.979 0 0 7.077.711 8.781-2.317s.193-7.662-4.446-7.662c-4.827 0-3.387-.081-6.06 0z"
          data-name="Path 29499"
        ></path>
        <path
          d="M221.9 580.47c-.616-1.844-2.388-2.884-4.008-3.464a12.834 12.834 0 00-4.323-.7h-4.058a12.824 12.824 0 00-4.321.7c-1.62.58-3.394 1.62-4.01 3.464-1.228 3.69-2.648 9.556 5.582 9.366h9.556c8.227.189 6.809-5.677 5.582-9.366z"
          data-name="Path 29500"
        ></path>
      </g>
    </svg>
  );
}


export function Menu_2(props) {
  return (
       <svg xmlns="http://www.w3.org/2000/svg" {...props}   viewBox="0 0 13.882 3.47" >
      <g data-name="Group 8484">
        <circle
          cx="1.735"
          cy="1.735"
          r="1.735"
          data-name="Ellipse 112"
        ></circle>
        <circle
          cx="1.735"
          cy="1.735"
          r="1.735"
          data-name="Ellipse 113"
          transform="translate(5.206)"
        ></circle>
        <circle
          cx="1.735"
          cy="1.735"
          r="1.735"
          data-name="Ellipse 114"
          transform="translate(10.411)"
        ></circle>
      </g>
    </svg>
  );
}
export function Home(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  {...props}   viewBox="0 0 30 30">
      <path
        d="M26.67 13.26L17 4.48a3 3 0 00-4 0l-9.67 8.78a1 1 0 00-.07 1.41A1 1 0 004 15h1v9a2 2 0 002 2h4a1 1 0 001-1v-6a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 001 1h4a2 2 0 002-2v-9h1a1 1 0 00.67-1.74z"
      ></path>
    </svg>
  );
}
export function Home_2(props) {
  return (
   <svg {...props}   viewBox="0 0 17.498 17.498" id="all--home-selected"  height='2.5rem' width='2.5rem' xmlns="http://www.w3.org/2000/svg"><path d="M15.7 6.964l-6.494-5.68-.008-.016a.884.884 0 00-.591-.218H8.59A.884.884 0 008 1.268l-.008.023-6.073 5.68A1.568 1.568 0 001.397 8.1v8.17a.809.809 0 00.81.809h4.065a.76.76 0 00.755-.81v-5.088h3.564v5.089a.764.764 0 00.755.809h4.065a.809.809 0 00.81-.81V8.1a1.564 1.564 0 00-.522-1.135z"></path></svg>
  );
}
export function Info(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height='2.5rem' width='2.5rem' {...props}   viewBox="0 0 30 30">
      <path
        d="M15 3a12 12 0 1012 12A12 12 0 0015 3zm-.5 5A1.5 1.5 0 1113 9.5 1.5 1.5 0 0114.5 8zM17 21.5h-2a1 1 0 01-1-1v-6a1 1 0 010-2h1a1 1 0 011 1v6h1a1 1 0 010 2z"
      ></path>
    </svg>
  );
}
