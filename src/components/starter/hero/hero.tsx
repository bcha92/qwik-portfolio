import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "~/media/thunder.png?jsx";
import shootConfetti from "~/components/confetti";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} />
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p
        onScroll$={() => {
          console.log("Hello");
        }}
      >
        Have fun building your App with Qwik.
      </p>
      <div class={styles["button-group"]}>
        <button
          onClick$={async () => {
            setTimeout(shootConfetti, 0);
            setTimeout(shootConfetti, 100);
            setTimeout(shootConfetti, 200);
            setTimeout(shootConfetti, 300);
            setTimeout(shootConfetti, 400);
          }}
        >
          Time to celebrate
        </button>
        <a
          href="https://qwik.builder.io/docs"
          target="_blank"
          class="button button-dark"
        >
          Explore the docs
        </a>
      </div>
    </div>
  );
});
