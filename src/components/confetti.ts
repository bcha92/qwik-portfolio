import type { ConfettiSetting, ConfettiOverride } from "./SchemaList";

const defaultSetting: ConfettiSetting = {
  spread: 360,
  ticks: 70,
  gravity: 0,
  decay: 0.95,
  startVelocity: 30,
  colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
  origin: {
    x: 0.5,
    y: 0.35,
  },
};

const defaultOptions: ConfettiOverride[] = [
  { particleCount: 80, scalar: 1.2 },
  { particleCount: 60, scalar: 0.75 },
];

const loadConfetti = () =>
  new Promise<(opts: any) => void>((res, rej) => {
    const varGlobal = globalThis as any;
    if (varGlobal.confetti) {
      return res(varGlobal.confetti as any);
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    script.onload = () => res(varGlobal.confetti as any);
    script.onerror = rej;
    document.head.appendChild(script);
    script.remove();
  });

const confetti = await loadConfetti();

export default function shootConfetti(
  config: ConfettiSetting = defaultSetting,
  opts: ConfettiOverride[] = defaultOptions,
) {
  for (let i = 0; i < opts.length; i++) {
    confetti({
      ...config,
      ...opts[i],
    });
  }
}
