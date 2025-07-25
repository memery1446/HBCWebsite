// src/components/PageTemplate.js
import React from 'react'

export default function PageTemplate({ title, image, children }) {
    return (
        <div className="mt-0 pt-0">
            <div
                className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center text-white font-impact text-ultra font-bold tracking-tight mt-0"
                style={{ backgroundImage: `url("${image}")` }}

            >
                {title}
            </div>

            <div className="bg-white py-16 px-6 text-white text-lg text-center min-h-[33vh]">
                {children}
            </div>
        </div>
    )
}