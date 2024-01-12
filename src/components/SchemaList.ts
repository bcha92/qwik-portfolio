type BasicInfoProps = {
  id: string;
  name: string;
  description?: string;
};

export interface HiddenProp {
  isHidden?: boolean;
  isDesktopSize?: boolean;
  screenWidth?: number;
}

export interface ExternalInfoProps extends BasicInfoProps {
  path?: string;
  link?: string;
  background?: string;
  bgColor?: string;
  color?: string;
  opacity?: number | string;
  isDesktopSize?: boolean;
  screenWidth?: number;
}

// ../media/DefaultProps.ts schema
export type ExternalInfoProjectsProps = {
  projects?: ExternalInfoProps[];
  screenWidth?: number;
};

export type ExternalInfoLinksProps = {
  links?: ExternalInfoProps[];
};

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
  text?: string;
  color?: string;
  background?: string;
  borderColor?: string;
  onClick?: MouseEvent;
  onTouch?: TouchEvent;
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

export type DateOptionsSchema = {
  footer: Intl.DateTimeFormatOptions;
};
