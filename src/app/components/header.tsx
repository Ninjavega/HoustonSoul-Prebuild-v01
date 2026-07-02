import Link from 'next/link';

export function Header() {
  return (
    <header className='flex justify-between items mb-4 content-center gap-4'>
        <div className='font-bold text-2x1'>
        <Link href={'/'}>HTXSOUL</Link>
    </div>
    
    <nav>
        <ul className='flex gap-4'>
               <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/'}>Blog</Link>
            </li>
            <li>
                <Link href={'/about'}>About</Link>
            </li>
            <li>
                <Link href={'/contact'}>Contact</Link>
            </li>
            
        </ul>
    </nav>
    
    </header>   
    );
}

