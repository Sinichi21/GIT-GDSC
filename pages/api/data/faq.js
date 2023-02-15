import Faq from '@/data/Faq/Faq';

export default function handler(req, res) {
  res.status(200).json( Faq )
}
