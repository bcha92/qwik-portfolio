import { routeLoader$ } from "@builder.io/qwik-city";
import type { DateOptionsSchema } from "~/components/SchemaList";

// eslint-disable-next-line qwik/loader-location
export const useServerTimeLoader = routeLoader$(() => ({
  date: new Date().toISOString(),
}));

export const dateOptions: DateOptionsSchema = {
  footer: {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  },
};
