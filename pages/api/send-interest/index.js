import IntrestedUsers from '../../../models/IntrestedModel';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { eventId, gitHubUsername, email } = req.body;

    // check if gitHubUsername is already in the database
    try {
      // check if gitHubUsername is already in the database
      const user = await IntrestedUsers.findOne({
        gitHubUsername,
        eventId,
      });

      if (user) {
        return res.status(400).json({
          message: 'GitHub username already in the database',
        });
      }

      // check if email is already in the database
      const userEmail = await IntrestedUsers.findOne({
        email,
        eventId,
      });

      if (userEmail) {
        return res.status(400).json({
          message: 'Email already in the database',
        });
      }

      // save the user to the database
      const intrested = new IntrestedUsers({ eventId, gitHubUsername, email });
      await intrested.save();
      res.status(201).json({ message: 'Intrested user saved' });
    } catch (err) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  } else res.status(405).json({ message: 'Method not allowed' });
}
