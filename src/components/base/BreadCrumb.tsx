import React from "react";
import Link from "next/link";

type BreadCrumbProps = {
  paths: {
    title: string;
    url: string;
  }[];
  separator?: string;
};

const BreadCrumb = ({ paths, separator = "/" }: BreadCrumbProps) => {
  console.log(paths);

  return (
    <div>
      {paths.map((path: any, index: number) => (
        <span key={index}>
          {index > 0 && ` ${separator} `}
          <Link href={path.url}>{path.title}</Link>
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
