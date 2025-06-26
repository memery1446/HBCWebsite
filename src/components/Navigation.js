'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const navigationItems = [
    { name: 'Home', href: '/' },
    {
        name: 'About Us',
        href: '/about-us',
        children: [
            { name: 'Leadership', href: '/about-us/leadership' }
        ]
    },
    {
        name: 'Ministries',
        href: '/ministries',
        children: [
            { name: 'Preschool Ministry', href: '/ministries/preschool-ministry' }
        ]
    },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Weekly Bulletin', href: '/bulletin' },
    { name: 'Events', href: '/events' },
]

export default function Navigation() {
    const pathname = usePathname()
    const [openDropdown, setOpenDropdown] = useState(null)

    return (
        <nav className="border-t border-gray-200">
            <div className="flex space-x-8">
                {navigationItems.map((item) => (
                    <div key={item.name} className="relative">
                        {item.children ? (
                            <div
                                className="relative"
                                onMouseEnter={() => setOpenDropdown(item.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button className="flex items-center space-x-1 py-4 text-gray-700 hover:text-primary-600 font-medium">
                                    <span>{item.name}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                {openDropdown === item.name && (
                                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-48 z-50">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                href={item.href}
                                className={`block py-4 font-medium transition-colors ${
                                    pathname === item.href
                                        ? 'text-primary-600 border-b-2 border-primary-600'
                                        : 'text-gray-700 hover:text-primary-600'
                                }`}
                            >
                                {item.name}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    )
}
