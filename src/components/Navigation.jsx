import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return <nav>
      <ol>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/list-characters"><a>Characters List</a></Link></li>
      </ol>
    </nav>
}

export default Navigation