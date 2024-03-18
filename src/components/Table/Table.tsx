import React, { FC, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

export type columnData = {
  heading: string;
  headingFr?: string;
  value: string | number;
  sortable?: boolean;
  CustomComponent?: ({ data, value, Item }: any) => JSX.Element;
}[];

type tableData = {
  key: string;
  value: string | number;
}[][];

type tableProps = {
  title?: string;
  tableData: tableData;
  column: columnData;
};

type sortDirectionType = {
  indexValue: string;
  direction: "" | "asc" | "desc" | "default";
};

const Table: FC<any> = ({ title, tableData, column }) => {
  const router = useRouter();

  const [sortStatus, setSortStatus] = useState<sortDirectionType>({
    indexValue: "",
    direction: "",
  });

  let original = Array.from(tableData);
  const [data, setData] = useState<any>(tableData);
  const [loading, setLoading] = useState<any>("loading..");

  const sortData = (index: string) => {
    if (sortStatus.direction === "") {
      setData(
        original.sort((a: any, b: any) => (a[index] < b[index] ? -1 : 1))
      );
      setSortStatus({ indexValue: index, direction: "desc" });
    } else if (sortStatus.direction === "desc") {
      setData(data.sort((a: any, b: any) => (a[index] > b[index] ? -1 : 1)));
      setSortStatus({ indexValue: index, direction: "default" });
    } else if (sortStatus.direction === "default") {
      setData(original);
      setSortStatus({ indexValue: index, direction: "" });
    } else {
      console.error("Something Went wrong in table Core component");
    }
  };
  useEffect(() => {
    setData(tableData);
    setTimeout(() => {
      console.log("working");
      if (tableData.length === 0) setLoading("Data not found !");
    }, 3000);
  }, [tableData]);
  // if(data.length==0  ){
  //   return <p className='flex flex-row justify-center w-full py-[10%]'>{loading}</p>
  // }
  return (
    <div className="overflow-x-auto">
      {title && (
        <h3 className="py-6 pl-10 text-[20px] font-medium capitalize leading-[22px] text-secondary ">
          {title}
        </h3>
      )}
      {data.length == 0 ? (
        <p className="flex w-full flex-row justify-center py-[10%]">
          {loading}
        </p>
      ) : (
        <table className="w-full">
          <thead className="border-t border-b border-white-tertiary bg-gray-200">
            <tr className="">
              {column.map((value: any, id: any) => (
                <th key={id} className="py-2 px-2.5 xl:px-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (value.sortable) {
                        sortData(value.heading);
                      }
                    }}
                    className={`flex w-full flex-row items-center justify-start gap-1 capitalize text-black-secondary ${
                      !value.sortable ? "cursor-default" : ""
                    } `}
                  >
                    <p className="text-sm font-semibold xl:text-base xl:font-semibold">
                      {router.locale === "fr" ? value.headingFr : value.heading}
                    </p>
                    {value.sortable && (
                      <span className="flex flex-col justify-center">
                        <i
                          className={`fa-solid fa-sort-up !leading-[0.1] ${
                            sortStatus.indexValue === value.heading &&
                            sortStatus.direction !== "asc"
                              ? "text-black-primary"
                              : "text-gray"
                          } `}
                        ></i>
                        <i
                          className={`fa-solid fa-sort-down !leading-[0.1] ${
                            sortStatus.indexValue === value.heading &&
                            sortStatus.direction !== "desc"
                              ? "text-black-primary"
                              : "text-gray"
                          } `}
                        ></i>
                      </span>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item: any, index: any) => (
                <tr
                  key={index}
                  className={`border-y ${index % 2 == 0 ? "" : "bg-ash-400"}`}
                >
                  {column.map((columnItem: any, index: any) => {
                    if (columnItem.CustomComponent) {
                      let { CustomComponent, value } = columnItem;
                      return (
                        <td className="py-2 px-2.5 xl:px-4 " key={index}>
                          {/* <p className='text-sm font-medium text-gray'> */}
                          {/* {customComponent} */}
                          <CustomComponent
                            data={item[`${columnItem.value}`]}
                            value={value}
                            item={item}
                          />
                          {/* </p> */}
                        </td>
                      );
                    }
                    if (columnItem.value.includes(".")) {
                      const itemSplit = columnItem.value.split(".");
                      return (
                        <td className="py-2 px-2.5 xl:px-4" key={index}>
                          <p className="text-sm text-gray">
                            {itemSplit.length == 2
                              ? item[itemSplit[0]][itemSplit[1]]
                              : item[itemSplit[0]][itemSplit[1]][itemSplit[2]]}
                          </p>
                        </td>
                      );
                    }

                    return (
                      <td className="py-2 px-2.5 xl:px-4" key={index}>
                        <p className="text-sm text-gray">
                          {item[`${columnItem.value}`] || "-"}
                        </p>
                      </td>
                    );
                  })}
                </tr>
              ))}
            {/* data */}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;

// import React, { useState } from "react";
// import ArrowUp from "../svg/ArrowUp";
// import ArrowDown from "../svg/ArrowDown";

// const Table = ({ data, columns }: { data: any; columns: any }) => {
//   const [sortConfig, setSortConfig] = useState({
//     key: columns[0],
//     direction: "descending",
//   });
//   const [selectedRows, setSelectedRows] = useState([]);

//   const isAscending = (column) =>
//     sortConfig.key === column && sortConfig.direction === "ascending";

//   const handleSort = (column: any) => {
//     let direction = "ascending";
//     if (sortConfig && sortConfig.key === column) {
//       direction =
//         sortConfig.direction === "ascending" ? "descending" : "ascending";
//     }
//     setSortConfig({ key: column, direction });
//   };

//   const handleCheckboxChange = (row) => {
//     if (selectedRows.includes(row)) {
//       setSelectedRows(
//         selectedRows.filter((selectedRow) => selectedRow !== row)
//       );
//     } else {
//       setSelectedRows([...selectedRows, row]);
//     }
//   };

//   const handleMasterCheckboxChange = () => {
//     if (selectedRows.length === data.length) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows([...data]);
//     }
//   };

//   const sortedData = () => {
//     if (sortConfig !== null) {
//       const key = sortConfig.key;
//       const direction = sortConfig.direction === "ascending" ? 1 : -1;

//       return [...data].sort((a, b) => {
//         if (a[key] < b[key]) return -direction;
//         if (a[key] > b[key]) return direction;
//         return 0;
//       });
//     }
//     return data;
//   };

//   return (
//     <table className="w-full">
//       <thead className="bg-gray-200 w-full">
//         <tr>
//           <th>
//             <input
//               type="checkbox"
//               onChange={handleMasterCheckboxChange}
//               checked={selectedRows.length === data.length}
//             />
//           </th>
//           {columns.map((column: any) => (
//             <th
//               key={column}
//               onClick={() => handleSort(column)}
//               className="p-2 font-medium cursor-pointer"
//               align="left"
//             >
//               <div className="flex items-center gap-1">
//                 <span>{column}</span>
//                 {isAscending(column) ? <ArrowUp /> : <ArrowDown />}
//               </div>
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {sortedData().map((row: any, index: number) => {
//           console.log(row);

//           return (
//             <tr
//               key={index}
//               className={`${index % 2 === 0 ? "" : "bg-green-100/20"} border-y`}
//             >
//               <th className="border-y">
//                 <input
//                   type="checkbox"
//                   onChange={() => handleCheckboxChange(row)}
//                   checked={selectedRows.includes(row)}
//                 />
//               </th>
//               {columns.map((column: any) => (
//                 <td key={column} className="p-2">
//                   {column === "Action" ? (
//                     // Assuming you want two buttons, modify this as needed
//                     <>
//                       <button onClick={() => console.log("Button 1")}>
//                         Button 1
//                       </button>
//                       <button onClick={() => console.log("Button 2")}>
//                         Button 2
//                       </button>
//                     </>
//                   ) : (
//                     // Display other columns normally
//                     row[column]
//                   )}
//                 </td>
//               ))}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
