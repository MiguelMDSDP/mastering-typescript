interface Model {
    id: number;
    createdAt: number;
    updatedAt: number;
}

interface Person extends Model {
    name: string;
    age: number;
}

interface User extends Person {
    email: string;
    password: string;
}


const user: User = {
    id: 1,
    name: 'John',
    age: 21,
    email: 'john@example.com',
    password: '123456',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
}