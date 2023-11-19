import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
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
    <footer>
      <div class="container">
        <a href="https://www.builder.io/" target="_blank" class={styles.anchor}>
          <span>Created with Qwik ♡ by Builder.io</span>
          <span class={styles.spacer}>|</span>
          <span>
            {new Date(serverTime.value.date).toLocaleDateString(
              undefined,
              dateOptions,
            )}
          </span>
        </a>
      </div>
    </footer>
  );
});
