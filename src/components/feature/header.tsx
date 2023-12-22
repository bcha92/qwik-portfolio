import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import styles from "./header.module.css";
import type { HiddenProp } from "../SchemaList";

export default component$<HiddenProp>(() => {
  const nav = useNavigate();

  return (
    <header class={["container", styles.header]}>
      <div class="container flex items-center justify-between">
        {/* Mobile View Links */}
        <Link href="#" onClick$={() => nav("#")} class={styles.mobile}>
          About
        </Link>
        <Link
          href="#projects"
          onClick$={() => nav("#projects")}
          class={styles.mobile}
        >
          Projects
        </Link>

        {/* Full Size View Links */}
        <Link href="/" onClick$={() => nav("/")} class={styles.full}>
          About
        </Link>
        <Link
          href="/projects"
          onClick$={() => nav("/projects")}
          class={styles.full}
        >
          Projects
        </Link>
      </div>
    </header>
  );
});
