import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Universal date range formatter that prevents bidirectional character inversion in RTL
 * Supports inputs like "01/2024 - Present", "01/2024 - حتى الآن", "09/2022 - 11/2022", "03/2017 - 11/2021"
 */
export function formatPeriod(period: string, isAr: boolean = false): React.ReactNode {
  if (!period) return null
  const parts = period.split(' - ')
  if (parts.length === 2) {
    const [start, end] = parts
    const isPresent =
      end.toLowerCase() === 'present' ||
      end === 'حتى الآن' ||
      end.toLowerCase() === 'current'
    const endDisplay = isPresent ? (isAr ? 'حتى الآن' : 'Present') : end

    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400">
        <bdi dir="ltr">{start}</bdi>
        <span>-</span>
        {isPresent ? (
          <span>{endDisplay}</span>
        ) : (
          <bdi dir="ltr">{endDisplay}</bdi>
        )}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center font-mono text-xs text-zinc-400">
      <bdi dir="ltr">{period}</bdi>
    </span>
  )
}
