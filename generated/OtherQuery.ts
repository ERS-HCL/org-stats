/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OtherQuery
// ====================================================

export interface OtherQuery_all_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface OtherQuery_all_edges_node_Repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the owner's public avatar.
   */
  avatarUrl: any;
}

export interface OtherQuery_all_edges_node_Repository_primaryLanguage {
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

export interface OtherQuery_all_edges_node_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OtherQuery_all_edges_node_Repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: OtherQuery_all_edges_node_Repository_owner;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: OtherQuery_all_edges_node_Repository_primaryLanguage | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: OtherQuery_all_edges_node_Repository_stargazers;
}

export type OtherQuery_all_edges_node = OtherQuery_all_edges_node_App | OtherQuery_all_edges_node_Repository;

export interface OtherQuery_all_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: OtherQuery_all_edges_node | null;
}

export interface OtherQuery_all {
  __typename: "SearchResultItemConnection";
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * A list of edges.
   */
  edges: (OtherQuery_all_edges | null)[] | null;
}

export interface OtherQuery_typescript_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface OtherQuery_typescript_edges_node_Repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the owner's public avatar.
   */
  avatarUrl: any;
}

export interface OtherQuery_typescript_edges_node_Repository_primaryLanguage {
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

export interface OtherQuery_typescript_edges_node_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OtherQuery_typescript_edges_node_Repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: OtherQuery_typescript_edges_node_Repository_owner;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: OtherQuery_typescript_edges_node_Repository_primaryLanguage | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: OtherQuery_typescript_edges_node_Repository_stargazers;
}

export type OtherQuery_typescript_edges_node = OtherQuery_typescript_edges_node_App | OtherQuery_typescript_edges_node_Repository;

export interface OtherQuery_typescript_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: OtherQuery_typescript_edges_node | null;
}

export interface OtherQuery_typescript {
  __typename: "SearchResultItemConnection";
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * A list of edges.
   */
  edges: (OtherQuery_typescript_edges | null)[] | null;
}

export interface OtherQuery_css_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface OtherQuery_css_edges_node_Repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the owner's public avatar.
   */
  avatarUrl: any;
}

export interface OtherQuery_css_edges_node_Repository_primaryLanguage {
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

export interface OtherQuery_css_edges_node_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OtherQuery_css_edges_node_Repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: OtherQuery_css_edges_node_Repository_owner;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: OtherQuery_css_edges_node_Repository_primaryLanguage | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: OtherQuery_css_edges_node_Repository_stargazers;
}

export type OtherQuery_css_edges_node = OtherQuery_css_edges_node_App | OtherQuery_css_edges_node_Repository;

export interface OtherQuery_css_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: OtherQuery_css_edges_node | null;
}

export interface OtherQuery_css {
  __typename: "SearchResultItemConnection";
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * A list of edges.
   */
  edges: (OtherQuery_css_edges | null)[] | null;
}

export interface OtherQuery_html_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface OtherQuery_html_edges_node_Repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the owner's public avatar.
   */
  avatarUrl: any;
}

export interface OtherQuery_html_edges_node_Repository_primaryLanguage {
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

export interface OtherQuery_html_edges_node_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OtherQuery_html_edges_node_Repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: OtherQuery_html_edges_node_Repository_owner;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: OtherQuery_html_edges_node_Repository_primaryLanguage | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: OtherQuery_html_edges_node_Repository_stargazers;
}

export type OtherQuery_html_edges_node = OtherQuery_html_edges_node_App | OtherQuery_html_edges_node_Repository;

export interface OtherQuery_html_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: OtherQuery_html_edges_node | null;
}

export interface OtherQuery_html {
  __typename: "SearchResultItemConnection";
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * A list of edges.
   */
  edges: (OtherQuery_html_edges | null)[] | null;
}

export interface OtherQuery_javascript_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface OtherQuery_javascript_edges_node_Repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the owner's public avatar.
   */
  avatarUrl: any;
}

export interface OtherQuery_javascript_edges_node_Repository_primaryLanguage {
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

export interface OtherQuery_javascript_edges_node_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OtherQuery_javascript_edges_node_Repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: OtherQuery_javascript_edges_node_Repository_owner;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: OtherQuery_javascript_edges_node_Repository_primaryLanguage | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: OtherQuery_javascript_edges_node_Repository_stargazers;
}

export type OtherQuery_javascript_edges_node = OtherQuery_javascript_edges_node_App | OtherQuery_javascript_edges_node_Repository;

export interface OtherQuery_javascript_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: OtherQuery_javascript_edges_node | null;
}

export interface OtherQuery_javascript {
  __typename: "SearchResultItemConnection";
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * A list of edges.
   */
  edges: (OtherQuery_javascript_edges | null)[] | null;
}

export interface OtherQuery_java_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface OtherQuery_java_edges_node_Repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the owner's public avatar.
   */
  avatarUrl: any;
}

export interface OtherQuery_java_edges_node_Repository_primaryLanguage {
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

export interface OtherQuery_java_edges_node_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OtherQuery_java_edges_node_Repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: OtherQuery_java_edges_node_Repository_owner;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: OtherQuery_java_edges_node_Repository_primaryLanguage | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: OtherQuery_java_edges_node_Repository_stargazers;
}

export type OtherQuery_java_edges_node = OtherQuery_java_edges_node_App | OtherQuery_java_edges_node_Repository;

export interface OtherQuery_java_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: OtherQuery_java_edges_node | null;
}

export interface OtherQuery_java {
  __typename: "SearchResultItemConnection";
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * A list of edges.
   */
  edges: (OtherQuery_java_edges | null)[] | null;
}

export interface OtherQuery {
  /**
   * Perform a search across resources.
   */
  all: OtherQuery_all;
  /**
   * Perform a search across resources.
   */
  typescript: OtherQuery_typescript;
  /**
   * Perform a search across resources.
   */
  css: OtherQuery_css;
  /**
   * Perform a search across resources.
   */
  html: OtherQuery_html;
  /**
   * Perform a search across resources.
   */
  javascript: OtherQuery_javascript;
  /**
   * Perform a search across resources.
   */
  java: OtherQuery_java;
}
