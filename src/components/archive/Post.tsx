"use client"
// import Image from 'next/image';
import { useState } from 'react';
import Detail from './Detail';

interface PostProps {  
  className?: string;
}

const Post: React.FC<PostProps> = ({ className }) => {
  const [isDetail, setIsDetail] = useState(false);

  function toggleDetail() {
    setIsDetail(!isDetail);
  }

  return (
    <>
      <article className={`${className} flex flex-col`}>
        <section className='flex flex-row'>
          <section className='flex-1' >
            <h3>예배 주보</h3>
            <p>#주보 #주일예배 #자료</p>
            {isDetail 
              ? <time>생성 2021.08.01 / 수정 2022.09.11</time> 
              : <time>2021.08.01</time>}
          </section>
          <section className='w-20'>
            <div className='w-14 h-14 border-black border' 
            />
          </section>
        </section>
        <section>
          {isDetail && <Detail/>}
          <button onClick={toggleDetail}>{isDetail ? "닫기" : "자세히 보기"}</button>
        </section>
      </article>
    </>
  );
};

export default Post;