import { component$ } from "@builder.io/qwik";
import Card from "~/components/card/card";
import Carousel from "../../carousel/carousel";
import type { HiddenProp } from "../../SchemaList";
import { defaultProjects } from "../../../media/DefaultProps";
import styles from "./projects.module.css";

export default component$<HiddenProp>(({ isHidden, isDesktopSize = false }) => {
  return (
    <div class={[styles.projects, "projects", isHidden && "hidden"]}>
      <h2 id="projects">✨Projects</h2>
      {isDesktopSize ? (
        <div class={[styles["projects-grid"], "grid"]}>
          {defaultProjects.map(
            ({ id, name, description, background, opacity, link }) => (
              <Card
                key={id}
                name={name}
                description={description}
                background={background}
                opacity={opacity}
                link={link}
              />
            ),
          )}
        </div>
      ) : (
        <Carousel projects={defaultProjects} />
      )}
    </div>
  );
});
