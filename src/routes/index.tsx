import { component$, useVisibleTask$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { About, Projects } from "~/components/feature";

export default component$(() => {
  const scrn = useStore({ width: 0 });
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    scrn.width = screen.width;
  });

  return (
    <>
      <About />
      {scrn.width < 1023 && (
        <Projects isHidden={false} isDesktopSize={scrn.width >= 768} />
      )}
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
