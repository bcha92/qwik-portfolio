import { component$ } from "@builder.io/qwik";

interface SVGProps {
  path: string;
  xmlns?: string;
  height?: string;
  viewBox?: string;
}

// Custom Qwik Render for SVG Icons
export default component$<SVGProps>(({ path, xmlns, height, viewBox }) => (
  <svg
    xmlns={xmlns || "http://www.w3.org/2000/svg"}
    height={height || "1em"}
    viewBox={viewBox || "0 0 512 512"}
  >
    <path d={path} />
  </svg>
));
