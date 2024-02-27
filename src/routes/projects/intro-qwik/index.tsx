import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col items-center">
      <h2 class="mb-8">Introduction to QwikJS</h2>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTqfYy7UtJ-WfC3zE3MsqI-R8sV6c10Sq-EIaqKQIr7DBfLM_dWP_79YNbLFlmXv_AtP5Pg8gBpVdAB/embed?start=false&loop=true&delayms=10000"
        frameBorder="0"
        width="960"
        height="569"
        allowFullscreen={true}
        class="center mb-4 flex"
      ></iframe>
    </div>
  );
});
