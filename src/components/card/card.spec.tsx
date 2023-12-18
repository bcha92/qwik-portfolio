import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import Card from "./card";
import { defaultProjects } from "~/media/DefaultProps";

const { name, link, description, color, background } = defaultProjects[0];

describe('Card Component without image:', async () => {
    const { screen, render } = await createDOM();
    await render(<Card name={name} link={link} description={description} color={color} />);

    test('renders <span> tag with text', () => {
        expect(screen.innerHTML).toContain("span");
        expect(screen.innerHTML).toContain(name);
    })

    test('should not contain <picture> with <source> or <img> tag', () => {
        expect(screen.innerHTML).not.toContain("picture");
        expect(screen.innerHTML).not.toContain("source");
        expect(screen.innerHTML).not.toContain("img");
    })
})

describe('Card Component with image:', async () => {
    const { screen, render } = await createDOM();
    await render(<Card name={name} link={link} description={description} color={color} background={background} />);

    test('renders <picture> with <source> and <img> elements', () => {
        expect(screen.innerHTML).toContain("picture");
        expect(screen.querySelector("picture")?.innerHTML).toContain("source");
        expect(screen.querySelector("picture")?.innerHTML).toContain("img");
    })

    test('<source> has \'srcset\' and \'media\' attributes', () => {
        const source = screen.querySelector("source");
        expect(source?.srcset).toContain(background);
        expect(source?.media).toContain("orientation:")
    })

    test('<img> has \'src\' and \'alt\' attributes', () => {
        const img = screen.querySelector("img");
        expect(img?.src).toContain(background);
        expect(img?.alt).toContain(description);
    })
    
    test('renders <span> with text', () => {
        
        expect(screen.innerHTML).toContain("span");
        expect(screen.querySelector("span")?.innerHTML).toContain(name);
    })
})