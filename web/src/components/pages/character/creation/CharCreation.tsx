import type React from "react";
import { NuiInputElement } from "../../../ui/input-element/InputElement";
import { NuiToggle } from "../../../ui/toggle/Toggle";
import { NuiButton } from "../../../ui/button/Button";

export const CharacterCreation: React.FC = () => {
  return (
    <section>
      <h1 className="heading">CREATE YOUR IDENTITY</h1>
      <p className="subtext"></p>
      <form action="submit">
        <NuiInputElement>
          <div className="firstName"></div>
        </NuiInputElement>
        <NuiInputElement>
          <div className="lastName"></div>
        </NuiInputElement>
        <div className="birthday_gender">
          <NuiInputElement>
            <div className="birthday"></div>
          </NuiInputElement>
          <NuiToggle active={true}></NuiToggle>
        </div>
        <NuiInputElement>
          <div className="height"></div>
        </NuiInputElement>
        <NuiInputElement>
          <div className="nationality"></div>
        </NuiInputElement>
        <NuiInputElement>
          <div className="prison"></div>
          <NuiToggle active={true}></NuiToggle>
        </NuiInputElement>
      </form>
      <div className="buttons">
        <NuiButton> </NuiButton>
        <NuiButton> </NuiButton>
      </div>
    </section>
  );
};
