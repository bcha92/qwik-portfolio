import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import styles from "./header.module.css";

export default component$(() => {
  const nav = useNavigate();

  return (
    <header class={["container", styles.header]}>
      <div class="container flex items-center justify-between">
        <Link href="#about" onClick$={() => nav("#")}>
          About
        </Link>
        <Link href="#projects" onClick$={() => nav("#projects")}>
          Featured
        </Link>
      </div>
    </header>
  );
});
