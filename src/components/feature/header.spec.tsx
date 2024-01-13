import { createDOM } from "@builder.io/qwik/testing";
import { QwikCityMockProvider } from "@builder.io/qwik-city";
import { describe, test, expect } from "vitest";
import Header from "./header";

describe('Header component:', async () => {
    const { screen, render } = await createDOM();
    await render(<QwikCityMockProvider><Header /></QwikCityMockProvider>)
    const header = screen.querySelector("header");

    test('should contain at least one Link element', () => {
        expect(header?.firstElementChild?.firstElementChild?.tagName).toBe("A");
    })
})