import Club from '@/data/Club/Data';

export default function handler(req, res) {
  res.status(200).json( Club )
}
