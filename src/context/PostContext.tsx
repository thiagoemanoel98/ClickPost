import React from 'react';

import api from '../services/api';


interface IProps {
    children: React.ReactElement;
}

// Postagens...
export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}

// Usuários...
interface IGeo{
    lat: string,
    lng: string,
}

interface ICompany{
    name: string,
    catchPhrase: string,
    bs: string
}

interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo,
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email:string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany, 
}

// Post + User data
export interface IPostsUser {
    postId: number,
    userId: number,
    name: string,
    username: string,
    title: string;
    body: string;
}

// Context...
interface IPostsContext {
    posts: IPost[],
    users: IUser[],
}

export const PostsContext = React.createContext<IPostsContext>(
    {} as IPostsContext,
);

export const PostsProvider: React.FunctionComponent<IProps> = ({children}) => {
    const [posts, setPosts] = React.useState<IPost[]>([]);
    const [users, setUsers] = React.useState<IUser[]>([]);
    const [postsUsers, setPostsUsers] = React.useState<IPostsUser[]>([]);

    React.useEffect(() => {
        async function loadPosts() {
            const response = await api.get<IPost[]>("/posts");
            setPosts(response.data);
          }
          
          async function loadUsers() {
            const response = await api.get<IUser[]>("/users");
       
            setUsers(response.data); // PAREI AQUII
          }

          loadPosts();
          loadUsers();
    }, []);

    return(
        <PostsContext.Provider value={{posts: posts, users}}>
            {children}
        </PostsContext.Provider>
    );
};
