import { createDOM } from "@builder.io/qwik/testing";
import { QwikCityMockProvider } from "@builder.io/qwik-city";
import { describe, test, expect } from "vitest";
import Carousel from "./carousel";
import type { ExternalInfoProps } from "../SchemaList";

const projectMock: ExternalInfoProps[] = [
    {
        id: "A",
        name: "Example 1",
    },
    {
        id: "B",
        name: "Example 2",
    }
];

test('Carousel Component with no project should render 404 page:', async () => {
    const { screen, render } = await createDOM();
    await render(<QwikCityMockProvider><Carousel /></QwikCityMockProvider>);
    const fourOhFour = screen.querySelector(".four-oh-four");
    expect(fourOhFour?.firstChild?.nodeName).toContain("H2")
})

test('Carousel Component with empty project array should render 404 page:', async () => {
    const { screen, render } = await createDOM();
    await render(<QwikCityMockProvider><Carousel projects={[]} /></QwikCityMockProvider>);
    const fourOhFour = screen.querySelector(".four-oh-four");
    expect(fourOhFour?.firstChild?.nodeName).toContain("H2")
})

describe('Carousel Component with one project:', async () => {
    const { screen, render } = await createDOM();
    await render(<QwikCityMockProvider>
        <Carousel projects={projectMock.slice(0, 1)} />
    </QwikCityMockProvider>);
    
    test('renders correct name on project', async () => {
        expect(screen.innerHTML).toContain(projectMock[0].name);
    })

    test('all buttons are disabled', async () => {
        const prev = screen.querySelector(".previous");
        expect(prev?.className).toContain("disabled");
        const next = screen.querySelector(".next");
        expect(next?.className).toContain("disabled");
    })

});

describe('Carousel Component with at least two projects:', async () => {
    const { screen, render, userEvent } = await createDOM();
    await render(<QwikCityMockProvider>
        <Carousel projects={projectMock} />
    </QwikCityMockProvider>);
    const prev = screen.querySelector(".previous");
    const next = screen.querySelector(".next");
    
    test('renders card component between the buttons', () => {
        expect(screen.querySelector("a")?.className).toContain("card");
    })

    test('renders correct name on first project', () => {
        expect(screen.innerHTML).toContain(projectMock[0].name);
    })

    test('previous button is disabled when on first component', () => {
        expect(prev?.className).toContain("disabled");
    })

    test('next button is not disabled on first component', () => {
        expect(next?.className).not.toContain("disabled");
    })

    test('renders correct name on second project', async () => {
        await userEvent(".next", "click");
        expect(screen.innerHTML).toContain(projectMock[1].name);
    })

    test('previous button is not disabled on second component', () => {
        expect(prev?.className).not.toContain("disabled");
    })

    test('next button is disabled when on last component', () => {
        expect(next?.className).toContain("disabled");
    })
});