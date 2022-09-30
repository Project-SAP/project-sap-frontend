import { render, screen } from "@testing-library/react";
import IndexPage from './../../pages/index';

describe('index page', () => {

    beforeEach(() => {
        render(<IndexPage />);
    });

    it('should successfully load', async () => {
        expect(screen).toBeTruthy();
    });

    it('should have a header', () => {
        // TODO: Search for header element
        fail();
    });

    it('should have a footer', () => {
        // TODO: Search for footer element
        fail();
    });

    it('should call api once button is pushed', () => {
        // TODO: Mock frontend api calls
        fail();
    });
});
