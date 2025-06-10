export type BadgeProps = {
  text: string;
};
export const NuiBadge: React.FC<BadgeProps> = ({ text }) => {
  return <div className="badge">{text}</div>;
};
