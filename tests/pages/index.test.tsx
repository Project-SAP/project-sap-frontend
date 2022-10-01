import { cleanup, fireEvent, render, RenderResult, screen } from "@testing-library/react";
import IndexPage from '../../src/pages/index';
import TestApiHandler from '../../src/api/TestApiHandler';

/**
 * Example of testing for a page.
 * Normally won't require so many comments as `describe` and `it` blocks should be self explanatory. 
 * TODO: can be removed once tests for actual pages are created
 */
describe('index page', () => {
    // Contains a container of rendered of page
    let renderedPage: RenderResult;

    beforeEach(() => {
        renderedPage = render(<IndexPage />);
    });

    // Bare bones test case. Simply validate that whole page is loaded.
    it('should successfully load', async () => {
        expect(screen).toBeTruthy();
    });

    // Simply validate that components exists. Functionality should be tested within each component individually.
    describe('when page is loaded', () => {
        it('should have a header', () => {
            const headerElement = renderedPage.container.getElementsByClassName('header')?.item(0);

            expect(headerElement).toBeTruthy();
        });

        it('should have a footer', () => {
            const footerElement = renderedPage.container.getElementsByClassName('footer')?.item(0);

            expect(footerElement).toBeTruthy();
        });

    });

    // Example of page specific functionality.
    describe('when clicking on button', () => {
        it('should call api', async () => {
            // Mock API call
            const mockResponseMessage = 'test message';
            jest.spyOn(TestApiHandler.prototype, 'getDataMessage')
                .mockImplementation(() => Promise.resolve(mockResponseMessage));

            const buttonElement = await screen.findByTestId('api-button');

            // Button should be rendered on page
            expect(buttonElement).toBeTruthy();

            // Click button, triggering API call
            fireEvent.click(buttonElement);

            // Validate that message appeared
            const responseMessageElement = await screen.findByText(mockResponseMessage);
            expect(responseMessageElement).toBeInTheDocument();
            expect(responseMessageElement.textContent).toEqual(mockResponseMessage);
        });
    });

    afterEach(cleanup);
});
