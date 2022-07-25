/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(1)
            router.push('/')
        }, 3000)
    }, [router])

    return (
    <div className="not-found">
        <h1>Looks like you've lost your way...</h1>
        <p>Go back to <Link href="/"><a>homepage</a></Link></p>
    </div>
    );
}
 
export default NotFound;