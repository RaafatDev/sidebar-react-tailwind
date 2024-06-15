import { SVGProps } from "../../types";

export const SendMoneyIcon = (props: SVGProps) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      style={props.style}
      fill={props.color ?? "currentColor"}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 58.81"
    >
      <path
        d="M12.08 12v46.81h81.38L93.33 42a31.77 31.77 0 0 0-8.25 1.12v1.5a6.9 6.9 0 0 0-6.74 7H27.12c0-4.37-3.16-7.46-7-7.43V25.63a6.9 6.9 0 0 0 6.75-7h44.66c.45-.32.88-.63 1.27-1A43.64 43.64 0 0 1 81.24 12Zm110.8 12.76-20.46 20.3.1-10.2c-12.8-2.77-27.26.49-35 10.17C69 25 87.09 15 102.7 14.5l.09-10.41 20.09 20.66ZM62 30.26a10.67 10.67 0 1 0-4.47 14.41A10.67 10.67 0 0 0 62 30.26ZM0 0v43.61h5.57V11.85a5.15 5.15 0 0 1 5.53-5.23h65.68V0Z"
        // fillRule="evenodd"
      />
    </svg>
  );
};
