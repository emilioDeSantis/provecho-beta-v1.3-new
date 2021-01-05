/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncChefs = /* GraphQL */ `
  query SyncChefs(
    $filter: ModelChefFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChefs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChef = /* GraphQL */ `
  query GetChef($id: ID!) {
    getChef(id: $id) {
      id
      username
      image
      biography
      n_followers
      n_following
      n_remakes
      followers {
        items {
          id
          followingID
          followerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      following {
        items {
          id
          followingID
          followerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      recipes {
        items {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      posts {
        items {
          id
          title
          caption
          image
          type
          createdAt
          n_likes
          n_comments
          n_tips
          chefID
          hashtags
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listChefs = /* GraphQL */ `
  query ListChefs(
    $filter: ModelChefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRecipes = /* GraphQL */ `
  query SyncRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecipes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        image
        serves
        cook_time
        procedure {
          step
        }
        n_tips
        chefID
        postID
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      title
      image
      serves
      cook_time
      procedure {
        step
      }
      n_tips
      chefID
      postID
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        image
        serves
        cook_time
        procedure {
          step
        }
        n_tips
        chefID
        postID
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        chefID
        hashtags
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      caption
      image
      type
      createdAt
      n_likes
      n_comments
      n_tips
      chefID
      hashtags
      chef {
        id
        username
        image
        biography
        n_followers
        n_following
        n_remakes
        followers {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        recipes {
          nextToken
          startedAt
        }
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      recipe {
        id
        title
        image
        serves
        cook_time
        procedure {
          step
        }
        n_tips
        chefID
        postID
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        caption
        image
        type
        createdAt
        n_likes
        n_comments
        n_tips
        chefID
        hashtags
        chef {
          id
          username
          image
          biography
          n_followers
          n_following
          n_remakes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipe {
          id
          title
          image
          serves
          cook_time
          n_tips
          chefID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFollows = /* GraphQL */ `
  query SyncFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        followingID
        followerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      followingID
      followerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followingID
        followerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStashes = /* GraphQL */ `
  query SyncStashes(
    $filter: ModelStashFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStashes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        chefID
        recipeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStash = /* GraphQL */ `
  query GetStash($id: ID!) {
    getStash(id: $id) {
      id
      chefID
      recipeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listStashs = /* GraphQL */ `
  query ListStashs(
    $filter: ModelStashFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStashs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chefID
        recipeID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTips = /* GraphQL */ `
  query SyncTips(
    $filter: ModelTipFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTips(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        text
        chefID
        recipeID
        postID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTip = /* GraphQL */ `
  query GetTip($id: ID!) {
    getTip(id: $id) {
      id
      text
      chefID
      recipeID
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTips = /* GraphQL */ `
  query ListTips(
    $filter: ModelTipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        chefID
        recipeID
        postID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        chefID
        postID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      chefID
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chefID
        postID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        text
        chefID
        postID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      text
      chefID
      postID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        chefID
        postID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHashtags = /* GraphQL */ `
  query SyncHashtags(
    $filter: ModelHashtagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHashtags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHashtag = /* GraphQL */ `
  query GetHashtag($id: ID!) {
    getHashtag(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listHashtags = /* GraphQL */ `
  query ListHashtags(
    $filter: ModelHashtagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHashtags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
