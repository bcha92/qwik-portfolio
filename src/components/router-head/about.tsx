import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Image from "~/media/profile.png?jsx";

export default component$(() => {
  const expCalc: number =
    (new Date().getTime() - new Date("2022-01-04").getTime()) / 31557600000;

  useStylesScoped$(`
    .about > p {
      margin: 0.5em 0;
      text-align: center;
      max-width: 32vw;
    }
  `);

  return (
    <div class="about container flex flex-col items-center justify-center">
      <h2 id="about">About Me</h2>
      <Image class="m-4 rounded-full" />
      <p>
        👋 My name is Brandon Cha, and I am a full-stack software engineer 👨‍💻
        with {expCalc.toFixed(2)} years of experience in professional
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
    </div>
  );
});
