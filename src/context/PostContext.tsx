import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    loading: boolean,
    addNewPost: (post: IPost, user: IUser) => {},
}

export const PostsContext = React.createContext<IPostsContext>(
    {} as IPostsContext,
);

const PostsKey = '@ClickPosts:Posts';
const UsersKey = '@ClickPosts:Users';

export const PostsProvider: React.FunctionComponent<IProps> = ({children}) => {
    const [posts, setPosts] = React.useState<IPost[]>([]);
    const [users, setUsers] = React.useState<IUser[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function loadPosts() {

            const dadosUser = await AsyncStorage.getItem(UsersKey);
            const dadosPost = await AsyncStorage.getItem(PostsKey);            

            // Existe no Storage? dadosPost && dadosUser 
            if(dadosPost && dadosUser) {
                setPosts(JSON.parse(dadosPost));
                setUsers(JSON.parse(dadosUser));
                
                setLoading(false);
                console.log('Há dados no Async');

                //await AsyncStorage.removeItem(PostsKey);
                //await AsyncStorage.removeItem(UsersKey);

            } else {
                // Carregue novos dados da API
                const response = await api.get<IPost[]>("/posts");
                const response2 = await api.get<IUser[]>("/users");

                
                await AsyncStorage.setItem(PostsKey, JSON.stringify(response.data))
                .then( ()=>{
                        console.log('Posts salvos com sucesso!')
                    } )
                    .catch( ()=>{
                        console.log('Erro em salvar posts')
                    } );
                    
                await AsyncStorage.setItem(UsersKey, JSON.stringify(response2.data))
                .then( ()=>{
                        console.log('Usuarios salvos com sucesso!')
                    } )
                    .catch( ()=>{
                        console.log('Erro em salvar usuarios')
                    } );

                setPosts(response.data);
                setUsers(response2.data);
                
                setLoading(false);
            }
            
          }
          loadPosts(); 
    }, []);



    const addNewPost = async (post: IPost, user: IUser) => {
        
        let newObj:IPost[] = [];
        newObj = [... posts, post]
        
        setPosts(newObj); 
        
        //console.log('Objeto cadastrado: ', post);
        try {
            await AsyncStorage.setItem(PostsKey, JSON.stringify(newObj));
            alert('Postagem realizada');
            
        } catch (error) {
            alert('Algo deu errado :(');
            console.log(error);
        }
    }

    return(
        <PostsContext.Provider value={{posts: posts, users, loading, addNewPost }}>
            {children}
        </PostsContext.Provider>
    );
};
