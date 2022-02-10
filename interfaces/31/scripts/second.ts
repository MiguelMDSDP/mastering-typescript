interface IProduct {
    name: string;
    price: number;
    description?: string;
    createdAt: Date;
}

const productData: IProduct = {
    name: "Programmer p/ Hour",
    price: 150,
    // description: "Work hour price",
    createdAt: new Date(),
}