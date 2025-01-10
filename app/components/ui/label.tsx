import React, { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

export const Label: React.FC<LabelProps> = ({ children, required = false, className = '', ...props }) => {
  const baseStyles = 'block text-sm font-medium text-gray-700'
  
  const combinedClassName = `${baseStyles} ${className}`

  return (
    <label className={combinedClassName} {...props}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
}
