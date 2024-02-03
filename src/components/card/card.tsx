import { component$ } from "@builder.io/qwik";
import type { ExternalInfoProps } from "../SchemaList";
import styles from "./card.module.css";

type CardProps = Omit<ExternalInfoProps, "id">;

export default component$(
  ({ name, description, background, link }: CardProps) => {
    return (
      <a href={link} target="_blank" class={styles.card}>
        <div class={styles["card-focus"]}>
          {background && background.length > 1 && (
            <img src={background} alt={description} width={150} height={150} />
          )}
          <span>{name}</span>
        </div>
      </a>
    );
  },
);
