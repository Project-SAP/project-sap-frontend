import { cleanup } from "@testing-library/react";
import { TestApiHandler } from "../../src/api/TestApiHandler";

// Example of testing an api handler
describe('test api handler', () => {

    const api = new TestApiHandler();

    const mockFetch = (body: any) => global.fetch = jest.fn().mockResolvedValue(new Response(JSON.stringify(body)));

    it('should call out to backend using fetch', async () => {

        const mockedReturnedData = {
            message: 'mock data'
        }

        mockFetch(mockedReturnedData);
        jest.spyOn(api, 'callGet');

        const response = api.getDataMessage();

        // Can be more thorough if needed. But main goals is to check outputs of these methods.
        expect(api.callGet).toHaveBeenCalled();
        expect(await response).toEqual(mockedReturnedData);
    });

    afterEach(cleanup);
});
