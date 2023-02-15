import techdev from '@/data/Divisions/Techdev';

export default function handler(req, res) {
  res.status( 200 ).json( techdev )
}
