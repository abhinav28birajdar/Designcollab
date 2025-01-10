import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input: React.FC<InputProps> = ({ error, className = '', ...props }) => {
  const baseStyles = 'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 sm:text-sm'
  const errorStyles = error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
  
  const combinedClassName = `${baseStyles} ${errorStyles} ${className}`

  return (
    <div>
      <input className={combinedClassName} {...props} />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

