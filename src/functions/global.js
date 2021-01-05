//Copyright 2020, Provecho, All rights reserved.

import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation, useNavigationBuilder, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import style from '../style';
import Amplify, { Storage } from 'aws-amplify'
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Stash, Follow } from '../models'
import 'react-native-get-random-values';
import { useUser, useSetUser } from '../context'
import { v4 as uuidv4 } from 'uuid';
import * as storage from './storage'


import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

export const toArray = (text) => {
    text = text.replace('  ', ' ')
    const array = text.split(' ')
    let new_array = [] 
    array.map(item => {
        if (item != '') {
            new_array.push(item)
        }
    })
    return new_array
}

export const format_tri_posts = (posts, is_tri) => {
const n = is_tri ? 3 : 2;
    let tri_post = []
    let tri_posts = []
    for (var i = 0; i < posts.length; i++) {
        tri_post.push(posts[i])
        if((i+1)%n==0){
            const tri_post_with_key = {key: uuidv4(),tri_post}
            tri_posts.push(tri_post_with_key)
            tri_post = []
        }
    }
    if(tri_post.length!=0){
        const tri_post_with_key = {key: uuidv4(),tri_post}
        tri_posts.push(tri_post_with_key)    
    }
    return tri_posts
}

export const format_hashtags = (hashtags) => {
    const hashtags_with_key = hashtags.map((hashtag) => {
        hashtag.key = uuidv4()
        return hashtag
    })
    return hashtags_with_key
}

export const go_to_recipe = async(post,user_id,navigation) => {
    const db_data = await DataStore.query(Chef, post.recipe.chefID);
    const chef = await storage.format_chef(db_data)
    const unformatted_recipe = await storage.format_chef(post.recipe)
    const recipe = await format_recipe(unformatted_recipe,user_id)
    navigation.navigate('recipe',{recipe, chef})
}

//do these more efficiently? databasewise use the relationships more!
export const format_chef = async (item, user_id) => {
    const predicate = c => c.followerID("eq", user_id).followingID("eq", item.id)
    const follow = await DataStore.query(Follow, predicate);
    const is_following = follow.length > 0 ? true : false;
    const chef = {
        ...item,
        is_following,
    }
    return chef
}
const getChefs = async (list, user_id) => {
    return Promise.all(list.map(chef => format_chef(chef, user_id)))
}
export const format_chefs = async (list, user_id) => {
    const chefs = await getChefs(list, user_id).then((data) => {
        return data
    })
    return chefs
}

export const unfollow = async (followerID, followingID) => {
    const follower = await DataStore.query(Chef, followerID)
    const following = await DataStore.query(Chef, followingID)
    await DataStore.save(
        Chef.copyOf(follower, updated => {
            updated.n_following = post.n_following - 1
        })
    )
    await DataStore.save(
        Chef.copyOf(following, updated => {
            updated.n_followers = post.n_followers - 1
        })
    )
    const predicate = c => c.followerID("eq", followerID).followingID("eq", followingID)
    const db_data = await DataStore.query(Follow, predicate);
    const follow = db_data[0]
    DataStore.delete(follow)
}

export const follow = async (followerID, followingID) => {
    const follower = await DataStore.query(Chef, followerID)
    const following = await DataStore.query(Chef, followingID)
    await DataStore.save(
        Chef.copyOf(follower, updated => {
            updated.n_following = post.n_following + 1
        })
    )
    await DataStore.save(
        Chef.copyOf(following, updated => {
            updated.n_followers = post.n_followers + 1
        })
    )
    await DataStore.save(
        new Follow({
            followingID,
            followerID,
        })
    )
}

export const like = async (chefID, postID) => {
    const chef = await DataStore.query(Chef, chefID)
    const post = await DataStore.query(Post, postID)
    await DataStore.save(
        Post.copyOf(post, updated => {
            updated.n_likes = post.n_likes + 1
            updated.rating = post.rating + 1
        })
    )
    await DataStore.save(
        new Like({
            chefID,
            postID,
            chef,
            post,
        })
    )
}

export const comment = async (chefID, postID, text) => {
    const chef = await DataStore.query(Chef, chefID)
    const post = await DataStore.query(Post, postID)
    await DataStore.save(
        Post.copyOf(post, updated => {
            updated.n_comments = post.n_comments + 1
            updated.rating = post.rating + 5
        })
    )
    await DataStore.save(
        new Comment({
            chefID,
            postID,
            text,
            chef,
            post,
        })
    )
}

export const unlike = async (chefID, postID) => {
    const post = await DataStore.query(Post, postID)
    await DataStore.save(
        Post.copyOf(post, updated => {
            updated.n_likes = post.n_likes - 1
            updated.rating = post.rating - 1
        })
    )
    const predicate = c => c.chefID("eq", chefID).postID("eq", postID)
    const db_data = await DataStore.query(Like, predicate);
    const like = db_data[0]
    DataStore.delete(like)
}

export const stash = async (chefID, postID) => {
    const chef = await DataStore.query(Chef, chefID)
    const post = await DataStore.query(Post, postID)
    await DataStore.save(
        Post.copyOf(post, updated => {
            updated.rating = post.rating + 20
        })
    )
    await DataStore.save(
        new Stash({
            chefID,
            postID,
            chef,
            post,
        })
    )
}

export const unstash = async (chefID, postID) => {
    const predicate = c => c.chefID("eq", chefID).postID("eq", postID)
    const db_data = await DataStore.query(Stash, predicate);
    const stash = db_data[0]
    DataStore.delete(stash)
}

//do these more efficiently?
export const format_post = async (item, user_id) => {
    const predicate = c => c.chefID("eq", user_id).postID("eq", item.id)
    const like = await DataStore.query(Like, predicate);
    const is_liked = like.length > 0 ? true : false;
    const post = {
        ...item,
        is_liked,
    }
    return post
}
const getPosts = async (list, user_id) => {
    return Promise.all(list.map(post => format_post(post, user_id)))
}
export const format_posts = async (list, user_id) => {
    const posts = await getPosts(list, user_id).then((data) => {
        return data
    })
    return posts
}

export const format_recipe = async (item, user_id) => {
    const predicate = c => c.chefID("eq", user_id).postID("eq", item.postID)
    const stash = await DataStore.query(Stash, predicate);
    const is_stashed = stash.length > 0 ? true : false;
    const recipe = {
        ...item,
        is_stashed,
    }
    return recipe
}