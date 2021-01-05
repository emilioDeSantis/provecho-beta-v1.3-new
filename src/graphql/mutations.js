/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChef = /* GraphQL */ `
  mutation CreateChef(
    $input: CreateChefInput!
    $condition: ModelChefConditionInput
  ) {
    createChef(input: $input, condition: $condition) {
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
export const updateChef = /* GraphQL */ `
  mutation UpdateChef(
    $input: UpdateChefInput!
    $condition: ModelChefConditionInput
  ) {
    updateChef(input: $input, condition: $condition) {
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
export const deleteChef = /* GraphQL */ `
  mutation DeleteChef(
    $input: DeleteChefInput!
    $condition: ModelChefConditionInput
  ) {
    deleteChef(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
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
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow(
    $input: UpdateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    updateFollow(input: $input, condition: $condition) {
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
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
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
export const createStash = /* GraphQL */ `
  mutation CreateStash(
    $input: CreateStashInput!
    $condition: ModelStashConditionInput
  ) {
    createStash(input: $input, condition: $condition) {
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
export const updateStash = /* GraphQL */ `
  mutation UpdateStash(
    $input: UpdateStashInput!
    $condition: ModelStashConditionInput
  ) {
    updateStash(input: $input, condition: $condition) {
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
export const deleteStash = /* GraphQL */ `
  mutation DeleteStash(
    $input: DeleteStashInput!
    $condition: ModelStashConditionInput
  ) {
    deleteStash(input: $input, condition: $condition) {
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
export const createTip = /* GraphQL */ `
  mutation CreateTip(
    $input: CreateTipInput!
    $condition: ModelTipConditionInput
  ) {
    createTip(input: $input, condition: $condition) {
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
export const updateTip = /* GraphQL */ `
  mutation UpdateTip(
    $input: UpdateTipInput!
    $condition: ModelTipConditionInput
  ) {
    updateTip(input: $input, condition: $condition) {
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
export const deleteTip = /* GraphQL */ `
  mutation DeleteTip(
    $input: DeleteTipInput!
    $condition: ModelTipConditionInput
  ) {
    deleteTip(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createHashtag = /* GraphQL */ `
  mutation CreateHashtag(
    $input: CreateHashtagInput!
    $condition: ModelHashtagConditionInput
  ) {
    createHashtag(input: $input, condition: $condition) {
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
export const updateHashtag = /* GraphQL */ `
  mutation UpdateHashtag(
    $input: UpdateHashtagInput!
    $condition: ModelHashtagConditionInput
  ) {
    updateHashtag(input: $input, condition: $condition) {
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
export const deleteHashtag = /* GraphQL */ `
  mutation DeleteHashtag(
    $input: DeleteHashtagInput!
    $condition: ModelHashtagConditionInput
  ) {
    deleteHashtag(input: $input, condition: $condition) {
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
