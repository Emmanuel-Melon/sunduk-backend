import { z } from "zod";
import { db } from '../../lib/kysely/database'
import { PersonUpdate, Person, NewPerson } from '../../lib/kysely/types'


const userAttrsSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.any(),
});

export type UserAttrs = z.infer<typeof userAttrsSchema>;

export const createUser = async (userAttrs: UserAttrs): Promise<any> => {

  const result = await db
  .insertInto('person')
  .values({
    first_name: userAttrs.firstName,
    last_name: userAttrs.lastName,
    gender: userAttrs.gender,
    //created_at: new Date(),
    metadata: {
      // @ts-ignore
      login_at: 'now',
      ip: null,
      agent: null,
      plan: 'free'
    }
  })
  .execute();

  return result;
};
