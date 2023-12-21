import { component$, useSignal, $ } from "@builder.io/qwik";
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
    // bgColor,
    // color,
  }: CardProps) => {
    const isExpanded = useSignal(false);
    const setExpand = $((val: boolean) => {
      isExpanded.value = val ? false : true;
    });

    return (
      <div
        class={[
          styles.card,
          "align-center decoration-none flex justify-center overflow-hidden",
        ]}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class={styles["card-focus"]}
          style={{ width: isExpanded.value ? "auto" : "100%" }}
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
          <span
            class={[
              styles.mobile,
              "flex flex-wrap items-end justify-center text-center",
            ]}
            style={{
              background: `rgba(255, 255, 255, ${opacity || 0.8})`,
            }}
          >
            {name}
          </span>
          {!isExpanded.value && <span class={styles.full}>{name}</span>}
        </a>
        <div
          class={[styles.details, "flex justify-center"]}
          style={{
            background: `rgba(255, 255, 255,  0.9)`,
          }}
          onClick$={() => {
            setExpand(isExpanded.value);
            console.log(isExpanded.value);
          }}
        >
          <h3>{isExpanded.value ? "»" : "«"}</h3>
          {isExpanded.value && (
            <div>
              <h4>{name}</h4>
              <span>{description}</span>
            </div>
          )}
        </div>
      </div>
    );
  },
);
