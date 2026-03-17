'use client'

export default function Input({
  label,
  type = 'text',
  placeholder = '',
  textarea = false,
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          placeholder={placeholder}
          className="
            w-full rounded-xl border border-gray-200
            px-4 py-3 text-sm
            focus:outline-none focus:ring-2
            focus:ring-[var(--color-primary)]
            transition
          "
          {...props}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="
            w-full rounded-xl border border-gray-200
            px-4 py-3 text-sm
            focus:outline-none focus:ring-2
            focus:ring-[var(--color-primary)]
            transition
          "
          {...props}
        />
      )}
    </div>
  )
}
