import { component$, useSignal, $ } from "@builder.io/qwik";
import Card from "../card/card";
import styles from "./carousel.module.css";
import type { ExternalInfoProjectsProps } from "../SchemaList";

import FourOhFour from "../../routes/404";

export default component$(({ projects }: ExternalInfoProjectsProps) => {
  if (!projects || projects.length === 0) return <FourOhFour />;

  const currentIndex = useSignal(0);
  const newIndex = $((newValue: number) => {
    if (projects.length <= 1 || newValue < 0 || newValue >= projects.length)
      return;

    currentIndex.value = newValue;
  });

  const { id, name, link, description, background, opacity } =
    projects[currentIndex.value];

  return (
    <div class={styles.carousel}>
      <button
        class={[
          styles["carousel-button"],
          styles["previous"],
          currentIndex.value <= 0 ? styles["disabled"] : "",
        ]}
        onClick$={() => newIndex(currentIndex.value - 1)}
        disabled={currentIndex.value <= 0}
        aria-label={`${
          currentIndex.value <= 0 ? "disabled" : ""
        } button previous project`}
      />
      <Card
        key={id}
        name={name}
        link={link}
        description={description}
        background={background}
        opacity={opacity}
      />
      <button
        class={[
          styles["carousel-button"],
          styles["next"],
          currentIndex.value >= projects.length - 1 ? styles["disabled"] : "",
        ]}
        onClick$={() => newIndex(currentIndex.value + 1)}
        disabled={currentIndex.value >= projects.length - 1}
        aria-label={`${
          currentIndex.value <= 0 ? "disabled" : ""
        } button next project`}
      />
    </div>
  );
});
