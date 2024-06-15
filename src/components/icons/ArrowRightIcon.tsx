import { SVGProps } from "../../types";

export const ArrowRightIcon = (props: SVGProps) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      style={{ stroke: "currentColor", strokeWidth: 40, ...props.style }}
      // stroke="currentColor"
      // strokeWidth={40}
      fill={props.color ?? "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 267 512.43"
    >
      <path
        // fillRule="nonzero"
        d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 3.22 18.9z"
      />
    </svg>
  );
};
