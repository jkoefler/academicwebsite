import Link from "next/link";
import { useState } from "react";

export default function ExpandableText({ text, limit = 150 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <div className="mt-4">
      <p className="text-lg text-gray-700">{isExpanded ? text : shortText}</p>
      {text.length > limit && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-0 text-grey-500 hover:underline"
        >
          {isExpanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
}
