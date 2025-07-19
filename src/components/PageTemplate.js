// src/components/PageTemplate.js
import React from 'react'

export default function PageTemplate({ title, image, children }) {
    return (
        <div>
            <div
                className="w-full h-[33vh] bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold tracking-widest"
                style={{ backgroundImage: `url("${image}")` }}

            >
                {title.toUpperCase()}
            </div>

            <div className="bg-white py-16 px-6 text-gray-800 text-lg text-center min-h-[33vh]">
                {children}
            </div>
        </div>
    )
}
