import { z } from "zod";
import { db } from '../../lib/kysely/database'
import { PersonUpdate, Person, NewPerson } from '../../lib/kysely/types'


export const deleteUser = async (userId: any): Promise<any> => {
    const query = db.deleteFrom("person")
    .where('person.id', '=', userId)
    .executeTakeFirst();

    const user = await query;

    console.log(user);
    return user;
}