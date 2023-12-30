import { component$, useVisibleTask$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Projects } from "~/components/feature";
import styles from "./project.module.css";
import FourOhFour from "../../routes/404";

export default component$(() => {
  const scrn = useStore({ width: 0 });
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    scrn.width = screen.width;
  });

  return (
    <div class={styles.wysiwyg}>
      <div class={[styles.ouch, "flex-col items-center justify-center"]}>
        <FourOhFour />
      </div>
      <div class={[styles["in-project"]]}>
        <Projects isHidden={scrn.width < 768} isDesktopSize={true} />
      </div>
    </div>
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
