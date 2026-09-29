import React from 'react';

export default ({
    input,
    label,
    type,
    placeholder,
    meta: { error, touched },
}) => {
    const isTextarea = type === 'textarea';

    return (
        <div className="border-b border-slate-200">
            {isTextarea ? (
                <textarea
                    {...input}
                    id={input.name}
                    placeholder={placeholder}
                    rows={8}
                    className={`w-full resize-none border-0 bg-white px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 ${
                        touched && error ? 'bg-red-50' : ''
                    }`}
                />
            ) : (
                <div className="flex items-center px-4">
                    <input
                        {...input}
                        id={input.name}
                        type={type}
                        placeholder={placeholder}
                        className={`w-full border-0 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 ${
                            touched && error ? 'text-red-600' : ''
                        }`}
                    />
                </div>
            )}

            {touched && error && (
                <p className="px-4 pb-2 text-xs font-semibold text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
};