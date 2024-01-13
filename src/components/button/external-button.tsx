import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import SVG from "../SVG";
import type { ButtonProps } from "../SchemaList";
import styles from "./button.module.css";

export default component$<ButtonProps>(
  ({ href, svg, text, color, background, borderColor }) => {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        class={[styles.button, styles.external, "flex items-center"]}
        style={{
          color,
          background,
          border: `2px solid ${borderColor || "inherit"}`,
        }}
        aria-label={text}
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
      </Link>
    );
  },
);
