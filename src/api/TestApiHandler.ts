import BaseApiHandler from './BaseApiHandler';
import { DataModel } from './models/dataModel';

class TestApiHandler extends BaseApiHandler {
    constructor() {
        super('/test');
    }

    public getDataMessage(): Promise<DataModel> {
        // In a more realistic scenario, a request object will be passed in with additional parameters.
        const response = this.callGet().then((res) => {
            return res as DataModel;
        });

        return response;
    }
}

export default TestApiHandler;
