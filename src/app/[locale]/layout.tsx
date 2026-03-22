import Link from 'next/link'
import { ReactNode } from 'react'

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const { locale } = params

  return (
    <div>
      <nav style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
        <Link href={`/${locale}`}>Home</Link>
        {' | '}
        <Link href={`/${locale}/about`}>About</Link>
        {' | '}
        <span>Language: </span>
        <Link href="/zh">ZH</Link>
        {' / '}
        <Link href="/en">EN</Link>
        {' / '}
        <Link href="/zh-tw">ZH-TW</Link>
      </nav>

      <main style={{ minHeight: '80vh', padding: '24px' }}>
        {children}
      </main>

      <footer style={{ padding: '16px', borderTop: '1px solid #eee' }}>
        © {new Date().getFullYear()} AI-OS Enterprise
      </footer>
    </div>
  )
}
