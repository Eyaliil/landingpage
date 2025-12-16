import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function App() {
  const screen2Ref = useRef<HTMLElement>(null);
  const [isScreen2Visible, setIsScreen2Visible] = useState(false);

  // Scroll-based animation for bars background
  const { scrollYProgress } = useScroll({
    target: screen2Ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to background size (stretches from 100% to 200%)
  const backgroundSize = useTransform(scrollYProgress, [0, 1], ["100%", "200%"]);
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["center", "center"]);
  
  // Transform scroll progress to envelope image opacity (three states: closed -> open -> read)
  const closedEnvelopeOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const openEnvelopeOpacity = useTransform(scrollYProgress, [0, 0.35, 0.4, 0.5, 0.55], [0, 0, 1, 1, 0]);
  const readEnvelopeOpacity = useTransform(scrollYProgress, [0, 0.5, 0.55], [0, 0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScreen2Visible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (screen2Ref.current) {
      observer.observe(screen2Ref.current);
    }

    return () => {
      if (screen2Ref.current) {
        observer.unobserve(screen2Ref.current);
      }
    };
  }, []);

  const StepCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  };

  const VectorImage = ({ src, alt, width }: { src: string; alt: string; width?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
      <motion.div
        ref={ref}
        className="flex flex-col items-center max-w-md mx-auto"
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img src={src} alt={alt} className='w-40 sm:w-52' style={{ width }} />
      </motion.div>
    );
  };

  return (
    <>
    {/* Screen 1: Hero Section */}
      <section className="relative h-screen pt-16 sm:pt-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <img
            src="/assets/images/shadow_yellow_left.png"
            alt="Decorative Yellow Shadow Left"
            className="w-full sm:w-3/4 opacity-50"
          />
        </div>
        <div className="absolute bottom-0 right-0 h-3/4 pointer-events-none z-0">
          <img
            src="/assets/images/shadow_yellow_left.png"
            alt="Decorative Yellow Shadow Right"
            className="w-56 sm:w-96 h-full opacity-50"
            style={{ transform: 'scaleX(-1) scaleY(-1)' }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center pb-8 sm:pb-12 h-full flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-2xl mx-auto font-black text-primary mb-4 font-abril">
            Find meaningful connections
            <br />
            <span className="text-red-600 italic font-medium text-xl sm:text-2xl md:text-3xl font-courgette">without swiping</span>
          </h1>
          <div className="relative flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 w-full max-w-full sm:max-w-[884px] mx-auto min-h-auto sm:min-h-[341px]">
            <div className="pb-2 sm:pb-4 hidden sm:block">
             <img
              src="/assets/images/envelop1.png"
              alt="envelop 1"
              className="w-20 sm:w-24 md:w-32"
              style={{ width: '100px' }}
            />
           </div>
            <div className="flex relative flex-col">
              <button className="
                    relative
                    mb-3 mt-6 sm:mt-12
                    before:content-[url('/assets/images/vector1_landpage.png')]
                    before:absolute
                    before:-left-12 sm:before:-left-20
                    before:-top-12 sm:before:-top-16
                    before:-z-2
                    before:scale-50 sm:before:scale-75
                    before:hidden sm:before:block
                    after:content-[url('/assets/images/vector2_landpage.png')]
                    after:absolute
                    after:-right-12 sm:after:-right-24
                    after:-top-8
                    after:-z-2
                    after:scale-50 sm:after:scale-75
                    after:hidden sm:after:block
                  text-white font-bold font-chau text-lg sm:text-2xl px-3 sm:px-2 py-2 bg-[url('/assets/images/rectangle.png')] bg-no-repeat bg-center bg-contain cursor-pointer rounded-full">
                Get matched
              </button>
              <span className="font-abeezee leading-loose text-gray-900 text-base sm:text-lg text-center w-full max-w-xs sm:max-w-[448px]">
                Matchmaking platform that is not just for couples.
              </span>
            </div>
           <div className="pb-2 sm:pb-4 hidden sm:block">
             <img
               src="/assets/images/envelop2.png"
               alt="envelop 2"
               style={{ width: '100px' }}
             />
           </div>
          </div>
        </div>
      </section>

      {/* Screen 2: Decorative Notes */}
      <motion.section
        ref={screen2Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isScreen2Visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/assets/images/bars.png')",
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img 
          className='absolute left-1/2 transform -translate-x-1/2 top-8 sm:top-12 w-20 sm:w-24 md:w-28' 
          src='/assets/images/sticker1.png' 
          alt='sticker 1' 
        />
        <img 
          className='absolute left-1/2 transform -translate-x-1/2 top-[calc(50%+250px)] w-[200px]' 
          src='/assets/images/sticker2.png' 
          alt='sticker 2' 
        />
        <div className="flex flex-col items-center mx-auto px-4 w-full h-full justify-center relative">
          <motion.img 
            src="/assets/images/envelopclosed.png" 
            alt="Envelope closed" 
            className="absolute w-72 sm:w-96 md:w-[400px] max-w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: closedEnvelopeOpacity, pointerEvents: 'none', height: 'auto' }}
          />
          <motion.img 
            src="/assets/images/envelopopen1.png" 
            alt="Envelope open" 
            className="absolute w-72 sm:w-96 md:w-[400px] max-w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: openEnvelopeOpacity, pointerEvents: 'none', height: 'auto' }}
          />
          <motion.img 
            src="/assets/images/envelopread.png" 
            alt="Envelope read" 
            className="absolute w-72 sm:w-96 md:w-[400px] max-w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: readEnvelopeOpacity, pointerEvents: 'none', height: 'auto' }}
          />
        </div>
      </motion.section>

      {/* Screen 3: How it Works Section */}
      <section className="min-h-screen relative text-red-900 w-full overflow-visible flex flex-col justify-start px-4 py-12">
        <h2 className="bg-secondary border-t-2 border-b-2 border-dashed border-t-primary border-b-primary p-3 text-xl sm:text-3xl font-abeezee font-semibold text-center text-primary mb-8">
          How it works
        </h2>
        <img src='/assets/images/cloud2.png' alt='cloud 2' className='absolute right-2 sm:right-4 top-[10%] sm:top-[22%] w-10 sm:w-16 opacity-50' />
        <img src='/assets/images/cloud3.png' alt='cloud 3' className='absolute left-2 sm:left-4 top-[20%] sm:top-[32%] w-10 sm:w-16 opacity-50' />
        <img src='/assets/images/cloud4.png' alt='cloud 4' className='absolute right-2 sm:right-4 top-[35%] sm:top-[38%] w-10 sm:w-16 opacity-50' />
        <img src='/assets/images/cloud5.png' alt='cloud 5' className='absolute left-2 sm:left-4 bottom-[25%] sm:bottom-[30%] w-10 sm:w-16 opacity-50' />
        <img src='/assets/images/cloud6.png' alt='cloud 6' className='absolute right-2 sm:right-4 bottom-[5%] sm:bottom-[10%] w-10 sm:w-16 opacity-50' />
        <div className="max-w-4xl mx-auto">
          <VectorImage src='/assets/images/Vector1.png' alt='vector 1' width='150px' />
          <img src='/assets/images/cloud1.png' alt='cloud 1' className='absolute left-2 sm:left-4 top-10 w-10 sm:w-16 opacity-50' />
          <StepCard>
            <div className="flex text-center flex-col items-center max-w-md mx-auto">
              <div className="
                    bg-secondary
                    w-full max-w-xs sm:max-w-[18rem]
                    py-4 px-6 sm:px-8 
                    relative rounded-[2rem] 
                    before:absolute
                    before:content-[url('/assets/images/step1_image.png')]
                    before:-left-20 
                    before:top-20
                    before:scale-75
                    before:hidden
                 ">
                <h1 className="font-bold mb-2 text-base sm:text-xl">
                  <span className="text-red-600">Step 1:</span> Sign up
                </h1>
                <p className="text-sm sm:text-base">Create your profile<br />and tell us about yourself.</p>
              </div>
            </div>
          </StepCard>

          {/* step 2 */}
          <div>
            <VectorImage src='/assets/images/Vector2.png' alt='vector 2' width='100px' />
            <StepCard>
              <div className="flex flex-col items-center max-w-md mx-auto">
                <div className="bg-secondary text-center py-4 px-6 sm:px-8 relative rounded-[2rem] w-full max-w-xs sm:max-w-[18rem]
                 after:absolute
                 after:content-[url('/assets/images/step2_image.png')]
                 after:-left-16
                 after:top-24
                 after:scale-75
                 after:hidden
                 ">
                  <h1 className="font-bold mb-2 text-base sm:text-xl"><span className="text-red-600">Step 2:</span> Complete questionnaire</h1>
                  <p className="text-sm sm:text-base">Answer our compatibility questions.<br />The more you answer, the better the match.</p>
                </div>
              </div>
            </StepCard>
          </div>

          {/* step 3 */}
          <div className='mt-0'>
            <VectorImage src='/assets/images/Vector3.png' alt='vector 3' width='150px' />
            <StepCard>
              <div className="flex flex-col items-center max-w-md mx-auto text-center">
                <div className="bg-secondary py-4 px-6 sm:px-8 relative rounded-[2rem] w-full max-w-xs sm:max-w-[18rem]
                 after:absolute
                 after:content-[url('/assets/images/step3_image.png')]
                 after:left-12
                 after:top-24
                 after:scale-75
                 after:hidden
                 ">
                  <h1 className="font-bold mb-2 text-base sm:text-xl"> <span className="text-red-600">Step 3:</span> Wait for your match</h1>
                  <p className="text-sm sm:text-base">A notification will be sent per email <br /> when your match is available.</p>
                </div>
              </div>
            </StepCard>
          </div>

          {/* step 4 */}
          <div className='mt-0'>
            <VectorImage src='/assets/images/Vector4.png' alt='vector 4' width='150px' />
            <StepCard>
              <div className="flex flex-col items-center max-w-md mx-auto text-center">
                <div className="bg-secondary py-4 px-6 sm:px-8 relative rounded-[2rem] w-full max-w-xs sm:max-w-[18rem]
                 before:absolute
                 before:content-[url('/assets/images/step4_image.png')]
                 before:left-24
                 before:-bottom-20
                 before:scale-75
                 before:hidden
                 ">
                  <h1 className="font-bold text-red-900 mb-2 text-base sm:text-xl"><span className="text-red-600">Step 4:</span> Your turn</h1>
                  <p className="text-sm sm:text-base">Chat and test your compatibility with  <br />cool games.</p>
                </div>
              </div>
            </StepCard>
          </div>
        </div>
      </section>
    </>
  );
}
