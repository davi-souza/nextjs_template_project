import { NextApiRequest, NextApiResponse } from 'next';

type ApiFn = (
  req: NextApiRequest,
  res: NextApiResponse
) => void | Promise<void>;

type MethodToFunctionMap = {
  GET: ApiFn;
  POST: ApiFn;
  PUT: ApiFn;
  DELETE: ApiFn;
};

const handleMethodNotAllowed: ApiFn = (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  return res.status(405).end();
};

export const apiFunction = (
  methodFunctionObj: Partial<MethodToFunctionMap> = {}
) => {
  const methodToFunctionMap: MethodToFunctionMap = {
    GET: handleMethodNotAllowed,
    POST: handleMethodNotAllowed,
    PUT: handleMethodNotAllowed,
    DELETE: handleMethodNotAllowed,
    ...methodFunctionObj,
  };
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    try {
      return await (methodToFunctionMap[method] || handleMethodNotAllowed)(
        req,
        res
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'Houve um erro.',
      });
    }
  };
};
