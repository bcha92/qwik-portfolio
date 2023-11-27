import { component$, useSignal, $, useStylesScoped$ } from "@builder.io/qwik";
import Card from "../card/card";
import type { ExternalInfoProjectsProps } from "../SchemaList";

import FourOhFour from "../404/404";

export default component$(({ projects }: ExternalInfoProjectsProps) => {
  if (!projects) return <FourOhFour />;

  const currentIndex = useSignal(0);
  const newIndex = $((newValue: number) => {
    if (projects.length <= 1 || newValue < 0 || newValue >= projects.length)
      return;

    currentIndex.value = newValue;
  });

  const { name, link, description, background } = projects[currentIndex.value];

  useStylesScoped$(`
    .carousel {
        margin-top: 2em;
    }

    .carousel-button {
        &.previous::after {
            content: '<';
        }

        &.next::after {
            content: '>';
        }

        &.disabled {
          background: gray;
        }
    }
  `);
  return (
    <div class="carousel container flex items-stretch justify-center">
      <button
        class={`carousel-button previous ${
          currentIndex.value <= 0 ? "disabled" : ""
        }`}
        onClick$={() => newIndex(currentIndex.value - 1)}
        disabled={currentIndex.value <= 0}
      />
      <Card
        name={name}
        link={link}
        description={description}
        background={background}
      />
      <button
        class={`carousel-button next ${
          currentIndex.value >= projects.length - 1 ? "disabled" : ""
        }`}
        onClick$={() => newIndex(currentIndex.value + 1)}
        disabled={currentIndex.value >= projects.length - 1}
      />
    </div>
  );
});
