import type React from "react";
import "./Button.scss";

type ButtonProps = {
	variant?: "primary" | "secondary";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
};

export const NuiButton: React.FC<ButtonProps> = ({
	variant = "primary",
	onClick,
	children,
}) => {
	return (
		<button
			onClick={onClick}
			className={`nui-button nui-button--${variant} border`}
		>
			{children}
		</button>
	);
};
