"use client";

import { env } from "@/env";
import { FC, useEffect, useState } from "react";

export const Repositories: FC = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${env.NEXT_PUBLIC_GITHUB_USER}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <ul className="space-y-1 list-disc">
      {repos.map((repo) => (
        <li key={repo.id}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-700"
          >
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
