import core from '@/data/Divisions/Core';

export default function handler(req, res) {
  res.status( 200 ).json( core )
}
