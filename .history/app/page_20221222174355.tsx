"use client"

import Image from 'next/image'
import jotia_mascot from '../public/jotai-mascot.png'
import Markdown from 'react-markdown'
import { example } from './example'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Link from 'next/link'

export default function Home() {
  return (
    <div className='home-cont'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.19 99.77" className="home-svg text-black dark:text-white w-full max-w-[12rem] lg:max-w-[16rem] 2xl:max-w-[18rem]"><title>Jotai</title><path d="M42.36,5.32H61.82V70.23a29.46,29.46,0,0,1-4,15.61A27.19,27.19,0,0,1,46.64,96.07a36.26,36.26,0,0,1-16.59,3.61,37.56,37.56,0,0,1-15.25-3A24.3,24.3,0,0,1,4,87.59Q0,81.5,0,72.23H19.59c.06,3.69,1.13,6.57,3.21,8.61a11.21,11.21,0,0,0,8.25,3.07q11.22,0,11.31-13.68Z" fill="currentColor"></path><path d="M105,99.77q-10.59,0-18.29-4.52A30.54,30.54,0,0,1,74.82,82.61a40.52,40.52,0,0,1-4.18-18.84,40.75,40.75,0,0,1,4.18-18.93A30.6,30.6,0,0,1,86.71,32.2,35.52,35.52,0,0,1,105,27.68a35.58,35.58,0,0,1,18.3,4.52,30.57,30.57,0,0,1,11.88,12.64,40.76,40.76,0,0,1,4.19,18.93,40.52,40.52,0,0,1-4.19,18.84A30.51,30.51,0,0,1,123.3,95.25Q115.59,99.78,105,99.77ZM127.14,5.32v10.5H82.87V5.32Zm-22,79.45a12,12,0,0,0,10.89-6q3.7-6,3.7-15.13T116,48.48a12,12,0,0,0-10.89-6,12.15,12.15,0,0,0-11,6q-3.73,6-3.73,15.16t3.73,15.13A12.16,12.16,0,0,0,105.09,84.77Z" fill="currentColor"></path><path d="M186.3,28.59V43.14H173.16V77q0,4,1.82,5.4a7.5,7.5,0,0,0,4.73,1.41,14.72,14.72,0,0,0,2.72-.25l2.09-.38,3,14.41c-1,.3-2.33.66-4.09,1.06a34.13,34.13,0,0,1-6.41.75q-10.55.47-16.93-4.56T153.8,79.5V43.14h-9.55V28.59h9.55V11.86h19.36V28.59Z" fill="currentColor"></path><path d="M216,99.73q-10,0-16.59-5.23t-6.59-15.59q0-7.81,3.68-12.27a21.19,21.19,0,0,1,9.66-6.53A54.78,54.78,0,0,1,219,57.41a98.57,98.57,0,0,0,13-1.91q3.92-1,3.91-4.36v-.28a8.42,8.42,0,0,0-2.7-6.68q-2.72-2.35-7.66-2.36a13.77,13.77,0,0,0-8.32,2.27,10.7,10.7,0,0,0-4.09,5.77l-17.91-1.45a23.88,23.88,0,0,1,9.93-15.14q7.94-5.58,20.48-5.59a42.24,42.24,0,0,1,14.54,2.46,24.19,24.19,0,0,1,10.94,7.66q4.16,5.21,4.16,13.52V98.41H236.92V88.73h-.54a20.18,20.18,0,0,1-7.62,7.93Q223.69,99.73,216,99.73Zm5.54-13.37A15,15,0,0,0,232,82.66a11.94,11.94,0,0,0,4.09-9.2V66.05a11.38,11.38,0,0,1-3.52,1.36c-1.6.39-3.29.73-5.1,1s-3.41.54-4.84.75a19.19,19.19,0,0,0-8.2,2.87,7.06,7.06,0,0,0-3.11,6.22,6.94,6.94,0,0,0,2.88,6A12.43,12.43,0,0,0,221.51,86.36Z" fill="currentColor"></path><path d="M278.69,19.59a10.41,10.41,0,0,1-7.37-2.89,9.14,9.14,0,0,1-3.09-6.93,9.1,9.1,0,0,1,3.09-6.91,11,11,0,0,1,14.78,0,9.1,9.1,0,0,1,3.09,6.91,9.14,9.14,0,0,1-3.09,6.93A10.45,10.45,0,0,1,278.69,19.59ZM269,98.41V28.59h19.36V98.41Z" fill="currentColor"></path></svg>

      <Image
        className='jotai-img'
        src={jotia_mascot}
        alt='bhoot'
        width={190}
        height={170}
      />
      <p className='home-def'>状態 Primitive and flexible state management for React</p>

      <div className='home-btn'>
        <Link href='/quick-start/intro' className='btn-1'>Quick start</Link>
        <Link href='/quick-start/intro' className='btn-2'>Tutorial</Link>
      </div>

      <div className='example'>
        <Markdown
          children={example}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>
    </div>
  )
}
