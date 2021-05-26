/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrgQuery
// ====================================================

export interface OrgQuery_organization_repos_edges_node_licenseInfo {
  __typename: "License";
  /**
   * The license full name specified by <https: // spdx.org/licenses>
   */
  name: string;
}

export interface OrgQuery_organization_repos_edges_node_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OrgQuery_organization_repos_edges_node_repositoryTopics_edges_node_topic {
  __typename: "Topic";
  /**
   * The topic's name.
   */
  name: string;
}

export interface OrgQuery_organization_repos_edges_node_repositoryTopics_edges_node {
  __typename: "RepositoryTopic";
  /**
   * The topic.
   */
  topic: OrgQuery_organization_repos_edges_node_repositoryTopics_edges_node_topic;
}

export interface OrgQuery_organization_repos_edges_node_repositoryTopics_edges {
  __typename: "RepositoryTopicEdge";
  /**
   * The item at the end of the edge.
   */
  node: OrgQuery_organization_repos_edges_node_repositoryTopics_edges_node | null;
}

export interface OrgQuery_organization_repos_edges_node_repositoryTopics {
  __typename: "RepositoryTopicConnection";
  /**
   * A list of edges.
   */
  edges: (OrgQuery_organization_repos_edges_node_repositoryTopics_edges | null)[] | null;
}

export interface OrgQuery_organization_repos_edges_node_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface OrgQuery_organization_repos_edges_node {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The license associated with the repository
   */
  licenseInfo: OrgQuery_organization_repos_edges_node_licenseInfo | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: OrgQuery_organization_repos_edges_node_stargazers;
  /**
   * A list of applied repository-topic associations for this repository.
   */
  repositoryTopics: OrgQuery_organization_repos_edges_node_repositoryTopics;
  /**
   * Returns how many forks there are of this repository in the whole network.
   */
  forkCount: number;
  /**
   * Identifies if the repository is a fork.
   */
  isFork: boolean;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
  /**
   * Identifies when the repository was last pushed to.
   */
  pushedAt: any | null;
  /**
   * The repository's URL.
   */
  homepageUrl: any | null;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: OrgQuery_organization_repos_edges_node_primaryLanguage | null;
}

export interface OrgQuery_organization_repos_edges {
  __typename: "RepositoryEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: OrgQuery_organization_repos_edges_node | null;
}

export interface OrgQuery_organization_repos {
  __typename: "RepositoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of edges.
   */
  edges: (OrgQuery_organization_repos_edges | null)[] | null;
}

export interface OrgQuery_organization {
  __typename: "Organization";
  /**
   * The organization's public profile description.
   */
  description: string | null;
  /**
   * The organization's public profile URL.
   */
  websiteUrl: any | null;
  /**
   * A URL pointing to the organization's public avatar.
   */
  avatarUrl: any;
  /**
   * The organization's public profile name.
   */
  name: string | null;
  /**
   * A list of repositories that the user owns.
   */
  repos: OrgQuery_organization_repos;
}

export interface OrgQuery {
  /**
   * Lookup a organization by login.
   */
  organization: OrgQuery_organization | null;
}

export interface OrgQueryVariables {
  author?: string | null;
  cursor?: string | null;
}
