import design from '@/data/Divisions/Design';

export default function handler(req, res) {
  res.status( 200 ).json( design )
}
