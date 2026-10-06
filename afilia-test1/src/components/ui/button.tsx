'use client'

import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import {
  type VariantProps,
  cva,
} from 'class-variance-authority'
import * as React from 'react'

export const defaultButtonStyle =
  'bg-primary text-primary-foreground rounded-tl-md rounded-br-md hover:bg-secondary active:bg-primary  active:shadow-[0_0_3px_var(--accent),0_0_5px_var(--accent),0_0_2px_#fff] disabled:bg-muted disabled:text-accent-foreground  '
export const outlineButtonStyle =
  'bg-primary/30 border-primary rounded-tl-md rounded-br-md border-solid border-2 hover:border-secondary  hover:border-solid  hover:border-2 text-primary-foreground dark:text-foreground hover:bg-secondary/20 active:bg-primary/30  active:shadow-[0_0_5px_var(--accent),0_0_3px_var(--accent),0_0_2px_#fff]'
export const ghostButtonStyle =
  ' text-primary-foreground dark:text-foreground hover:bg-secondary/15 active:bg-primary/15  active:inset-shadow-[0_0_10px_var(--accent),0_0_5px_var(--accent),0_0_3px_var(--accent),0_0_2px_#fff] ] rounded-tl-md rounded-br-md'
export const linkButtonStyle =
  'text-foreground underline-offset-4 active:underline rounded-tl-md rounded-br-md'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap  text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
  {
    variants: {
      variant: {
        default: defaultButtonStyle,
        outline: outlineButtonStyle,
        ghost: ghostButtonStyle,
        link: linkButtonStyle,
      },
      size: {
        clear: 'px-2 py-1',
        default:
          'w-full h-10 px-4 py-2 has-[>svg]:px-3 rounded-tl-md rounded-br-md',
        sm: 'w-full h-9 rounded-tl-md rounded-br-md px-3 has-[>svg]:px-2.5',
        lg: 'w-full h-11 rounded-tl-md rounded-br-md px-8 has-[>svg]:px-4',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends
    React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  stars?: boolean
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  stars = true,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  const rounded =
    size === 'sm' || size === 'lg'
      ? 'rounded-tl-md rounded-br-md'
      : ''

  const isGhost = variant == 'ghost'
  const isLink = variant == 'link'

  return (
    <div className={cn('group relative', rounded)}>
      <Comp
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size, className }),
          'transition-transform duration-200 group-hover:scale-105',
        )}
        {...props}
      />
      {!isGhost && !isLink && (
        <span
          aria-hidden
          className="spot-ring pointer-events-none absolute inset-0 rounded-[inherit] animate-[spot_10s_linear_infinite] motion-reduce:animate-none transition-transform duration-200 group-hover:scale-105"
        />
      )}
      {!isLink && stars && (
        <div className="pointer-events-none absolute inset-0 transition-transform duration-200 group-hover:scale-105  ">
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className=" pointer-events-none absolute -top-2.5 right-0.5 size-5 overflow-visible fill-chart-2 transition-[filter] duration-150 group-active:filter-[drop-shadow(0_0_2px_#fff)_drop-shadow(0_0_5px_var(--accent))_drop-shadow(0_0_10px_var(--accent))] [stroke-linejoin:round] "
          >
            <path d="M10 0A10 10 0 0 0 20 10A10 10 0 0 0 10 20A10 10 0 0 0 0 10A10 10 0 0 0 10 0Z" />
          </svg>
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className="pointer-events-none absolute top-1 right-3.5 size-3 overflow-visible fill-chart-2"
          >
            <path d="M10 0A10 10 0 0 0 20 10A10 10 0 0 0 10 20A10 10 0 0 0 0 10A10 10 0 0 0 10 0Z" />
          </svg>
        </div>
      )}
      {isLink && stars && (
        <div className="pointer-events-none absolute inset-0 transition-transform duration-200 group-hover:scale-105 ">
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-0 size-3 -translate-x-1/2 -translate-y-1/2 overflow-visible fill-chart-2"
          >
            <path d="M10 0A10 10 0 0 0 20 10A10 10 0 0 0 10 20A10 10 0 0 0 0 10A10 10 0 0 0 10 0Z" />
          </svg>
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-full size-3 -translate-x-1/2 -translate-y-1/2 overflow-visible fill-chart-2"
          >
            <path d="M10 0A10 10 0 0 0 20 10A10 10 0 0 0 10 20A10 10 0 0 0 0 10A10 10 0 0 0 10 0Z" />
          </svg>
        </div>
      )}
    </div>
  )
}

export { Button, buttonVariants }
