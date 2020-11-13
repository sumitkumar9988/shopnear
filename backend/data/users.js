import bcrypt from 'bcryptjs'
const users=[
    {
        name:'Admin User',
        email:'admin@g.com',
        isAdmin:true,
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Admin User',
        email:'user1@g.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Admin User',
        email:'user2@g.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Admin User',
        email:'user3@g.com',
        password:bcrypt.hashSync('123456',10)
    }
]

export default users;