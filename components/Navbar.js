import Link from "next/link";

const Navbar = () => {
    return (
        <div>
        <h1>header</h1>
        <nav>
            <Link href="/"><a>home</a></Link>
            <Link href="/sections/blog"><a>blog</a></Link>
            <Link href="/sections/projects"><a>projects</a></Link>
            <Link href="/sections/about"><a>about</a></Link>
            <Link href="/sections/contact"><a>contact</a></Link>
        </nav>
        </div>
        
    );
}
 
export default Navbar;