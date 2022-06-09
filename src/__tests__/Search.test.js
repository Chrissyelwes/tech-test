import React from "react";
import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

describe("Search", () => {
    const { asFragment } = render(<Search />)

    test("renders Search component correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});