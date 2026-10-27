import { useState } from "react";

export default function ExpandableText({ text, limit = 300 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <div className="mt-4">
      <p className="text-sm text-justify text-gray-700">
        {isExpanded ? text : shortText}

        {text.length > limit && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-1 text-gray-500 hover:underline"
          >
            {isExpanded ? "less" : "more"}
          </button>
        )}
      </p>
    </div>
  );
}
