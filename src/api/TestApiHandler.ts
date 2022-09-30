class TestApiHandler {
    // Only accessible to API. Pages should never need to access these paths directly.
    private readonly apiPath = '/test'

    /**
     * Generalized api call using `fetch`
     * @param request Optional request body
     * @returns Response object
     */
    async call(request?: Request): Promise<Response> {
        let response: Response

        response = await fetch(`${process.env.API_BASE_PATH}${this.apiPath}`, {
            // TODO: Abstract out into base reqest object with a request builder
            method: 'get',
        });

        return response
    }

    // Functions that pages will directly call.
    // Note that return type is a promise. This means the call needs to be prefaced with "await".
    public async getDataMessage(): Promise<string> {
        const res = await this.call();

        // Get Json from response
        let message = res.json();

        return message;
    }
}

export default TestApiHandler
