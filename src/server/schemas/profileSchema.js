import { z } from 'zod';

export const profileSchema = z.object({
  bio: z.string().min(1, 'Bio is required'),
  userId: z.string().min(1, 'User ID is required'),
});