"use client";
import { useState } from "react";

export default function Login() {
  const [count, setCount] = useState("");
  return (
    <div>
      {count}
      <h3>login</h3>
    </div>
  );
}
