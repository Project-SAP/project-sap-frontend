/**
 * Base API handler to call out to express backend.
 */
export class BaseApiHandler {
    // Only accessible to API. Pages should never need to access these paths directly.
    protected readonly apiPath: string;

    constructor(path: string) {
        this.apiPath = `${process.env.API_BASE_PATH}${path}`;
    }

    /**
     * Generalized api call using library.
     * @param url sub path and or parameters for endpoint
     * @returns Promise of generic JSON object.
     * @type T data model expected to be returned.
     */
    callGet<T>(url?: string): Promise<T> {
        let response: any;

        const completePath = `${this.apiPath}${url ? url : ''}`;

        response = fetch(completePath, {
            // TODO: Abstract out into base reqest object with a request builder
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                if (res.status == 200) {
                    const updatedModel = res.json();
                    // TODO: Ideally, we use generics to cast to data models here
                    return updatedModel;
                }
                throw new Error('Something went wrong');
            })
            .catch((error) => {
                return Promise.reject('API error');
            });

        return response;
    }
}
