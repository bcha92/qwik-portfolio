import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";

import { Header, Footer } from "~/components/feature";
import styles from "./styles.css?inline";

// Re-Exporting required for production build
import { useServerTimeLoader } from "~/functions/routeLoaders";
export { useServerTimeLoader };

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const serverTime = useServerTimeLoader();
  useStyles$(styles);

  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer serverTime={serverTime.value.date} />
    </>
  );
});
