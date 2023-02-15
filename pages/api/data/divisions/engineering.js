import engineering from '@/data/Divisions/Engineering';

export default function handler(req, res) {
  res.status( 200 ).json( engineering )
}
