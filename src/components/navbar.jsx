import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'
import { gsap } from 'gsap'
const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: '.nav',
                start: 'bottom top',
            }
        })

        navTween.fromTo('nav', { backgroundColor: 'transparent', backdropFilter: 'blur(10px)'}, { 
            backgroundColor: '#00000050', 
            duration: 1, ease: 'power1.inOut', 
        })
    })
    return (
        <nav className='nav'>
            <div >
                <a href="#home" className=' flex flex-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p>The Cocktail Bar</p>
                </a>
                <ul >
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.href}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar