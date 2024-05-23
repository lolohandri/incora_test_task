import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Users from "../pages/users/Users";
import Home from "../pages/Home";
import Posts from "../pages/posts/Posts";
import CreatePost from "../pages/posts/CreatePost";
import PostDescription from "../pages/posts/PostDescription";
import UpdatePost from "../pages/posts/UpdatePost";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
              path: '/',
              element: <Home/>
            },
            {
                path: 'users',
                element: <Users/>,
            },
            {
                path: 'users/:id/posts',
                element: <Posts/>,
            },
            {
                path: 'users/:id/posts/createPost',
                element: <CreatePost/>
            },
            {
                path: 'posts/:id',
                element: <PostDescription/>
            },
            {
                path: 'posts/:id/update',
                element: <UpdatePost/>
            }
        ]
    },

])

export default router