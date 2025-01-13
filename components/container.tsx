import { cn } from '@/lib/utils';
import React from 'react'
interface Props {
    children: React.ReactNode;
    className?:string
}

const Container = ({children,className}: Props) => {
  return (
    <div className={cn(' mx-auto max-w-screen-xl px-4 ' , className)}>{children}</div>
  )
}

export default Container;