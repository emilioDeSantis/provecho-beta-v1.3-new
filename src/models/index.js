// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostType = {
  "ORIGINAL": "ORIGINAL",
  "REMAKE": "REMAKE"
};

const { Chef, Follow, Recipe, Post, Stash, Tip, Like, Comment, Hashtag, Ingredient, Step, PostIngredient } = initSchema(schema);

export {
  Chef,
  Follow,
  Recipe,
  Post,
  Stash,
  Tip,
  Like,
  Comment,
  Hashtag,
  Ingredient,
  PostType,
  Step,
  PostIngredient
};