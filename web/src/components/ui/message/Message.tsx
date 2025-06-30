import { NuiBadge } from "../badge/Badge";

export type MessageProps = {
  message: string;
  source: "global" | "local";
  sender: string;
};
export const NuiMessage: React.FC<MessageProps> = ({
  message,
  source,
  sender,
}) => {
  return (
    <div>
      <div className="top">
        {determineIcons(source)}
        <span>{sender}</span>
      </div>
      <p className="message">{message}</p>
    </div>
  );
};

function determineIcons(src: MessageProps["source"]): React.ReactNode {
  if (src === "global") {
    return (
      <div>
        <i></i>
        <NuiBadge text=""></NuiBadge>
      </div>
    );
  }
  return (
    <div>
      <i></i>
      <NuiBadge text=""></NuiBadge>
    </div>
  );
}
