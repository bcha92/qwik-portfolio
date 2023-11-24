import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import { QwikLogo } from "../icons/qwik";
import styles from "./footer.module.css";

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="m-5">
      <div class={[styles.anchor, "container"]}>
        <a href="https://www.builder.io/" target="_blank">
          Created with <QwikLogo width={45} height={18} />
        </a>
        <span class={styles.spacer}>|</span>
        <span>
          {new Date(serverTime.value.date).toLocaleDateString(
            undefined,
            dateOptions,
          )}
        </span>
      </div>
    </footer>
  );
});
