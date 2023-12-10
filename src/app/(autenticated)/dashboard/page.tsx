import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <Link href="/login">Sair</Link>
    </div>
  );
}
