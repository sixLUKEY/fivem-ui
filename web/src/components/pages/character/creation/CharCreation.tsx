import type React from "react";
import "./CharCreation.scss";
import {
  InputProps,
  NuiInputElement,
} from "../../../ui/input-element/InputElement";
import { NuiToggle } from "../../../ui/toggle/Toggle";
import { NuiButton } from "../../../ui/button/Button";
import { formIcons } from "../../../../static/icons/forms";

const inputElements: InputProps[] = [
  {
    name: "firstName",
    label: "first name",
    placeholder: "First Name",
  },
];

export const CharacterCreation: React.FC = () => {
  return (
    <section>
      <div className="container">
        <h1 className="heading">CREATE YOUR IDENTITY</h1>
        <p className="subtext">
          Lorem ipsum dolor sit amet consectetur. Pulvinar turpis iaculis
          vulputate integer sit quam. Faucibus.
        </p>
        <form action="submit" onSubmit={(e) => e.preventDefault()}>
          <NuiInputElement
            label="first name"
            placeholder="First Name"
            name="firstName"
            icon={formIcons["pencilIcon"]}
          ></NuiInputElement>
          <NuiInputElement
            label="last name"
            placeholder="Last Name"
            name="lastName"
            icon={formIcons["pencilIcon"]}
          ></NuiInputElement>
          <div className="birthday_gender">
            <NuiInputElement
              label="birthday"
              placeholder="mm/dd/yyyy"
              name="birthday"
            ></NuiInputElement>
            <div className="gender">
              <NuiToggle
                options={[
                  { id: "male", el: formIcons["male"] },
                  { id: "female", el: formIcons["female"] },
                ]}
              ></NuiToggle>
            </div>
          </div>
          <NuiInputElement label="height" name="height"></NuiInputElement>
          <NuiInputElement
            label="nationality"
            name="nationality"
            placeholder="Nationality"
          ></NuiInputElement>
          <NuiInputElement label="prison life" name="prisonLife">
            <NuiToggle
              options={[
                { id: "yes", el: formIcons["thumbsUp"] },
                { id: "no", el: formIcons["thumbsDown"] },
              ]}
            ></NuiToggle>
          </NuiInputElement>
        </form>
        <div className="buttons">
          <NuiButton scale={1.5}> </NuiButton>
          <NuiButton variant="secondary"> </NuiButton>
        </div>
      </div>
    </section>
  );
};
