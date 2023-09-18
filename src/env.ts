/* eslint-disable n/no-process-env */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    /**
     * 〇〇サービスのAPIキー
     */
    SOME_API_KEY: z.string(),
  },
  client: {
    /**
     * リポジトリ一覧を取得するためのGitHubユーザー名
     * @default "vercel"
     */
    NEXT_PUBLIC_GITHUB_USER: z.string().default("vercel"),
  },
  runtimeEnv: {
    SOME_API_KEY: process.env.SOME_API_KEY,
    NEXT_PUBLIC_GITHUB_USER: process.env.NEXT_PUBLIC_GITHUB_USER,
  },
});
