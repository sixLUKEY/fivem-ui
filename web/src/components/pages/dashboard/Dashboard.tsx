import { NuiBadge } from "../../ui/badge/Badge";
import { NuiInputElement } from "../../ui/input-element/InputElement";
import { NuiMessage } from "../../ui/message/Message";

export type DashboardOpts = {
  isDriving: boolean;
};

export const Dashboard: React.FC = () => {
  return (
    <section>
      <div className="left-overlay">
        <div className="chat-box">
          <div className="messages">
            {/* for message of messages ( with virtual scrolling? )*/}
            <NuiMessage></NuiMessage>
            {/**/}
          </div>
          <NuiInputElement> </NuiInputElement>
          <div>
            <NuiBadge text=""></NuiBadge>
            <NuiBadge text=""></NuiBadge>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
      <div className="compass"></div>
      <div className="right-overlay"></div>
    </section>
  );
};
