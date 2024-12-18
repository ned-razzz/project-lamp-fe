import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "용인함박교회 | 자료실",
  description: "용인함박교회의 각종 문서들을 저장하고 검색할 수 있는 자료실입니다."
};

export default function ArchiveLayout(
  { children }: Readonly<{ children: React.ReactNode }>
) {
  return (
    <div>
      <h1 className="mb-3 text-xl">자료실</h1>
      {children}
    </div>
  );
}
