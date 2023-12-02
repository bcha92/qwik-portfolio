import { createDOM } from "@builder.io/qwik/testing";
import { test, expect, describe } from "vitest";
import { ExampleTest, Example, Example2 } from "./example";

test(`[ExampleTest Component]: Should render ⭐`, async () => {
  const { screen, render } = await createDOM();
  await render(<ExampleTest flag={true} />);
  expect(screen.outerHTML).toContain("⭐");
  const div = screen.querySelector(".icon") as HTMLElement;
  expect(div.outerHTML).toContain("⭐");
});

test(`[ExampleTest Component]: Should render 💣`, async () => {
  const { screen, render } = await createDOM();
  await render(<ExampleTest flag={false} />);
  expect(screen.outerHTML).toContain("💣");
});

test(`[ExampleTest Component]: Click counter +1`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(<ExampleTest flag={true} />);

  expect(screen.outerHTML).toContain("Count:0");

  const spanBefore = screen.querySelector("span") as HTMLDivElement;
  await userEvent(".btn-counter", "click");
  expect(spanBefore.innerHTML).toEqual("Count:1");

  const spanAfter = screen.querySelector("span") as HTMLDivElement;
  await userEvent("button", "click");
  expect(spanAfter.innerHTML).toEqual("Count:2");
});

describe('example component', () => {
  test("renders <a> properly", async () => {
    const { screen, render } = await createDOM();
    await render(<Example />);
    console.log(screen.innerHTML);
    expect(screen.innerHTML).toContain("")
  })
})

describe('example2 component', () => {
  test("renders <Link> properly", async () => {
    const { screen, render } = await createDOM();
    await render(<Example2 />)
  })
})