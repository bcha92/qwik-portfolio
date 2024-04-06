import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col items-center">
      <h2 class="mb-8">Introduction to QwikJS</h2>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vS6gYHl_AWmsvuRkzoCABkJpYQj7nRAor8i0sjQm-mx5IRwAlVsrnrdhTtKUfCHn8sxdputrnVUikqR/embed?start=false&loop=false&delayms=30000"
        width="960"
        height="569"
        allowFullscreen={true}
      ></iframe>
    </div>
  );
});
