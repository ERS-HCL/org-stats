import * as React from "react";
import { GraphQLClient } from "graphql-request";
import { format } from "date-fns";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
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
import { orgQuery, otherQuery } from "@/helpers/queries";
import { useMediaQuery } from "@/helpers/useMediaQuery";

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
  const isLG = useMediaQuery("(min-width: 1024px)");
  const isMD = useMediaQuery("(min-width: 620px)");
  const [hiddenColumns, setHiddenColumns] = React.useState<any[]>([]);
  const { org, timestamp } = data;
  console.log(org, timestamp);
  const columns = React.useMemo(() => getColumns(), []);

  const rows = React.useMemo(() => org.edges, [org]);

  const groupBy = React.useMemo(() => [], []);

  // const hiddenColumns = React.useMemo(() => isPageWide?[]:["node.createdAt","node.updatedAt"], [isPageWide]);

  React.useEffect(() => {
    if (isLG) {
      setHiddenColumns([]);
    } else if (isMD) {
      setHiddenColumns(["node.createdAt", "node.updatedAt", "node.forkCount"]);
    } else {
      setHiddenColumns([
        "node.createdAt",
        "node.updatedAt",
        "node.forkCount",
        "node.stargazers.totalCount",
        "node.primaryLanguage.name",
      ]);
    }
  }, [isLG, isMD]);

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
    </Layout>
  );
}

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
