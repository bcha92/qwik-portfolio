import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col items-center">
      <h2 class="mb-8">Introduction to QwikJS</h2>
      <iframe
        src="https://docs.google.com/presentation/d/1WeNbesLQZACc-NKyk2DWKsWzLK5l_NZ8cPcS7v2eAjQ"
        frameBorder="0"
        width="960"
        height="569"
        allowFullscreen={true}
        class="center mb-4 flex"
      ></iframe>
    </div>
  );
});
