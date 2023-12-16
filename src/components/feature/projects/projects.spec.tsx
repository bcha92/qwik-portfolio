import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import Projects from "./projects";

test("Projects Page Comopnent should not be visible if hidden", async () => {
    const { screen, render } = await createDOM();
    await render(<Projects isHidden={true} />);
    console.log(screen.querySelector("div")?.className)
    expect(screen.querySelector(".projects")?.className).toContain("hidden");
})

describe('Projects Page Component:', async () => {
    const { screen, render } = await createDOM();
    await render(<Projects />);
    const projectsPage = screen.querySelector(".projects");

    test('should contain <h2> Header element', () => {
        expect(projectsPage?.firstElementChild?.tagName).toContain("H2");
    })

    test('should contain <Carousel /> element', () => {
        expect(projectsPage?.lastElementChild?.className).toContain("carousel");
    })
})