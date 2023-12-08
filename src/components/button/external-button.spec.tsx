import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import Button from "./external-button";
import type { ButtonProps } from "../SchemaList";

const mockConfig: ButtonProps = {
    href: "#example",
    svg: {
        path: "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    }
}

describe('External Button Component without SVG:', async () => {
    const { screen, render } = await createDOM();
    await render(<Button href={mockConfig.href} />);

    test('rendered with #example href tag', () => {
        expect(screen.innerHTML).toContain("#example");
    });

    test('does not contain svg', () => {
        expect(screen.innerHTML).not.toContain("svg");
        expect(screen.innerHTML).not.toContain("path");
    })
})

describe('External Button Component with SVG:', async () => {
    const { screen, render } = await createDOM();
    await render(<Button href={mockConfig.href} svg={mockConfig.svg} />);
    const svg = screen.querySelector("svg");
    const path = screen.querySelector("path");
    
    test('has svg property "xmlns"', async () => {
        expect(svg?.attributes).toHaveProperty("xmlns");
    });
    
    test('has svg property "height"', async () => {
        expect(svg?.attributes).toHaveProperty("height");
    });

    test('has svg property "viewBox"', async () => {
        expect(svg?.attributes).toHaveProperty("viewBox");
    });

    test('has svg property "fill"', async () => {
        expect(svg?.attributes).toHaveProperty("fill");
    });

    test('has child property <path> with property d', async () => {
        expect(path?.attributes).toHaveProperty("d");
    });
})