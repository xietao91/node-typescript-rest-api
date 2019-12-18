import { Request, Response } from 'express';

export default [
  {
    path:'/',
    method:'get',
    async handler(req: Request, rep: Response) {
      rep.send('hello wold');
    }
  }
];