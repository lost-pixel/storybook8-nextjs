import React from "react";

const Link = ({
  ahref,
  title,
  subtitle,
}: {
  ahref: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <a
      href={ahref}
      className="block min-w-[300px] group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-400 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
        {subtitle}
      </p>
    </a>
  );
};

export default Link;
