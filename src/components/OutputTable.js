import { useEffect, useState } from "react";
import Papa from "papaparse";
import { customers_csv } from "../dummy/customers";
import { categories_csv } from "../dummy/categories";
import { employees_csv } from "../dummy/employees";
import { shippers_csv } from "../dummy/shippers";
import { suppliers_csv } from "../dummy/suppliers";
import { CSVLink } from "react-csv";

export default function OutputTable({ queriedTable }) {
  const [parsedData, setParsedData] = useState([]);

  let csvData;
  switch (queriedTable) {
    case "customers":
      csvData = customers_csv;
      break;
    case "categories":
      csvData = categories_csv;
      break;
    case "employees":
      csvData = employees_csv;
      break;
    case "shippers":
      csvData = shippers_csv;
      break;
    case "suppliers":
      csvData = suppliers_csv;
      break;
    default:
      csvData = "";
  }

  useEffect(() => {
    if (csvData) {
      const parsed = Papa.parse(csvData, { header: true });
      setParsedData(parsed.data);
    }
  }, [csvData]);

  return (
    
    <div className="w-11/12 mx-auto overflow-scroll">
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-bold text-3xl my-5">Output</h1>
        <CSVLink
          data={parsedData}
          filename={queriedTable}
          className="btn_download"
        >
          Export as CSV
        </CSVLink>
      </div>
      <table className="w-full rounded-md border border-gray-300">
        <thead>
          <tr>
            {parsedData.length > 0 &&
              Object.keys(parsedData[0]).map((key, index) => (
                <th key={index} className="border px-4 py-2">{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {parsedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex} className="border px-4 py-2">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
