import { z } from "zod";
import { db } from "../../lib/kysely/database";
import { PersonUpdate, Person, NewPerson } from "../../lib/kysely/types";

const sundukAttrsSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.any(),
});

export type SundukAttrs = z.infer<typeof sundukAttrsSchema>;

export const createSunduk = async (sundukAttrs: SundukAttrs): Promise<any> => {
  return {};
};
