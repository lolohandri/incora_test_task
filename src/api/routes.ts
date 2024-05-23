import {User} from "../models/users/User";
import {Post} from "../models/posts/Post";
import {PostDto} from "../models/posts/PostDto";
import {Comment} from "../models/comments/Comment";
import {PutPostDto} from "../models/posts/PutPostDto";


const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getAllUsers = () : Promise<User[]> => {
    return fetch(`${BASE_URL}/users`, {
        method:"GET",
        headers: {
            "ContentType": "application/json",
        }
    })
        .then(res => {
            if(res.ok){
                return res.json()
            }
            return []
        })
        .catch(err => {
            console.log(err.message)
        })
}

export const getAllComments = (postId: number) : Promise<Comment[]> => {
    return fetch(`${BASE_URL}/comments?postId=${postId}`, {
        method:"GET",
        headers: {
            "ContentType": "application/json",
        }
    })
        .then(res => {
            if(res.ok){
                return res.json()
            }
            return []
        })
        .catch(err => {
            console.log(err.message)
        })
}


export const getPostById = (id: number) : Promise<Post> => {
    return fetch(`${BASE_URL}/posts/${id}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return []
        })
        .catch(err => {
            console.log(err.message)
        })
}

export const createPost = (body: PostDto) : Promise<Post> => {
    return fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return []
        })
        .catch(err => {
            console.log(err.message)
        })
}

export const getPostsByUserId = (userId: number) : Promise<Post[]> => {
    return fetch(`${BASE_URL}/posts?` + new URLSearchParams({userId: userId.toString()}))
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return []
        })
        .catch(err => {
            console.log(err.message)
        })
}

export const deletePost = (id: number) => {
    return fetch(`${BASE_URL}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        }

    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return []
        })
        .catch(err => {
            console.log(err.message)
        })
}

export const putPost = (body: PutPostDto) => {
    return fetch(`${BASE_URL}/posts/${body.id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json"
        }

    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return []
        })
        .catch(err => {
            console.log(err.message)
        })
}