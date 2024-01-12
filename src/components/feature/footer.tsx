import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useServerTimeLoader, dateOptions } from "~/routes";
import { QwikLogo } from "../starter/icons/qwik";
import styles from "./footer.module.css";

const ServerTimeComponent = component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <>
      {new Date(serverTime.value.date).toLocaleDateString(
        undefined,
        dateOptions.footer,
      )}
    </>
  );
});

export default component$(({ mode }) => {
  return (
    <footer class="m-5">
      <div class={[styles.anchor, "container"]}>
        <Link href="https://www.builder.io/" target="_blank">
          Created with <QwikLogo width={45} height={18} />
        </Link>
        <span class={styles.spacer}>|</span>
        <span>
          {mode === "test" ? (
            new Date().toLocaleDateString(undefined, dateOptions.footer)
          ) : (
            <ServerTimeComponent />
          )}
        </span>
      </div>
    </footer>
  );
});
