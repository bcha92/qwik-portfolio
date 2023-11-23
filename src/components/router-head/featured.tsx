import { component$ } from "@builder.io/qwik";
import type { HiddenProp } from "../SchemaList";

export default component$<HiddenProp>(({ isHidden }) => {
  return (
    <div
      class={`featured container ${
        isHidden ? "hidden" : ""
      } flex flex-col items-center justify-center`}
    >
      <h2 id="featured">✨Featured</h2>
    </div>
  );
});
