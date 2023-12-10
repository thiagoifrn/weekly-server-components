import { ReactNode } from "react";

export default function LayoutLogin({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Layout login</h2>
      {children}
    </div>
  );
}
