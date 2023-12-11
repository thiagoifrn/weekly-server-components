import Link from "next/link";

type UserPros = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
};

export default async function GetUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const users = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log(users.data);
  return (
    <div>
      <ul>
        {users?.data.map((user: UserPros) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.first_name} {user.last_name} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
