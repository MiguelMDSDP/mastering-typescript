interface ICourse {
    readonly title: string;
    description?: string;
    price: number;
    evaluation: number;
    comments?: string[];
}

const courses: ICourse = {
    title: 'TypeScript',
    price: 5000,
    evaluation: 10,
}