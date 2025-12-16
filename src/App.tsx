export default function App() {
  return (
    <>
    {/* hero Section */}
      <section className="relative min-h-screen pt-32 px-4">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <img src="/assets/images/shadow_yellow_left.png"
            alt="Decorative Yellow Shadow Left"
            className="w-3/4 opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center pb-12">
          <h1 className="text-4xl max-w-2xl mx-auto font-black text-primary mb-4 font-abril">
            Find meaningful connections
            <br />
            <span className="text-red-600 italic font-medium text-3xl font-courgette" style={{ fontSize: '38px' }}>without swiping</span>
          </h1>
          <div className="relative flex justify-center items-center gap-6 w-full max-w-[884px] mx-auto min-h-[341px] md:h-[341px]" style={{ paddingTop: '0px' }}>
            <div className="pb-4">
             <img
              src="/assets/images/envelop1.png"
              alt="envelop 1"
              className="w-20"
              style={{ width: '130px' }}
            />
           </div>
            <div className="flex relative flex-col">
              <button className="
                    relative
                    mb-3 mt-12
                    before:content-[url('/assets/images/vector1_landpage.png')]
                    before:absolute
                    before:-left-20
                    before:-top-16
                    before:-z-2
                    before:scale-75
                    after:content-[url('/assets/images/vector2_landpage.png')]
                    after:absolute
                    after:-right-24
                    after:-top-8
                    after:-z-2
                    after:scale-75
                  text-white font-bold font-chau text-2xl px-2 py-2 bg-[url('/assets/images/rectangle.png')] bg-no-repeat bg-center bg-contain cursor-pointer rounded-full">
                Get matched
              </button>
              <span className="font-abeezee leading-loose text-gray-900 text-lg text-center w-full max-w-[448px]">
                Matchmaking platform that is not just for couples.
              </span>
            </div>
           <div className="pb-4">
             <img
               src="/assets/images/envelop2.png"
               alt="envelop 2"
               style={{ width: '130px' }}
             />
           </div>
          </div>


        </div>
      </section>

      {/* Decorative Notes */}
      <section className="relative bg-[url('/assets/images/bars.png')] bg-cover bg-center bg-no-repeat min-h-[500px] max-w-4xl mx-auto">
        <img className='absolute top-12 left-4 w-16' src='/assets/images/sticker1.png' alt='sticker 1' style={{ fontSize: '109px', width: '162px', left: '-8px' }} />
        <img className='absolute right-4 bottom-16' src='/assets/images/sticker2.png' alt='sticker 2' style={{ width: '199px' }} />
        <div className="flex flex-col items-center mx-auto pt-12 pb-20">
          <div className="relative bg-[url('/assets/images/envelop_image.png')] bg-cover bg-center bg-no-repeat h-[400px] w-[450px] max-w-full">
            <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-full text-center px-4">
              <p className="text-sm text-gray-900">we think this person could be good for you</p>
            </div>

            <div className="text-center mt-6 absolute top-32 left-1/2 transform -translate-x-1/2 pt-2 w-full">
              <div className="text-4xl font-black font-abril">70%</div>
              <p className="text-gray-900 text-lg font-abeezee">Match percentage</p>
            </div>

            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full px-4">
              <p className="text-red-500 italic text-center text-lg font-courgette">Your match is here !</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="pb-12 relative text-red-900 max-w-4xl mx-auto">
        <h2 className="bg-secondary border-t-2 border-b-2 border-dashed border-t-primary border-b-primary p-3 text-3xl font-abeezee font-semibold text-center text-primary">
          How it works
        </h2>
        <img src='/assets/images/cloud2.png' alt='cloud 2' className='absolute right-4 top-[22%] w-16 opacity-50' />
        <img src='/assets/images/cloud3.png' alt='cloud 3' className='absolute left-4 top-[32%] w-16 opacity-50' style={{ top: '633px' }} />
        <img src='/assets/images/cloud4.png' alt='cloud 4' className='absolute right-4 top-[38%] w-16 opacity-50' />
        <img src='/assets/images/cloud5.png' alt='cloud 5' className='absolute left-4 bottom-[30%] w-16 opacity-50' style={{ left: '183px', width: '76px' }} />
        <img src='/assets/images/cloud6.png' alt='cloud 6' className='absolute right-4 bottom-[10%] w-16 opacity-50' />
        <div className='px-4'>
          <img src='/assets/images/Vector1.png' alt='vector 1' className='max-w-md mx-auto' style={{ width: '204px' }} />
          <img src='/assets/images/cloud1.png' alt='cloud 1' className='absolute left-4 w-16 opacity-50' />
          <div className="flex text-center flex-col items-center max-w-md mx-auto">
            <div className="
                  bg-secondary
                  w-full max-w-[18rem]
                  py-4 px-8 
                  relative rounded-[2rem] 
                  before:absolute
                  before:content-[url('/assets/images/step1_image.png')]
                  before:-left-20 
                  before:top-20
                  before:scale-75
                  before:hidden
               ">
              <h1 className="font-bold mb-2 text-xl">
                <span className="text-red-600">Step 1:</span> Sign up
              </h1>
              <p className="text-base">Create your profile<br />and tell us about yourself.</p>
            </div>
          </div>

          {/* step 2 */}
          <div>
            <div className="flex flex-col items-center max-w-md mx-auto"> <img src='/assets/images/Vector2.png' alt='vector 1' className='w-full max-w-md' style={{ width: '120px' }} /></div>
            <div className="flex flex-col items-center max-w-md mx-auto">
              <div className="bg-secondary text-center py-4 px-8 relative rounded-[2rem] w-full max-w-[18rem]
               after:absolute
               after:content-[url('/assets/images/step2_image.png')]
               after:-left-16
               after:top-24
               after:scale-75
               after:hidden
               ">
                <h1 className="font-bold mb-2 text-xl"><span className="text-red-600">Step 2:</span> Complete questionnaire</h1>
                <p className="text-base">Answer our compatibility questions.<br />The more you answer, the better the match.</p>
              </div>
            </div>
          </div>

          {/* step 3 */}
          <div className='mt-0'>
            <div className="flex flex-col items-center max-w-md mx-auto">
              <img src='/assets/images/Vector3.png' alt='vector 1' className='w-full max-w-md' style={{ width: '204px' }} />
            </div>
            <div className="flex flex-col items-center max-w-md mx-auto text-center">
              <div className="bg-secondary py-4 px-8 relative rounded-[2rem] w-full max-w-[18rem]
               after:absolute
               after:content-[url('/assets/images/step3_image.png')]
               after:left-12
               after:top-24
               after:scale-75
               after:hidden
               ">
                <h1 className="font-bold mb-2 text-xl"> <span className="text-red-600">Step 3:</span> Wait for your match</h1>
                <p className="text-base">A notification will be sent per email <br /> when your match is available.</p>
              </div>
            </div>
          </div>

          {/* step 4 */}
          <div className='mt-0'>
            <div className="flex flex-col items-center max-w-md mx-auto">
              <img src='/assets/images/Vector4.png' alt='vector 4' className='w-full max-w-md' style={{ width: '204px' }} />
            </div>
            <div className="flex flex-col items-center max-w-md mx-auto mb-16 text-center">
              <div className="bg-secondary py-4 px-8 relative rounded-[2rem] w-full max-w-[18rem]
               before:absolute
               before:content-[url('/assets/images/step4_image.png')]
               before:left-24
               before:-bottom-20
               before:scale-75
               before:hidden
               ">
                <h1 className="font-bold text-red-900 mb-2 text-xl"><span className="text-red-600">Step 4:</span> Your turn</h1>
                <p className="text-base">Chat and test your compatibility with  <br />cool games.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}