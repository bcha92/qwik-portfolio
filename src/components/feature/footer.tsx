import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { dateOptions } from "~/routes";
import { QwikLogo } from "../starter/icons/qwik";
import styles from "./footer.module.css";
import type { ServerTimeProps } from "../SchemaList";

export default component$<ServerTimeProps>(({ serverTime }) => {
  return (
    <footer class="m-5">
      <div class={[styles.anchor, "container"]}>
        <Link href="https://www.builder.io/" target="_blank">
          Created with <QwikLogo width={45} height={18} />
        </Link>
        <span class={styles.spacer}>|</span>
        <span>
          {(serverTime ? new Date(serverTime) : new Date()).toLocaleDateString(
            undefined,
            dateOptions.footer,
          )}
        </span>
      </div>
    </footer>
  );
});
