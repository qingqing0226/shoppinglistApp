import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My Shopping List</title>
      </head>
      <body>
        <header>
          <h1>My Shopping List</h1>
          <h3><Link href={'/'}>Back Home</Link></h3>
        </header>
        {children}

      </body>
    </html>
  )
}
