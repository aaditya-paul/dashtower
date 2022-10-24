import React from "react";
import Link from "next/link";

import { Tag } from "interfaces/Post";

const tagColor = (tag: string) => {
  switch (tag) {
    case "Product":
      return "bg-purple-600 hover:bg-purple-700";
    case "Engineering":
      return "bg-blue-500 hover:bg-blue-600";
    case "News":
      return "bg-red-500 hover:bg-red-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
};

const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <ul className="flex flex-wrap text-xs font-medium -m-1">
      {tags.map((tag) => (
        <li
          key={tag.id}
          className={`m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColor(
            tag.name
          )}`}
        >
          <Link href="#">{tag.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
