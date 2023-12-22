import { component$ } from "@builder.io/qwik";
import Carousel from "../../carousel/carousel";
import type { HiddenProp } from "../../SchemaList";
import { defaultProjects } from "../../../media/DefaultProps";
import styles from "./projects.module.css";

export default component$<HiddenProp>(({ isHidden, screenWidth }) => {
  return (
    <div class={[styles.projects, "projects", isHidden && "hidden"]}>
      <h2 id="projects">✨Projects</h2>
      <Carousel projects={defaultProjects} screenWidth={screenWidth} />
    </div>
  );
});
