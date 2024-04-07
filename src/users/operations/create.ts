import { z } from "zod";
import { db } from '../../lib/kysely/database'
import { PersonUpdate, Person, NewPerson } from '../../lib/kysely/types'


const userAttrsSchema = z.object({
  name: z.string(),
});

export type UserAttrs = z.infer<typeof userAttrsSchema>;

export const createUser = async (userAttrs: UserAttrs): Promise<any> => {

  const result = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston',
    gender: 'woman',
    //created_at: new Date(),
    metadata: {
      // @ts-ignore
      login_at: 'now',
      ip: null,
      agent: null,
      plan: 'free'
    }
  })
  .executeTakeFirst();

  console.log(result);
  return Promise.resolve(userAttrs);
};
