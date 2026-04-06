'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { motion } from 'framer-motion' // Thêm cái này để "động"

import { cn } from '@/lib/utils'

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-primary/20 relative h-3 w-full overflow-hidden rounded-full shadow-inner',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        asChild
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
      >
        {/* Dùng motion để thanh chạy từ trái qua phải mượt mà */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: `-${100 - (value || 0)}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-primary h-full w-full"
        />
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
