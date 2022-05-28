import IntrestedUsers from '../../../models/IntrestedModel';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { eventId, gitHubUsername, email } = req.body;
    try {
      const intrested = new IntrestedUsers({ eventId, gitHubUsername, email });
      await intrested.save();
      res.status(201).json({ message: 'Intrested user saved' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
