import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import Header from "./header";

// useNavigate() render error: Qwik Error Code #13

// describe('Header Component:', () => {
//     test('renders on load', async () => {
//         const { screen, render } = await createDOM();
//         await render(<Header />);
//         const header = screen.querySelector(".header") as HTMLElement;
//         expect(header.innerHTML).toContain("About")
//     })
// })