import { db } from '../../lib/kysely/database';
import { PersonUpdate, Person, NewPerson } from '../../lib/kysely/types'

export const listUsers = async () => {
    let query = db.selectFrom('person');

    const result = await query.selectAll().execute();

    return result;
}