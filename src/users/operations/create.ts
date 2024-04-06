import { z } from "zod";

const userAttrsSchema = z.object({
  name: z.string(),
});

export type UserAttrs = z.infer<typeof userAttrsSchema>;

export const createUser = (userAttrs: UserAttrs): Promise<any> => {
  return Promise.resolve(userAttrs);
};
