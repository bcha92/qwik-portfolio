import { component$, useVisibleTask$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { About, Projects } from "~/components/feature";
import styles from "./projects/project.module.css";

// Re-Export Loader Modules
export { dateOptions } from "../functions/routeLoaders";

export default component$(() => {
  const scrn = useStore({ width: 0 });
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    scrn.width = screen.width;
  });

  return (
    <>
      <About />
      <div class={[styles.wysiwyg, styles["in-index"]]}>
        <Projects
          isHidden={scrn.width > 1023}
          isDesktopSize={scrn.width >= 768}
        />
      </div>
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
