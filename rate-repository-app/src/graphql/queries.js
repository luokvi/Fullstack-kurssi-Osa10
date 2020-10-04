import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
    edges{
      node {
        id,
        fullName,
        description,
        language,
        stargazersCount,
        forksCount,
        reviewCount,
        ratingAverage,
        ownerAvatarUrl
      }
    }
   }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_SINGLE_REPO = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id,
      fullName,
      description,
      language,
      stargazersCount,
      forksCount,
      reviewCount,
      ratingAverage,
      ownerAvatarUrl,
      url,
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;