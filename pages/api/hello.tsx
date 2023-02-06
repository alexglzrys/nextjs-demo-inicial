// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

// Si no se va a extender, mejor usar un type y no una interfaz
type Data = {
  name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
