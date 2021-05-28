import { format } from "date-fns";
import * as React from "react";

type ResultRow = {
  name: string;
  value: string;
  type?: "text" | "html";
};
const processEntries = (key: any, value: any): ResultRow | null => {
  let result: ResultRow | null;
  switch (key) {
    case "node.name":
      result = { name: "Name", value };
      break;
    case "node.primaryLanguage.name":
      result = { name: "Primary Language", value };
      break;
    case "node.stargazers.totalCount":
      result = { name: "Stars", value };
      break;
    case "node.forkCount":
      result = { name: "Forks", value };
      break;
    case "node.createdAt":
      result = {
        name: "Created on",
        value: format(new Date(value), "dd-MMM-yyyy"),
      };
      break;
    case "node.updatedAt":
      result = {
        name: "Last Update on",
        value: format(new Date(value), "dd-MMM-yyyy"),
      };
      break;
    case "node.licenseInfo.name":
      result = { name: "License", value };
      break;
    case "node.url":
      result = {
        name: "Url",
        value: `<a href=${value} target="_blank" style="color:#2073c0";">${value}</a>`,
        type: "html",
      };
      break;
    case "node.primaryLanguage.color":
      result = { name: "color", value };
      break;
    case "node.isFork":
      result = { name: "Forked", value: `${value === true ? "Yes" : "No"}` };
      break;
    case "node.descriptionHTML":
      result = { name: "Description", value: value, type: "html" };
      break;
    case "node.repositoryTopics.edges": {
      let output = [];
      output.push(value.map((v: any) => v.node.topic.name));
      result = { name: "Tags", value: output.join(",") };
      break;
    }
    default:
      result = null;
  }
  return result;
};
export const OrgStatsView: React.FC<any> = ({ row }) => {
  const [data, setData] = React.useState<ResultRow[] | null>();

  React.useEffect(() => {
    const { values } = row;
    const processed = Object.entries(values);
    const data = processed
      .filter((val) => val[0] !== "expander")
      .map((val) => processEntries(val[0], val[1]));
    setData(data as ResultRow[]);
  }, [row]);
  return (
    <>
      <div className="shadow-lg flex flex-col flex-wrap bg-white p-6 leading-normal">
        {data?.map(({ name, type, value }) => (
          <div className="flex">
            <div className="text-left w-1/5">
              <div className="text-gray-600 text-sm font-semibold">{name}</div>
            </div>
            <div className="text-left w-4/5">
              {type === "html" && (
                <div
                  className="text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{ __html: value }}
                />
              )}
              {(!type || type === "text") && (
                <div className="text-gray-600 text-sm">{value}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
