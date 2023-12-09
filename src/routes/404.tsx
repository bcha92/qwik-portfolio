import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";

// 404 page redirect // does not work in development
// see https://qwik.builder.io/docs/advanced/routing/#custom-404-page for more details
export default component$(() => {
  const nav = useNavigate();

  useStylesScoped$(`
    .four-oh-four {
      min-width: 300px;
      max-width: 50vw;

      > h2, p {
        text-align: center;
      }

      > h2 {
        margin-bottom: 1em;
      }

      > p {
        margin: 0.5em 0;

        > a {
          color: white;
          text-decoration: underline;
        }
      }
    }
  `);

  return (
    <div class="four-oh-four container flex flex-col items-center justify-center">
      <h2>🚧 Oops...</h2>
      <p>
        This either is a wrong turn or we are currently fixing this section.
      </p>
      <p>
        Please check back again later or click 👉
        <Link href="/" onClick$={() => nav("/")}>
          HERE
        </Link>
        👈 to return to the homepage!
      </p>
    </div>
  );
});
