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
        <header className={`${isHomepage ? 'absolute top-0 left-0 right-0 z-20' : 'bg-white shadow-sm'}`}>
            <div className="container-custom">
                {/* Main header row */}
                <div className="flex items-center justify-between pt-6 pb-3">
                    {/* Church Name - LEFT with margin */}
                    <div className="absolute left-80 top-32">
                        <Link href="/">
                            <h1 className={`font-arial text-6xl font-normal tracking-tight leading-tight whitespace-nowrap ${isHomepage ? 'text-red-400' : 'text-red-600'}`}>
                                HARMONY <span className={isHomepage ? 'text-white' : 'text-gray-900'}>BAPTIST CHURCH</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Navigation Menu - RIGHT with margin */}
                    <nav className="absolute right-80 top-48">
                        <div className="flex space-x-16">
                            {navigationItems.map((item) => (
                                <div key={item.name} className="relative">
                                    {item.children ? (
                                        <div
                                            className="relative"
                                            onMouseEnter={() => setOpenDropdown(item.name)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                            <button className={`font-arial flex items-center space-x-1 py-1 text-4xl font-medium transition-colors ${
                                                isHomepage
                                                    ? 'text-white hover:text-gray-300'
                                                    : 'text-gray-700 hover:text-primary-60'
                                            }`}>
                                                <span className="lowercase">{item.name}</span>
                                                <ChevronDown className="h-3 w-3 mt-0.5" />
                                            </button>
                                            {openDropdown === item.name && (
                                                <div className="absolute top-full left-0 bg-black shadow-lg rounded-md py-2 min-w-48 z-50">
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className="font-arial block px-4 py-2 text-white hover:bg-gray-800 transition-colors text-3xl"
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
                                            className={`font-arial block py-1 text-4xl font-medium lowercase transition-colors ${
                                                pathname === item.href
                                                    ? isHomepage
                                                        ? 'text-red-400'
                                                        : 'text-primary-600'
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
            </div>
        </header>
    )
}
