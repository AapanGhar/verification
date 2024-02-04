import { EntitySchema } from 'typeorm'

const userSchema = new EntitySchema({
    name: 'userSchema1',
    tableName: 'user1',
    synchronize: process.env.SYNC_TABLES === 'true' ? true : false,
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        name: {
            type: 'varchar',
            nullable: false,
        },
        email:{
            type:"varchar",
            nullable:false
        },
        password:{
            type:'varchar',
            nullable:false,

        }


    },

});

export { userSchema };
