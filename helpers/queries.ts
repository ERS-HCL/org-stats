import { gql } from "graphql-request";

export const orgQuery = gql`
  query OrgQuery($author: String = "ERS-HCL", $cursor: String) {
    organization(login: $author) {
      description
      websiteUrl
      avatarUrl
      name
      repos: repositories(
        first: 100
        orderBy: { field: UPDATED_AT, direction: DESC }
        privacy:PUBLIC
        after: $cursor
      ) {
        totalCount
        edges {
          cursor
          node {
            name
            descriptionHTML
            licenseInfo {
              name
            }
            stargazers(first: 50) {
              totalCount
            }
            repositoryTopics(first: 20) {
              edges {
                node {
                  topic {
                    name
                  }
                }
              }
            }
            forkCount
            isFork
            createdAt
            updatedAt
            pushedAt
            homepageUrl
            url
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export const otherQuery = gql`
  query OtherQuery {
    all: search(query: "stars:>50000", type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
              avatarUrl
            }
            url
            description
            descriptionHTML
            primaryLanguage {
              name
              color
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
    typescript: search(
      query: "stars:>3000 language:TypeScript"
      type: REPOSITORY
      first: 10
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
              avatarUrl
            }
            url
            description
            descriptionHTML
            primaryLanguage {
              name
              color
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
    css: search(
      query: "stars:>3000 language:CSS"
      type: REPOSITORY
      first: 10
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
              avatarUrl
            }
            url
            description
            descriptionHTML
            primaryLanguage {
              name
              color
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
    html: search(
      query: "stars:>3000 language:HTML"
      type: REPOSITORY
      first: 10
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
              avatarUrl
            }
            url
            description
            descriptionHTML
            primaryLanguage {
              name
              color
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
    javascript: search(
      query: "stars:>3000 language:JavaScript"
      type: REPOSITORY
      first: 10
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
              avatarUrl
            }
            url
            description
            descriptionHTML
            primaryLanguage {
              name
              color
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
    java: search(
      query: "stars:>3000 language:Java"
      type: REPOSITORY
      first: 10
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
              avatarUrl
            }
            url
            description
            descriptionHTML
            primaryLanguage {
              name
              color
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;