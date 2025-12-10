// components/Input.tsx
import React from 'react';

const Input = React.forwardRef(({ label, type = 'text',disabled, readOnly, error, required , ...props }: any, ref) => {
  return (
    <div>
      <label className="block text-sm font-bold  mb-1">{label} {required && <span className="text-red-500 ml-1">*</span>}</label>
      <input
        ref={ref}
        type={type}
        {...props}
        disabled={disabled}
        readOnly={readOnly}
        className={`w-full px-3 py-1 shadow-lg border ${
          error ? 'border-red-500' : 'border-gray-500'
        } rounded-md focus:outline-none focus:ring-[#B69339] focus:border-[#B69339]`}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
});

export default Input;
