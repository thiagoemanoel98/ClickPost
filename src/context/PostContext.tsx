import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";

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
interface IGeo {
  lat: string;
  lng: string;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

// Post + User data
export interface IPostsUser {
  postId: number;
  userId: number;
  name: string;
  username: string;
  title: string;
  body: string;
}

// Context...
interface IPostsContext {
  posts: IPost[];
  users: IUser[];
  loading: boolean;
  addNewPost: (post: IPost) => {};
  editPost: (data: IPost) => {};
  deletePost: (post: IPost) => {};
}

export const PostsContext = React.createContext<IPostsContext>(
  {} as IPostsContext
);

const PostsKey = "@ClickPosts:Posts";
const UsersKey = "@ClickPosts:Users";

export const PostsProvider: React.FC<IProps> = ({ children }) => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadPosts() {
      const dadosUser = await AsyncStorage.getItem(UsersKey);
      const dadosPost = await AsyncStorage.getItem(PostsKey);

      // existe no Storage? dadosPost && dadosUser
      if (dadosPost && dadosUser) {
        setPosts(JSON.parse(dadosPost));
        setUsers(JSON.parse(dadosUser));

        setLoading(false);
        console.log("Há dados no Async");

        //await AsyncStorage.removeItem(PostsKey);
        //await AsyncStorage.removeItem(UsersKey);
      } else {
        // Carregue novos dados da API
        const response = await api.get<IPost[]>("/posts");
        const response2 = await api.get<IUser[]>("/users");

        await AsyncStorage.setItem(PostsKey, JSON.stringify(response.data))
          .then(() => {
            console.log("Posts salvos com sucesso!");
          })
          .catch(() => {
            console.log("Erro em salvar posts");
          });

        await AsyncStorage.setItem(UsersKey, JSON.stringify(response2.data))
          .then(() => {
            console.log("Usuarios salvos com sucesso!");
          })
          .catch(() => {
            console.log("Erro em salvar usuarios");
          });

        setPosts(response.data);
        setUsers(response2.data);

        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  /**
   * Realiza uma requisição DELETE para a API
   * Caso retorne sucesso (200), a postagem será salva no AsyncStorage
   **/
  const deletePost = async (post: IPost) => {
    api
      .delete("/posts/" + post.id)
      .then(async function (response) {
        if (response.status === 200) {
          const newArr = posts.filter((item) => item.id !== post.id);
          try {
            // Guardar no Async
            await AsyncStorage.setItem(PostsKey, JSON.stringify(newArr));
            alert("Postagem apagada!");
            setPosts(newArr);
          } catch (error) {
            alert("Algo deu errado :( ");
            console.log(error);
          }
        } else {
          alert("Algo deu errado na Requisição (Ver log)");
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /**
   * Realiza uma requisição POST para a API
   * Caso retorne sucesso (200), a postagem modificada será salva no AsyncStorage
   **/
  const editPost = async (data: IPost) => {
    // Na API, só existe registros com id <= 100
    let id_api: number;
    if (data.id > 100) {
      id_api = 1;
    } else {
      id_api = data.id;
    }
    api
      .put(`/posts/${id_api}`, data)
      .then(async function (response) {
        if (response.status == 200) {
          const newArr = posts.map((obj) => {
            if (obj.id === data.id) {
              return data;
            }
            return obj;
          });

          // Guardar no Async
          try {
            await AsyncStorage.setItem(PostsKey, JSON.stringify(newArr));
            alert("Post alterado!");
            setPosts(newArr);
          } catch (error) {
            alert("Algo deu errado :( ");
            console.log(error);
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /**
   * Realiza uma requisição POST para a API
   * Caso retorne sucesso (201), a postagem será salva no AsyncStorage
   **/
  const addNewPost = async (post: IPost) => {
    api
      .post("/posts", post)
      .then(async function (response) {
        if (response.status == 201) {
          // Cadastra o novo post...
          let newObj: IPost[] = [];
          newObj = [...posts, post];

          try {
            // Guarda no Async
            await AsyncStorage.setItem(PostsKey, JSON.stringify(newObj));
            setPosts(newObj);
            alert("Postagem realizada");
          } catch (error) {
            alert("Algo deu errado :( ");
            console.log(error);
          }
        } else {
          alert("Algo deu errado na Requisição (Ver log)");
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <PostsContext.Provider
      value={{ posts: posts, users, loading, addNewPost, editPost, deletePost }}
    >
      {children}
    </PostsContext.Provider>
  );
};
