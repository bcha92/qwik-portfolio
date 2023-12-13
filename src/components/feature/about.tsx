import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { HiddenProp, ExternalInfoProps } from "../SchemaList";
import ExternalButton from "../button/external-button";

import Image from "~/media/profile.png?jsx";
import { defaultExternalLinks } from "../../assets/DefaultInfo";

export default component$<HiddenProp>(({ isHidden }) => {
  const expCalc: number =
    (new Date().getTime() - new Date("2022-01-04").getTime()) / 31557600000;

  useStylesScoped$(`
    .about {
      margin: -3em auto -2em;
      padding: 0 1em;

      > p, ul {
        margin-top: 1em;
      }

      > p {
        max-width: 50rem;
        margin: 0.5em auto;
        text-align: center;
      }

      > ul {
        display: flex;
        justify-content: space-around;
        max-width: 60rem;
      }
    }
  `);

  return (
    <div
      class={`about container ${
        isHidden ? "hidden" : ""
      } flex flex-col items-center justify-center`}
    >
      <h2 id="about">⭐About Me</h2>
      <Image class="m-5 w-4/5 max-w-xs rounded-full" />

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
        While you're here, checkout my links and my favorite projects below 👇!
      </p>

      <ul class="flex flex-wrap items-center justify-evenly">
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
      </ul>
    </div>
  );
});
