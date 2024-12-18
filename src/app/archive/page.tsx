import React from "react";
import Post from "~/src/components/archive/Post";

const Archive : React.FC = () => {  

  return (
  <div>
    <aside className="mb-3">
      <h2 className="text-lg">태그 목록</h2>
      <ul className="text-sm">
        <li>주보</li>
        <li>예배 설교문</li>
        <li>소감문</li>
      </ul>
    </aside>
    <section>
      <Post className="mb-3"/>
      <Post className="mb-3"/>
      <Post className="mb-3"/>
    </section>
  </div>
  );
}

export default Archive;
