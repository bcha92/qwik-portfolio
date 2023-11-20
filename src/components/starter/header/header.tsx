import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";

export default component$(() => {
  const nav = useNavigate();

  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <Link href="/" onClick$={() => nav("/")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/featured" onClick$={() => nav("/featured")}>
              {/* TODO: set href and onClick$ to #featured for desktop and header html id to "featured" */}
              Featured
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
