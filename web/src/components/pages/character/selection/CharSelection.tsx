import type React from "react";
import "./CharSelection.scss";
import { NuiButton } from "../../../ui/button/Button";
import { NuiBadge } from "../../../ui/badge/Badge";

type SelectionMetaData = {
  char: {
    id: number;
    gender: string;
    finance: {
      savings: number;
      current: number;
    };
    tel: number;
  };
};

export const CharacterSelection: React.FC<SelectionMetaData> = ({ char }) => {
  return (
    <section className="character-selection">
      <div className="left-overlay">
        <div className="top">
          <div className="mini-title">
            <i></i>
            <h5></h5>
          </div>
          <div className="large-title">
            <i></i>
            <h1></h1>
          </div>
          <div className="subtext"></div>
        </div>
        <div className="middle">
          <div className="meta">
            <NuiBadge text={char.gender} />
            <NuiBadge text={char.id.toString()} />
          </div>
          <div className="name">
            <h1></h1>
            <i></i>
          </div>
          <div className="dob">
            <i></i>
            <span className="date"></span>
          </div>
          <div className="personal">
            <div className="tel">
              <NuiButton>
                <i></i>
              </NuiButton>
              <h3>{char.tel}</h3>
            </div>
            <div className="savings">
              <NuiButton>
                <i></i>
              </NuiButton>
              <h3>{char.finance.savings}</h3>
            </div>
            <div className="current">
              <NuiButton>
                <i></i>
              </NuiButton>
              <h3>{char.finance.current}</h3>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="play"></div>
          <div className="previous"></div>
          <div className="next"></div>
        </div>
      </div>
      <div className="right-overlay">
        <div className="top">
          <NuiBadge text=""></NuiBadge>
        </div>
        <div className="bottom">
          <SelectionTracker></SelectionTracker>
        </div>
      </div>
    </section>
  );
};
