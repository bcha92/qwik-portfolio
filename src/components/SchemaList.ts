import type { QwikMouseEvent, QwikTouchEvent } from "@builder.io/qwik";

type BasicInfoProps = {
  id: string;
  name: string;
  description?: string;
};

export interface HiddenProp {
  isHidden?: boolean;
}

export interface ExternalInfoProps extends BasicInfoProps {
  path?: string;
  link?: string;
  background?: string;
  color?: string;
}

// For <svg> and <path>
export interface SVGProps {
  path: string;
  xmlns?: string;
  height?: string;
  viewBox?: string;
  color?: string;
}

// Button Props
export interface ButtonProps {
  href: string;
  svg?: SVGProps;
  text?: string | number;
  color?: string;
  background?: string;
  borderColor?: string;
  onClick?: QwikMouseEvent<HTMLButtonElement, MouseEvent>;
  onTouch?: QwikTouchEvent<HTMLButtonElement>;
}

export type ConfettiSetting = {
  spread: number;
  ticks: number;
  gravity: number;
  decay: number;
  startVelocity: number;
  colors: string[];
  origin: {
    x: number;
    y: number;
  };
};

export type ConfettiOverride = {
  particleCount: number;
  scalar: number;
};

// Do Nothing Actions
// export const DNmouse = (): QwikMouseEvent<HTMLButtonElement, MouseEvent> => {};

// export const DNtouch = (): QwikTouchEvent<HTMLButtonElement> => {};
