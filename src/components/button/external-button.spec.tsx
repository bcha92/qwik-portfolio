import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import Button from "./external-button";
import type { ButtonProps } from "../SchemaList";

const TestConfig: ButtonProps = {
    href: "#example"
}

describe('External Button Component:', async () => {
    const { screen, render } = await createDOM();

    test('Rendered with #example href tag', async () => {
        await render(<Button href={TestConfig.href} />);
        expect(screen.innerHTML).toContain("#example");
    });
})