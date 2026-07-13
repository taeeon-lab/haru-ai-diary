"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "students", userCredential.user.uid), {
        name,
        grade,
        classNum,
        number,
        email,
      });

      alert("회원가입 성공!");
      router.push("/student");
    } catch (error: any) {
      alert("회원가입 실패: " + error.message);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-4xl font-bold mb-4">회원가입</h1>

      <input
        type="text"
        placeholder="이름"
        className="border p-3 rounded w-80"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="학년"
        className="border p-3 rounded w-80"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />

      <input
        type="text"
        placeholder="반"
        className="border p-3 rounded w-80"
        value={classNum}
        onChange={(e) => setClassNum(e.target.value)}
      />

      <input
        type="text"
        placeholder="번호"
        className="border p-3 rounded w-80"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <input
        type="email"
        placeholder="이메일"
        className="border p-3 rounded w-80"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="비밀번호 (6자 이상)"
        className="border p-3 rounded w-80"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignup}
        className="bg-blue-600 text-white py-3 rounded-xl w-80 hover:bg-blue-700 transition"
      >
        회원가입
      </button>
    </main>
  );
}