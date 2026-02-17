import type { SVGProps } from "react";
const IconLocation = (props: SVGProps<SVGSVGElement>) => (
 <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.5 8.125a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25m0-4.333a2.708 2.708 0 1 0 0 5.416 2.708 2.708 0 0 0 0-5.416m0 11.916c-.9.005-5.417-6.943-5.417-9.208a5.417 5.417 0 0 1 10.834 0c0 2.234-4.53 9.213-5.417 9.208M6.5 0A6.5 6.5 0 0 0 0 6.5c0 2.718 5.42 10.84 6.5 10.833C7.564 17.34 13 9.181 13 6.5A6.5 6.5 0 0 0 6.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default IconLocation;