import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import Card from "./card";
import parsedProjects from "~/assets/ExternalInfo";

const { name, link, description, background } = parsedProjects()[0];

describe('Card Component without image:', async () => {
    const { screen, render } = await createDOM();
    await render(<Card name={name} link={link} description={description} />);

    test('renders <span> tag with text', () => {
        expect(screen.innerHTML).toContain("span");
        expect(screen.innerHTML).toContain(name);
    })

    test('should not contain <img> tag', () => {
        expect(screen.innerHTML).not.toContain("img");
    })
})

describe('Card Component with image:', async () => {
    const { screen, render } = await createDOM();
    await render(<Card name={name} link={link} description={description} background={background} />);

    test('renders <img> with background and <span> with text', () => {
        expect(screen.innerHTML).toContain("img");
        expect(screen.querySelector("img")?.src).toContain(background);
        expect(screen.innerHTML).toContain("span");
        expect(screen.innerHTML).toContain(name);
    })
})