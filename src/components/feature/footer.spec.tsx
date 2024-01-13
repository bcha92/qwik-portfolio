import { createDOM } from "@builder.io/qwik/testing";
import { describe, test, expect } from "vitest";
import Footer from "./footer";
import { QwikCityMockProvider } from "@builder.io/qwik-city";

describe('Footer component:', async () => {
    const { screen, render } = await createDOM();
    await render(<QwikCityMockProvider><Footer /></QwikCityMockProvider>)

    const linksParent = screen.querySelector(".container");

    test('first component has SVG with href property', () => {
        expect(linksParent?.firstElementChild?.firstElementChild?.nodeName).toBe("svg")
        expect(linksParent?.firstElementChild).toHaveProperty("href")
    })

    test('last component has date string matching locale date string', () => {
        console.log(linksParent?.lastElementChild?.textContent)
        expect(linksParent?.lastElementChild?.textContent).toMatch(/\w+, \w+ \d{1,2}, \d{4}/)
        // REGexp matching locale date string format (i.e. Friday, September 13, 2000)
    })
})