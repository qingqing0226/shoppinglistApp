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
          <div className="root--link-container">
            <h3 className="root--link root--link-home"><Link href={'/'} >Home</Link></h3>
            <h3 className="root--link root--link-create "><Link href={'/create'} >Create</Link></h3>
            <h3 className="root--link root--link-view"><Link href={'/shoppinglists'} >View All</Link></h3>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
