import { NextApiRequest, NextApiResponse } from 'next';
import { DataModel } from '../../utils/api/models/data.model';
import { TestApiHandler } from '../../utils/api/testApiHandler';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataModel>
) {
    const api = new TestApiHandler();
    res.status(200).json(await api.getDataMessage());
}
