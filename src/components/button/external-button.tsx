import { component$ } from "@builder.io/qwik";
import SVG from "../SVG";
import type { ButtonProps } from "../SchemaList";
import styles from "./button.module.css";

export default component$<ButtonProps>(
  ({ href, svg, text, color, background, borderColor }) => {
    return (
      <a
        href={href}
        target="_blank"
        class={[styles.button, styles.external, "flex items-center"]}
        style={{
          color,
          background,
          border: `2px solid ${borderColor || "inherit"}`,
        }}
      >
        {svg && (
          <SVG
            path={svg.path}
            xmlns={svg.xmlns}
            height={svg.height}
            viewBox={svg.viewBox}
            color={svg.color || color}
          />
        )}
        <span class="m-1">{text || ""}</span>
      </a>
    );
  },
);
