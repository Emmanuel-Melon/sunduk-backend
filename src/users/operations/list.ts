import { db } from '../../lib/kysely/database'
import { PersonUpdate, Person, NewPerson } from '../../lib/kysely/types'

export const listUsers = async () => {
    let query = db.selectFrom('person');

    const result = await query.selectAll().execute();

    console.log(result);
    return [
        {
            id: 1,
            name: "Trevor",
            description: "Hello, world",
            members: 15,
            cycleDuration: "2 weeks",
            nextPayout: "April 15th",
            contributionAmount: 200,
            payoutAmount: 3000
        },
        {
            id: 2,
            name: "Eman",
            description: "Hello, world",
            members: 15,
            cycleDuration: "2 weeks",
            nextPayout: "April 15th",
            contributionAmount: 200,
            payoutAmount: 3000
        }
    ];
}