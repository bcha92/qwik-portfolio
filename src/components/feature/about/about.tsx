import { component$ } from "@builder.io/qwik";
import type { HiddenProp, ExternalInfoProps } from "../../SchemaList";
import ExternalButton from "../../button/external-button";

import Image from "~/media/profile.webp?jsx";
import { defaultExternalLinks } from "../../../assets/DefaultInfo";
import styles from "./about.module.css";

export default component$<HiddenProp>(({ isHidden }) => {
  const expCalc: number =
    (new Date().getTime() - new Date("2022-01-04").getTime()) / 31557600000;

  return (
    <div
      class={[
        styles.about,
        "about flex flex-col items-center justify-center",
        isHidden && "hidden",
      ]}
    >
      <h2 id="about">⭐About Me</h2>
      <div
        class={[styles.profile, "flex flex-col items-center justify-center"]}
      >
        <Image
          class="m-5 w-4/5 max-w-xs rounded-full"
          alt="front-facing mugshot of Brandon Cha staring at you the user with colourful, opened, umbrellas hanging in the sky at the Stackt (sic) market in Toronto, Canada"
        />
        <p>
          👋 My name is Brandon Cha, and I am a full-stack software engineer 👨‍💻
          with {expCalc.toFixed(1)} years of experience in professional
          development, starting in entertainment and media with prior experience
          in dentistry and healthcare.
        </p>
        <p>
          My personal hobbies include taking long walks 🚶, travelling ✈️, and
          painting 🎨.
        </p>
        <p>
          While you're here, checkout my links and my favorite projects below
          👇!
        </p>
      </div>

      <div class={(styles["external-links"], "external-links")}>
        {defaultExternalLinks.map((info: ExternalInfoProps) =>
          info.path ? (
            <ExternalButton
              key={info.id}
              href={info.link || "#"}
              svg={{ path: info.path }}
              text={info.name}
              color={info.color}
              background={info.background}
            />
          ) : (
            <ExternalButton
              key={info.id}
              href={info.link || "#"}
              text={info.name}
              color={info.color}
              background={info.background}
            />
          ),
        )}
      </div>
    </div>
  );
});
