import type React from "react";
import "./Button.scss";

type ButtonProps = {
  variant?: "primary" | "secondary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  size?: number;
};

export const NuiButton: React.FC<ButtonProps> = ({
  variant = "primary",
  onClick,
  children,
  size = 50,
}) => {
  return (
    <button
      onClick={onClick}
      className={`nui-button nui-button--${variant} border`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path d="M19 1.3094C21.4752 -0.119663 24.5248 -0.119663 27 1.3094L41.5167 9.6906C43.9919 11.1197 45.5167 13.7607 45.5167 16.6188V33.3812C45.5167 36.2393 43.9919 38.8803 41.5167 40.3094L27 48.6906C24.5248 50.1197 21.4752 50.1197 19 48.6906L4.48334 40.3094C2.00813 38.8803 0.483337 36.2393 0.483337 33.3812V16.6188C0.483337 13.7607 2.00813 11.1197 4.48334 9.6906L19 1.3094Z" />
      </svg>
    </button>
  );
};
