/**
 * Generic function to mock fetch calls to some API. Only useful for testing pages or page components.
 * @param body Json response body.
 */
export function mockFetch<T>(body: T) {
    global.fetch = jest
        .fn()
        .mockResolvedValue(new Response(JSON.stringify(body)));
}
