import { component$ } from "@builder.io/qwik";
import type { ExternalInfoProps } from "../SchemaList";
import styles from "./card.module.css";

type CardProps = Omit<ExternalInfoProps, "id">;

export default component$(
  ({ name, description, background, opacity, link }: CardProps) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        class={styles.card}
      >
        <div class={styles["card-focus"]}>
          {background && background.length > 1 && (
            <img src={background} alt={description} width={150} height={150} />
          )}
          <span
            style={{ background: `rgba(255, 255, 255, ${opacity || 0.8})` }}
          >
            {name}
          </span>
        </div>
      </a>
    );
  },
);
