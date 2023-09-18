import { env } from "@/env";
import { Repositories } from "./repositories";

export default function Home() {
  console.log(env.SOME_API_KEY);

  return (
    <main className="p-10">
      <Repositories />
    </main>
  );
}
