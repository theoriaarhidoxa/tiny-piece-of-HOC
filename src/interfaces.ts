export type IUser = {
    [key in 'name']: string;
} & {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

export type ITodo = {
    [key in 'title']: string;
} & {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export interface ChildComponentProps<T, U> {
    data: T;
    dataType: string;
    query: string;
    fieldName: U;
}

