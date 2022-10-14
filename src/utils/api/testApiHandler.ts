import { BaseApiHandler } from './baseApiHandler';
import { DataModel } from './models/data.model';

export class TestApiHandler extends BaseApiHandler {
    constructor() {
        super('/test');
    }

    public getDataMessage(): Promise<DataModel> {
        // In a more realistic scenario, a request object will be passed in with additional parameters.
        const response = this.callGet<DataModel>();

        console.log('calling to backend');

        return response;
    }
}
