import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  id: number;
  title: string;
  imagenHome: string;
  imagenHistory: string;
}

const data: Data[] = [
  {
    id: 1,
    title: "Soccer",
    imagenHome: "/soccer.jpg",
    imagenHistory: "/soccer-horizontal.jpg",
  },
  {
    id: 2,
    title: "Basketball",
    imagenHome: "/basketball.jpg",
    imagenHistory: "/basketball-horizontal.jpg",
  },
  {
    id: 3,
    title: "Tennis",
    imagenHome: "/tennis.jpg",
    imagenHistory: "/tennis-horizontal.jpg",
  },
  {
    id: 4,
    title: "Formula 1",
    imagenHome: "/formula-1.jpg",
    imagenHistory: "/formula-1-horizontal.jpg",
  },
  {
    id: 5,
    title: "Karate",
    imagenHome: "/karate.jpg",
    imagenHistory: "/karate-horizontal.jpg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
