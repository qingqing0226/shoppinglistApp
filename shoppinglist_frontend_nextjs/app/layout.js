import Link from "next/link";
import '../styles/styles.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My Shopping List</title>
      </head>
      <body className="container">
        <header className="root--header">
          <h1 className="root--title">My Shopping List</h1>
          <h3 className="root--link-home"><Link href={'/'} >Home</Link></h3>
        </header>
        {children}
      </body>
    </html>
  )
}
