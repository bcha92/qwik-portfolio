import { component$ } from "@builder.io/qwik";
import type { SVGProps } from "./SchemaList";

// Custom Qwik Render for SVG Icons
export default component$<SVGProps>(
  ({ path, xmlns, height, viewBox, color }) => (
    <svg
      xmlns={xmlns || "http://www.w3.org/2000/svg"}
      height={height || "1em"}
      viewBox={viewBox || "0 0 500 500"}
      fill={color || "currentColor"}
    >
      <path d={path} />
    </svg>
  ),
);
