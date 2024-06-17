'use client'
import ClassList from "@/components/class-list";

export default function Home() { 
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 mb-10">
      <div className="flex">
        <ClassList />
      </div>
    </div>
  );
}
