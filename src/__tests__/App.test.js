import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe("App", () => {
    const { asFragment } = render(<App />)

    test("renders App component correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});