import Club from '@/data/Club/ClubLanding';

export default function handler(req, res) {
  res.status(200).json( Club )
}
