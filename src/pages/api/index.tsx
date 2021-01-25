import { apiFunction } from '@/utils/api';

export default apiFunction({
  GET: (_req, res) => {
    return res.status(200).json({ data: '' });
  },
});
