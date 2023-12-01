import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import Carousel from "./carousel";
import FourOhFour from "../404/404";
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

describe('Carousel Component without:', () => {
    test('project should render 404', async () => {
        const { screen, render } = await createDOM();
        await render(<Carousel />)
        // console.log(screen.querySelector(".four-oh-four"))
        // expect(screen.className);
    })
    
    test('at least one project array should also render 404', async () => {
        const { screen, render } = await createDOM();
        // await render(<Carousel projects={[]} />);
    })
});

describe('Carousel Component with one project:', async () => {
    const { screen, render } = await createDOM();
    await render(<Carousel projects={projectMock.slice(0, 1)} />);
    
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
    await render(<Carousel projects={projectMock} />);

    test('renders correct name on first project', async () => {
        expect(screen.innerHTML).toContain(projectMock[0].name);
    })

    test('previous button is disabled when on first component', async () => {
        const prev = screen.querySelector(".previous");
        expect(prev?.className).toContain("disabled");
    })

    test('renders correct name on second project', async () => {
        await userEvent(".next", "click");
        expect(screen.innerHTML).toContain(projectMock[1].name);
    })

    test('next button is disabled when on last component', async () => {
        const next = screen.querySelector(".next");
        expect(next?.className).toContain("disabled");
    })
});