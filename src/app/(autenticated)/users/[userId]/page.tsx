import Link from "next/link";
import { Suspense } from "react";
import GetUsers from "../components/action-user";

export default async function UserById({
  params,
}: {
  params: { userId: string };
}) {
  const response = await fetch(`https://reqres.in/api/users/${params.userId}`);
  const userData = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h2>usuário: </h2>

      <div>
        <h3>{userData.data.first_name}</h3>
        <h4 className="">{userData.data.email}</h4>
      </div>

      <Link href="/users">todos usuários</Link>
      <hr />
      <Suspense fallback={<p>carregando todos os usuário</p>}>
        <GetUsers />
      </Suspense>
    </div>
  );
}
