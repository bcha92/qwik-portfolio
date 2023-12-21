import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import styles from "./header.module.css";
import type { HiddenProp } from "../SchemaList";

export default component$<HiddenProp>(() => {
  const nav = useNavigate();
  const link = useStore({ pf: "#" });
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (screen.width > 1023) {
      link.pf = "/";
    }
  });

  return (
    <header class={["container", styles.header]}>
      <div class="container flex items-center justify-between">
        <Link href={link.pf} onClick$={() => nav(link.pf)}>
          About
        </Link>
        <Link
          href={`${link.pf}projects`}
          onClick$={() => nav(`${link.pf}projects`)}
        >
          Projects
        </Link>
      </div>
    </header>
  );
});
