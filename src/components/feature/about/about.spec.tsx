import { createDOM } from "@builder.io/qwik/testing";
import { QwikCityMockProvider } from "@builder.io/qwik-city";
import { describe, test, expect } from "vitest";
import About from "../about/about";

test('About Page Component should not be visible if marked hidden', async () => {
    const { screen, render } = await createDOM();
    await render(<QwikCityMockProvider><About isHidden={true} /></QwikCityMockProvider>);
    expect(screen.querySelector(".about")?.className).toContain("hidden");
})

describe('About Page Component:', async () => {
    const { screen, render } = await createDOM();
    await render(<QwikCityMockProvider><About /></QwikCityMockProvider>);
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

    test('should contain external links container with at least one child button', () => {
        const externalLinks = aboutPage?.querySelector(".external-links");
        expect(externalLinks).toBeDefined();
        expect(externalLinks?.querySelectorAll("a" || "button").length).toBeGreaterThan(0);
    })
})