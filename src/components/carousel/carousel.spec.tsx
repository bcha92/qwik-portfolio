import { createDOM } from "@builder.io/qwik/testing";
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

// useNavigate() render error: Qwik Error Code #13

// describe('Carousel Component without a project:', () => {
//     test('should render 404 on undefined project', async () => {
//         const { screen, render } = await createDOM();
//         await render(<Carousel />)
//         // expect()
//     })
    
//     test('should also render 404 if project array is empty', async () => {
//         const { screen, render } = await createDOM();
//         await render(<Carousel projects={[]} />);
//         // expect()
//     })
// });

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