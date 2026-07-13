import { Router, Request, Response } from 'express';

const router = Router();

const users = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `User ${i + 1}`, email: `user${i + 1}@example.com` }));

router.get('/', (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const size = parseInt(req.query.size as string) || 10;
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  const resultUsers = users.slice(startIndex, endIndex);
  res.json({ page, size, total: users.length, users: resultUsers });
});

export { router as userRouter };