import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import Card from "./card";

describe('Card Component', async () => {
    const { screen, render } = await createDOM();

    test('Renders with name "hello"', async () => {
        await render(<Card name="hello" />);
        expect(screen.innerHTML).toContain("hello");
    })
})