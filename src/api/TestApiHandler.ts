class TestApiHandler {
    // Only accessible to API. Pages should never need to access these paths directly.
    private readonly apiPath = '/test'

    /**
     * Generalized api call using `fetch`
     * @param requestObject Optional request body
     * @returns Response object
     * TODO: Probably move to generalized ApiHandler class
     */
    async call(requestObject?: any): Promise<Response> {
        let response: Response;

        response = await fetch(`${process.env.API_BASE_PATH}${this.apiPath}`, {
            // TODO: Abstract out into base reqest object with a request builder
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestObject),
        })
            .then((res) => {
                if (res.ok) {
                    return res;
                }
                throw new Error('Something went wrong');
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(JSON.stringify(error));
            });

        return response;
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
