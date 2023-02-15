import growth from '@/data/Divisions/Growth';

export default function handler(req, res) {
  res.status( 200 ).json( growth )
}
