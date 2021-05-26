import { GraphQLClient, gql } from "graphql-request";
import { format } from "date-fns";
import { OrgQuery_organization_repos_edges_node } from "@/generated/OrgQuery";
import { Layout } from "@/components/Layout";
import { DataTable } from "@/components/DataTable";
import {
  OtherQuery_all,
  OtherQuery_css,
  OtherQuery_html,
  OtherQuery_typescript,
  OtherQuery_java,
  OtherQuery_javascript,
} from "../generated/OtherQuery";
import { NumberRangeColumnFilter } from "@/components/filters/NumberRangeFilter";
import { SelectColumnFilter } from "@/components/filters/SelectColumnFilter";
import React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

export const getColumns = (): any[] => {
  let columns: any[] = [];
  columns = [
    {
      // Make an expander cell
      Header: () => null, // No header
      id: "expander", // It needs an ID
      Cell: ({ row }: any) => (
        // Use Cell to render an expander for each row.
        // We can use the getToggleRowExpandedProps prop-getter
        // to build the expander.
        <span
          {...row.getToggleRowExpandedProps()}
          className="text-gray-700 dark:text-gray-50 hover:text-teal-900 dark:hover:text-teal-accent-400"
        >
          {row.isExpanded ? (
            <ChevronDownIcon className="w-4 h-4" />
          ) : (
            <ChevronRightIcon className="w-4 h-4" />
          )}
        </span>
      ),
    },
    {
      Header: "Repository",
      accessor: "node.name",
      disableFilters: true,
      // Use a two-stage aggregator here to first
      // count the total rows being aggregated,
      // then sum any of those counts if they are
      // aggregated further
      aggregate: "uniqueCount",
      Aggregated: ({ value }: any) => `${value} repos`,
    },
    {
      Header: "Language",
      accessor: "node.primaryLanguage.name",
      Filter: SelectColumnFilter,
      filter: "text",
      // Use a two-stage aggregator here to first
      // count the total rows being aggregated,
      // then sum any of those counts if they are
      // aggregated further
      aggregate: "uniqueCount",
      Aggregated: ({ value }: any) => `${value} Languages`,
    },
    {
      Header: "Stars",
      accessor: "node.stargazers.totalCount",
      Filter: NumberRangeColumnFilter,
      filter: "between",
      // Aggregate the sum of all stars
      aggregate: "average",
      Aggregated: ({ value }: any) => `${Math.round(value * 100) / 100} (avg)`,
    },
    {
      Header: "Forks",
      accessor: "node.forkCount",
      disableFilters: true,
      // Aggregate the sum of all forks
      aggregate: "average",
      Aggregated: ({ value }: any) => `${Math.round(value * 100) / 100} (avg)`,
    },
    {
      Header: "Created On",
      accessor: "node.createdAt",
      disableFilters: true,
      // Aggregate the sum of all visits
      aggregate: "count",
      Aggregated: ({ value }: any) => `${value} Records`,
      Cell: ({ value }: any) => format(new Date(value), "dd/MM/yyyy"),
    },
    {
      Header: "Last Update",
      accessor: "node.updatedAt",
      disableFilters: true,
      // Aggregate the sum of all visits
      aggregate: "count",
      Aggregated: ({ value }: any) => `${value} Records`,
      Cell: ({ value }: any) => format(new Date(value), "dd/MM/yyyy"),
    },
  ];
  return columns;
};

export default function Example({ data }: { data: any }) {
//  console.log(data);
  const { org } = data;
  const columns = React.useMemo(() => getColumns(), []);

  const rows = React.useMemo(() => org.edges, [org]);

  const groupBy = React.useMemo(() => [], []);

  const hiddenColumns = React.useMemo(() => [], []);

  const renderRowSubComponent = React.useCallback(({ row }) => {
    return (
      <pre className="text-xs">
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    );
  }, []);
 //console.log(rows);
  return (
    <Layout title="Github Stats">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
            <DataTable
              columns={columns}
              data={rows}
              // We added this as a prop for our table component
              // Remember, this is not part of the React Table API,
              // it's merely a rendering option we created for
              // ourselves
              renderRowSubComponent={renderRowSubComponent}
              groupBy={groupBy}
              hiddenColumns={hiddenColumns}
            />
        </div>
        {/* /End replace */}
      </div>
    </Layout>
  );
}

const orgQuery = gql`
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

const otherQuery = gql`
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

export interface OrgStats {
  repositoryCount: number;
  edges: OrgQuery_organization_repos_edges_node[];
}

export interface AllStats {
  timestamp: string;
  all: OtherQuery_all;
  css: OtherQuery_css;
  html: OtherQuery_html;
  typescript: OtherQuery_typescript;
  java: OtherQuery_java;
  javascript: OtherQuery_javascript;
  org: OrgStats;
}

export async function getStaticProps() {
  const endpoint = "https://api.github.com/graphql";
  const variables = {
    author: "ERS-HCL",
    cursor: null,
  };

  const headers = {
    authorization: `Bearer ${process.env.PAT_TOKEN}`,
  };
  // Run GraphQL queries/mutations using a static function
  //request(endpoint, query, variables).then((data) => console.log(data));

  // ... or create a GraphQL client instance to send requests
  const client = new GraphQLClient(endpoint, { headers });

  const getAllRepoStats = async (organization: any): Promise<any> => {
    let results: any[] = [];

    if (
      organization &&
      organization.repos &&
      organization.repos.edges &&
      organization.repos.edges.length > 0
    ) {
      const vars = {
        ...variables,
        cursor:
          organization.repos.edges[organization.repos.edges.length - 1].cursor,
      };
      const newData = await client.request(orgQuery, vars);
      results.push(newData.organization);
      // if there are edges call again
      if (newData && newData.organization.repos.edges.length > 0) {
        return results.concat(await getAllRepoStats(newData.organization));
      } else {
        return results;
      }
    }
    return results;
  };

  const { all, java, typescript, css, html, javascript } = await client.request(
    otherQuery,
    variables
  );

  const { organization } = await client.request(orgQuery, variables);
  let data: AllStats | null = null;
  if (organization) {
    const result = await getAllRepoStats(organization);

    // Remove empty edges
    const extraEdges = result
      .map((r: { repos: { edges: any } }) => r.repos.edges)
      .filter((i: string | any[]) => i.length > 0);

    data = {
      timestamp: format(new Date(), "dd MMM yyyy"),
      org: {
        repositoryCount: organization.repos.totalCount,
        edges: organization.repos.edges.concat(...extraEdges),
      },
      all,
      java,
      typescript,
      css,
      html,
      javascript,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
