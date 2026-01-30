import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const healthmessage = "I am very happy, you can start with Me!";
  res.json({ healthmessage });
});

export default router;