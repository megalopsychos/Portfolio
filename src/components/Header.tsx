'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Index' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/work', label: 'Work' },
    { href: '/now', label: 'Now' },
  ]

  return (
    <header className="flex items-center justify-center w-full p-2">
      <nav className="flex gap-6 justify-center text-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== '/' && pathname.startsWith(item.href))
          
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`transition-colors duration-200 ${
                isActive 
                  ? 'text-green-600 font-medium' 
                  : 'hover:text-green-600 hover:font-medium'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}