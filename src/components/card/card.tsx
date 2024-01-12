import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { ExternalInfoProps } from "../SchemaList";
import styles from "./card.module.css";

type CardProps = Omit<ExternalInfoProps, "id">;

export default component$(
  ({
    name,
    description,
    background,
    opacity,
    link,
    screenWidth = 768,
    isDesktopSize = false,
  }: CardProps) => {
    const isExpanded = useSignal(false);
    const setExpand = $((val: boolean) => {
      isExpanded.value = val ? false : true;
    });

    const descMax = Math.floor(screenWidth - 768) / 2.5 + 120;

    return (
      <div
        class={[
          styles.card,
          "align-center decoration-none flex justify-center overflow-hidden",
        ]}
      >
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class={styles["card-focus"]}
          style={{
            display: isExpanded.value ? "none" : "flex",
          }}
        >
          {background && background.length > 1 && (
            <picture>
              <source srcset={background} media="(orientation: portrait)" />
              <img
                src={background}
                alt={description}
                width={150}
                height={150}
              />
            </picture>
          )}
          {!isDesktopSize && (
            <span
              class={[styles.mobile, "flex-wrap items-end justify-center"]}
              style={{
                background: `rgba(255, 255, 255, ${opacity || 0.8})`,
              }}
            >
              {name}
            </span>
          )}
          {!isExpanded.value && <span class={styles.full}>{name}</span>}
        </Link>
        <div
          class={[styles.details, "justify-center"]}
          style={{
            background: `rgba(255, 255, 255,  0.9)`,
          }}
          onClick$={() => {
            setExpand(isExpanded.value);
          }}
        >
          <h3>{isExpanded.value ? "»" : "«"}</h3>
          {isExpanded.value && (
            <div>
              <h4>{name}</h4>
              <span>
                {!description
                  ? "No description entered. Click the image to learn more."
                  : description.length < descMax
                    ? description
                    : description.slice(0, descMax) + "..."}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  },
);
