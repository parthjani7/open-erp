import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl text-center p-5">OpenERP</h1>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </main>
  )
}
