import "./InputElement.scss";
export type InputProps = {
  name: string;
  label: string;
  icon?: React.ReactNode;
  placeholder?: string;
  children?: React.ReactNode;
};
export const NuiInputElement: React.FC<InputProps> = ({
  icon,
  children,
  label,
  placeholder,
  name,
}) => {
  return (
    <div className="inputElement">
      {icon}
      <div className="inputField">
        <label htmlFor={name}>{label.toUpperCase()}</label>
        <input
          type="text"
          name={name}
          {...(placeholder ? { placeholder } : {})}
        />
      </div>
      {children}
    </div>
  );
};
