import GetUsers from "./components/action-user";

export default async function Users() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      <GetUsers />
    </>
  );
}
