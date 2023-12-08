import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import About from "./about";

test('About Page Component should not be visible if marked hidden', async () => {
    const { screen, render } = await createDOM();
    await render(<About isHidden={true} />);
    expect(screen.querySelector(".about")?.className).toContain("hidden");
})

describe('About Page Component:', async () => {
    const { screen, render } = await createDOM();
    await render(<About />);
    const aboutPage = screen.querySelector(".about");
    
    test('should contain <h2> Header element', () => {
        expect(aboutPage?.firstElementChild?.tagName).toContain("H2");
    })

    test('should contain <img> profile element', () => {
        expect(aboutPage?.querySelector("img")).toBeDefined();
    })

    test('should contain at least one <p> paragraph element', () => {
        expect(aboutPage?.querySelectorAll("p").length).toBeGreaterThan(0);
    })

    test('should contain <ul> element with at least one child button', () => {
        const ul = aboutPage?.querySelector("ul");
        expect(ul).toBeDefined();
        expect(ul?.querySelectorAll("a" || "li").length).toBeGreaterThan(0);
    })
})