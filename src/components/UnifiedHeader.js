'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function UnifiedHeader() {
    const pathname = usePathname()
    const isHomepage = pathname === '/'
    const [openDropdown, setOpenDropdown] = useState(null)

    const navigationItems = [
        {
            name: 'bulletin',
            href: '/bulletin',
        },
        {
            name: 'about us',
            href: '/about-us',
            children: [
                { name: 'Service Times', href: '/about-us/service-times' },
                { name: 'What We Believe', href: '/about-us/what-we-believe' },
                { name: 'Leadership', href: '/about-us/leadership' }
            ]
        },
        {
            name: 'ministries',
            href: '/ministries',
            children: [
                { name: 'Preschool Ministry', href: '/ministries/preschool-ministry' },
                { name: 'Choir', href: '/ministries/choir' },
                { name: 'Children\'s Ministry', href: '/ministries/childrens-ministry' },
                { name: 'Youth Ministry', href: '/ministries/youth-ministry' },
            ]
        },
        {
            name: 'events',
            href: '/events',
        },
        {
            name: 'contact us',
            href: '/contact-us',
        },
        {
            name: 'sermons',
            href: '/sermons',
        },
    ]

    return (
        <header className={`${isHomepage ? 'absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/40 to-transparent' : 'bg-white shadow-sm'}`}>
            <div className="container-custom">
                <div className="flex items-center justify-between py-6">
                    {/* Church Name */}
                    <div>
                        <Link href="/">
                            <h1 className={`text-3xl font-bold tracking-wider ${isHomepage ? 'text-white' : 'text-gray-900'}`}>
                                HARMONY <span className={isHomepage ? 'text-red-400' : 'text-red-600'}>BAPTIST CHURCH</span>
                            </h1>
                            <p className={`text-sm mt-1 ${isHomepage ? 'text-white/90' : 'text-gray-600'}`}>
                                A Heart for God • A Love for People
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="pb-4">
                    <div className="flex space-x-8">
                        {navigationItems.map((item) => (
                            <div key={item.name} className="relative">
                                {item.children ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setOpenDropdown(item.name)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <button className={`flex items-center space-x-1 py-2 font-medium transition-colors ${
                                            isHomepage
                                                ? 'text-white hover:text-gray-300'
                                                : 'text-gray-700 hover:text-primary-600'
                                        }`}>
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
                                        className={`block py-2 font-medium transition-colors ${
                                            pathname === item.href
                                                ? isHomepage
                                                    ? 'text-red-400 border-b-2 border-red-400'
                                                    : 'text-primary-600 border-b-2 border-primary-600'
                                                : isHomepage
                                                    ? 'text-white hover:text-gray-300'
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
            </div>
        </header>
    )
}
