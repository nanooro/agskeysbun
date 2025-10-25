"use client"

import * as React from "react"
import { 
  Toast, 
  ToastAction, 
  ToastClose, 
  ToastDescription, 
  ToastTitle, 
  ToastViewport,
  ToastProvider
} from "./toast"

interface ToasterProps {
  toasts: Array<{
    id: string
    title?: React.ReactNode
    description?: React.ReactNode
    action?: {
      label: string
      onClick: () => void
    }
    variant?: "default" | "destructive" | "success" | "warning" | "info"
    onOpenChange?: (open: boolean) => void
    open?: boolean
  }>
  onDismiss?: (id: string) => void
}

export function Toaster({ toasts = [], onDismiss }: ToasterProps) {
  if (!toasts || !Array.isArray(toasts)) {
    console.error('Toaster: Invalid toasts prop. Expected an array, got:', toasts)
    return null
  }

  return (
    <>
      <ToastViewport />
      {toasts.map(({ id, title, description, action, variant, ...props }) => (
        <Toast
          key={id}
          variant={variant}
          {...props}
        >
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action && (
            <ToastAction
              altText={action.label}
              onOpenChange={(open) => {
                if (!open) onDismiss?.(id)
                props.onOpenChange?.(open)
              }}
              onClick={() => action.onClick()}
              className="mt-2"
            >
              {action.label}
            </ToastAction>
          )}
          <ToastClose />
        </Toast>
      ))}
    </>
  )
}
