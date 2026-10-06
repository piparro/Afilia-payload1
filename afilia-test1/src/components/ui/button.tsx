'use client'

import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import {
  type VariantProps,
  cva,
} from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap  text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-secondary active:bg-primary  active:shadow-[0_0_3px_var(--accent),0_0_5px_var(--accent),0_0_2px_#fff] active:[text-shadow:0_0_2px_#fff,0_0_3px_var(--accent),0_0_5px_var(--accent)] disabled:bg-muted disabled:text-accent-foreground  ',
        outline:
          'bg-primary/30 border-primary border-solid border-2 hover:border-secondary  hover:border-solid  hover:border-2 text-primary-foreground dark:text-foreground hover:bg-secondary/20 active:bg-primary/30  active:shadow-[0_0_5px_var(--accent),0_0_3px_var(--accent),0_0_2px_#fff] ',

        ghost:
          ' text-primary-foreground dark:text-foreground hover:bg-secondary/15 active:bg-primary/15  active:inset-shadow-[0_0_10px_var(--accent),0_0_5px_var(--accent),0_0_3px_var(--accent),0_0_2px_#fff] ]',
      },
      size: {
        clear: '',
        default:
          'h-10 px-4 py-2 has-[>svg]:px-3 rounded-tl-md rounded-br-md',
        sm: 'h-9 rounded-tl-md rounded-br-md px-3 has-[>svg]:px-2.5',
        lg: 'h-11 rounded-tl-md rounded-br-md px-8 has-[>svg]:px-4',
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
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  const rounded =
    size === 'sm' || size === 'lg'
      ? 'rounded-tl-md rounded-br-md'
      : ''

  const visible = variant == 'ghost' ? 'hidden' : 'visible'

  return (
    <div className={cn('group relative', rounded)}>
      <Comp
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size, className }),
          'transition-transform duration-200 group-hover:scale-110',
        )}
        {...props}
      />

      <span
        aria-hidden
        className={cn(
          'spot-ring pointer-events-none absolute inset-0 rounded-[inherit] animate-[spot_10s_linear_infinite] motion-reduce:animate-none transition-transform duration-200 group-hover:scale-110',
          visible,
        )}
      />
      <div className="pointer-events-none absolute inset-0 transition-transform duration-200 group-hover:scale-110 ">
        <svg
          viewBox="0 0 20 20"
          aria-hidden
          className="pointer-events-none absolute -top-2.5 right-0.5 size-5 overflow-visible fill-chart-2  [stroke-linejoin:round]  "
        >
          <path d="M10 0A10 10 0 0 0 20 10A10 10 0 0 0 10 20A10 10 0 0 0 0 10A10 10 0 0 0 10 0Z" />
        </svg>
      </div>
    </div>
  )
}

export { Button, buttonVariants }
