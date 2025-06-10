export type InputProps = {
  children: React.ReactNode;
};
export const NuiInputElement: React.FC<InputProps> = ({ children }) => {
  return (
    <div>
      <label htmlFor="field">
        <input type="text" name="field" />
      </label>
      {children}
    </div>
  );
};
