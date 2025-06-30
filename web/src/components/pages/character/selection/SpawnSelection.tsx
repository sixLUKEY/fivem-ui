import type React from "react";
import { NuiBadge } from "../../../ui/badge/Badge";
import { NuiButton } from "../../../ui/button/Button";

export const SpawnSelection: React.FC = () => {
  return (
    <section>
      <div className="left-overlay">
        <div className="top">
          <div className="location-type">
            <i></i>
            <p>Apartments</p>
          </div>
          <NuiBadge text=""></NuiBadge>
        </div>
        <div className="bottom">
          <NuiBadge text=""></NuiBadge>
          <div>
            <h1>Pink Cage Motel</h1>
            <i></i>
          </div>
          <div>
            <NuiButton> </NuiButton>
            <NuiBadge text=""></NuiBadge>
          </div>
        </div>
      </div>
      <div className="right-overlay">
        <div className="top">
          <div className="locations">
            <i></i>
            <p>Locations</p>
          </div>
          {/* for location of locations  */}
          <NuiBadge text=""></NuiBadge>
          {/*   */}
        </div>
        <div className="bottom">
          <NuiButton> </NuiButton>
          <NuiButton> </NuiButton>
        </div>
      </div>
    </section>
  );
};
