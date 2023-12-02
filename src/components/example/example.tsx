import { component$, useStore } from "@builder.io/qwik";
import { useNavigate, Link } from "@builder.io/qwik-city";

export const ExampleTest = component$((props: { flag: boolean }) => {
  const state = useStore({
    counter: 0,
  });

  return (
    <>
      <span>Count:{state.counter}</span>
      <div class="icon">Flag: {props.flag ? "⭐" : "💣"}</div>
      <button class="btn-counter" onClick$={() => state.counter++}>
        Increment counter
      </button>
    </>
  );
});

export const Example = component$(() => {
  const navigateTo = useNavigate();
  return (
    <a class="example-link" href="/" onClick$={() => navigateTo("/")}>
      Home
    </a>
  );
});

export const Example2 = component$(() => <Link href="/" />);
