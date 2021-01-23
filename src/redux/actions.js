import { CREATE_POST, UPDATE_LIKE } from "./types";

export function createPost(post){
    
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function updateLike(id){
    return {
        type: UPDATE_LIKE,
        id: id
    }
}