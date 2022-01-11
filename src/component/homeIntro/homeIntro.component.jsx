import { useEffect, useRef } from "react";
import './homeIntro.styles.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const HomeIntro = () => {

    const bubbleUpRef = useRef();
    const q = gsap.utils.selector(bubbleUpRef);
    
    useEffect(()=>{

        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: bubbleUpRef.current,
              start: ()=>{ return `-=${window.innerHeight*1.5}`},
              end: "bottom+200 bottom", 
              scrub: 1, 
            }
          });

          tl.to(q(".graphic-top"), {
            y: '100',
            stagger: 0.33,
          },0)
          .to(q(".graphic-bottom"), {
            y: '-100',
            stagger: 0.33,
          },0);

        gsap.set(".marquee-line", {
            // backgroundColor: (i) => colors[i % colors.length],
            x: (i) => i * 500 
          });

        gsap.to(".marquee-line", {
            duration: 15,
            ease: "none",
            x: "+=4000", //move each box 500px to right
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % 4000) //force x value to be between 0 and 500 using modulus
            },
            repeat: -1
        });

    },[]);

    const lineRef = useRef();
    const imgRef = useRef();

    useEffect(()=>{

        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: imgRef.current,
              start: "top-=1000 top",
              end: "bottom bottom", 
            }
          });

          tl.to(imgRef.current, {
            y: '-50%',
            ease:'power1.inOut',
          },0)
          .from(lineRef.current, {
            y: '420',
            ease:'power1.inOut',
            duration:1.5
          },0);

          
    },[]);

    return(
    <>
        <div className='second-panel'>
            <div ref={bubbleUpRef} className='graphics'>
                <div className='graphic-top'>
                    <div className='graphic-detail'>
                        <div className="detial-number">0</div>
                        <div className="detial">plastic</div>
                    </div>
                </div>
                <div className='graphic-bottom'>
                    <div className='graphic-detail'>
                        <div className="detial-number">65%</div>
                        <div className="detial">less CO2 emissions in shipping</div>
                    </div>
                </div>
                <div className='graphic-top'>
                    <div className='graphic-detail'>
                        <div className="detial-number">45%</div>
                        <div className="detial">less water used in manufacturing</div>
                    </div>
                </div>
                <div className='graphic-bottom'>
                    <div className='graphic-detail'>
                        <div className="detial-number">100%</div>
                        <div className="detial">dissolvable packaging</div>
                    </div>
                </div>
            </div>

            <div className='marquee'>
                <div className="marquee-line">PREMIUM&nbsp;FLAVOR</div>
                <div className="marquee-line">Organically&nbsp;Sweetened</div>
                <div className="marquee-line">30&nbsp;CALORIES</div>
                <div className="marquee-line">NOTHING&nbsp;ARTIFICIAL</div>
                <div className="marquee-line">PREMIUM&nbsp;FLAVOR</div>
                <div className="marquee-line">Organically&nbsp;Sweetened</div>
                <div className="marquee-line">30&nbsp;CALORIES</div>
                <div className="marquee-line">NOTHING&nbsp;ARTIFICIAL</div>
            </div>
        </div>

        <div className='third-panel'>
            <div ref={lineRef} className='second-line'> "a refreshing and bubbly alternative to traditional sugary colas and fruit juices." </div>
            <div ref={imgRef} className='img-large'/> 
        </div>
    </>
)};

export default HomeIntro;