import { useState } from "react";
import "./Toggle.scss";

export type ToggleOption = {
  id: string;
  el: React.ReactNode;
};

export type ToggleGroupProps = {
  options: ToggleOption[];
  selectedId?: string;
  onToggle?: (id: string) => void;
};

export const NuiToggle: React.FC<ToggleGroupProps> = ({
  options,
  selectedId,
  onToggle,
}) => {
  const [internalSelected, setInternalSelected] = useState(
    selectedId || options[0]?.id,
  );

  const handleClick = (id: string) => {
    if (!selectedId) setInternalSelected(id);
    onToggle?.(id);
  };

  const currentId = selectedId ?? internalSelected;

  return (
    <div className="toggle">
      {options.map((option) => (
        <button
          key={option.id}
          className={`toggleButton ${option.id === currentId ? "active" : ""}`}
          onClick={() => handleClick(option.id)}
        >
          {option.el}
        </button>
      ))}
    </div>
  );
};
