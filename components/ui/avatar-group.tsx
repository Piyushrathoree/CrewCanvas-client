"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function AvatarGroup({ children, className, ...props }: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children)

  return (
    <div className={cn("flex -space-x-2", className)} {...props}>
      {childrenArray}
    </div>
  )
}
