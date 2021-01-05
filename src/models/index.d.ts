import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostType {
  ORIGINAL = "ORIGINAL",
  REMAKE = "REMAKE"
}

export declare class Step {
  readonly step: string;
  constructor(init: ModelInit<Step>);
}

export declare class PostIngredient {
  readonly quantity: string;
  readonly type: string;
  constructor(init: ModelInit<PostIngredient>);
}

export declare class Chef {
  readonly id: string;
  readonly username: string;
  readonly image: string;
  readonly biography: string;
  readonly n_followers?: number;
  readonly n_following?: number;
  readonly n_remakes?: number;
  readonly followers?: (Follow | null)[];
  readonly following?: (Follow | null)[];
  readonly recipes?: (Recipe | null)[];
  readonly posts?: (Post | null)[];
  constructor(init: ModelInit<Chef>);
  static copyOf(source: Chef, mutator: (draft: MutableModel<Chef>) => MutableModel<Chef> | void): Chef;
}

export declare class Follow {
  readonly id: string;
  readonly followingID: string;
  readonly followerID: string;
  constructor(init: ModelInit<Follow>);
  static copyOf(source: Follow, mutator: (draft: MutableModel<Follow>) => MutableModel<Follow> | void): Follow;
}

export declare class Recipe {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly serves: number;
  readonly cook_time: number;
  readonly procedure?: (Step | null)[];
  readonly n_tips?: number;
  readonly chefID: string;
  readonly postID?: string;
  readonly chef: Chef;
  constructor(init: ModelInit<Recipe>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly caption: string;
  readonly image: string;
  readonly type: PostType | keyof typeof PostType;
  readonly createdAt: string;
  readonly n_likes?: number;
  readonly n_comments?: number;
  readonly n_tips?: number;
  readonly rating?: number;
  readonly chefID: string;
  readonly hashtags?: (string | null)[];
  readonly ingredientList?: (string | null)[];
  readonly ingredients?: (PostIngredient | null)[];
  readonly chef: Chef;
  readonly recipe?: Recipe;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Stash {
  readonly id: string;
  readonly createdAt: string;
  readonly chefID: string;
  readonly postID: string;
  readonly chef: Chef;
  readonly post: Post;
  constructor(init: ModelInit<Stash>);
  static copyOf(source: Stash, mutator: (draft: MutableModel<Stash>) => MutableModel<Stash> | void): Stash;
}

export declare class Tip {
  readonly id: string;
  readonly createdAt: string;
  readonly text: string;
  readonly chefID: string;
  readonly recipeID: string;
  readonly postID: string;
  readonly chef: Chef;
  readonly recipe: Recipe;
  readonly post: Post;
  readonly remake: Post;
  constructor(init: ModelInit<Tip>);
  static copyOf(source: Tip, mutator: (draft: MutableModel<Tip>) => MutableModel<Tip> | void): Tip;
}

export declare class Like {
  readonly id: string;
  readonly createdAt: string;
  readonly chefID: string;
  readonly postID: string;
  readonly chef: Chef;
  readonly post: Post;
  constructor(init: ModelInit<Like>);
  static copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

export declare class Comment {
  readonly id: string;
  readonly createdAt: string;
  readonly text: string;
  readonly chefID: string;
  readonly postID: string;
  readonly chef: Chef;
  readonly post: Post;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class Hashtag {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Hashtag>);
  static copyOf(source: Hashtag, mutator: (draft: MutableModel<Hashtag>) => MutableModel<Hashtag> | void): Hashtag;
}

export declare class Ingredient {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Ingredient>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient>) => MutableModel<Ingredient> | void): Ingredient;
}