import { useGSAP } from '@gsap/react'
import  gsap  from 'gsap'
import { SplitText } from 'gsap/all'

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText('.titl2e', {
            type: 'chars',
           });
           
           const paragraphSplit = new SplitText('.subtitle', {
            type: 'lines',
           });

           heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

           gsap.from(heroSplit.chars, {
            yPercent: 100,
           duration: 1.8,
           ease: 'expo.out',
           stagger: 0.06,
           });


        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.3
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        }).to('.left-leaf', {
            y: 200,
        }).to('.right-leaf', {
            y: -200,
        })


    }, [])
  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='titlee'>MOJITO</h1>
            <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf'/>
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf'/>

            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                    <p>Cool, Crips, Classic</p>
                    <p className='subtitle'>Sip The Spirit <br /> Of Summer</p>
                    </div>
                </div>

                <div className='view-cocktails'>

                    <p className='subtitle'>
                        Every cooktail on our menu is made with the freshest ingredients and the perfect balance of flavors.
                    </p>

                    <a href="#cocktails">View Cocktails</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero