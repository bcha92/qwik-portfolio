import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { About, Projects } from "~/components/feature";

export default component$(() => {
  return (
    <>
      <About />
      <Projects isHidden={true} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Projects - Brandon Cha's Portfolio",
  meta: [
    {
      name: "Made with Qwik's O(1) framework!",
      content: "Qwik site detailing Brandon Cha's portfolio page",
    },
  ],
};
