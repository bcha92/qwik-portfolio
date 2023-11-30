import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Carousel from "../carousel/carousel";
import type { HiddenProp } from "../SchemaList";
import projects from "../../assets/ExternalInfo";

export default component$<HiddenProp>(({ isHidden }) => {
  useStylesScoped$(`
    .featured {
      margin: 2em auto 4em;
    }
  `);

  return (
    <div
      class={`featured container ${
        isHidden ? "hidden" : ""
      } flex flex-col items-center justify-center`}
    >
      <h2 id="projects">✨Projects</h2>
      <Carousel projects={projects()} />
    </div>
  );
});
