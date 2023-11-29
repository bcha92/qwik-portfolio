import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/router-head/about";
import Projects from "~/components/router-head/projects";

export default component$(() => {
  return (
    <>
      <About />
      <Projects isHidden={false} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Brandon Cha's Portfolio",
  meta: [
    {
      name: "Made with Qwik's O(1) framework!",
      content: "Qwik site detailing Brandon Cha's portfolio page",
    },
  ],
};
