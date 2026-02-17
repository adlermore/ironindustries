import mainBanner1 from '@/public/images/mainBanner1.png'
import Image from 'next/image'

function MainBanner() {
  return (
    <div className='bg-[#333] h-177.5 relative mt-30 overflow-hidden'>
      <Image
        src={mainBanner1}
        alt="Main Banner"
        className='w-full absolute h-full object-cover'
        priority
      />

      <span className='absolute top-25 left-0 w-full h-px bg-[#d9d9d9bf] z-10 animate-line-x origin-left delay-1 '>
        <span className="trace-x"></span>
      </span>

      <div className='custom_container relative h-full'>
        <span className="absolute left-0 top-0 w-px h-full bg-[#d9d9d9bf] animate-line-y origin-top delay-2 o">
          <span className="trace-y"></span>
        </span>

        <div className="relative grid grid-cols-6 grid-rows-8 gap-0 w-[calc(100%-120px)] h-full -ml-6 pt-25">
          <span className="absolute right-0 top-0 w-px h-full bg-[#d9d9d9bf] animate-line-y origin-top delay-3 ">
            <span className="trace-y"></span>
          </span>

          <div className="col-span-2 row-span-2 col-start-2 glass"></div>

          <div className="col-span-4 row-span-4 row-start-3 glass relative">
            <span className="absolute right-0 w-px h-[calc(100%*2.1)] top-[-110%] bg-[#d9d9d9bf] animate-line-y origin-top delay-4 ">
              <span className="trace-y"></span>
            </span>

            <div className='pt-10 pl-10'>
              <h1 className='text-[45px] font-bold text-white'>
                Quick & <span className="text-[#FE2B00] px-3">Accurate</span> Cost
              </h1>
              <div className='mt-2 text-white'>
                Lorem Ipsum is simply dummy text of the lorem
              </div>
              <div className='text-white'>
                Lorem Ipsum is simply dummy text of the
              </div>
              <button className='mt-10 px-10 py-3 bg-[#FE2B00] text-white'>
                Calculate Cost
              </button>
            </div>

            <span className="absolute bottom-0 h-px w-[calc(100%*3)] left-[-40%] bg-[#d9d9d9bf] animate-line-x origin-left delay-5 ">
              <span className="trace-x"></span>
            </span>
          </div>

          <div className="row-span-2 col-start-6 row-start-5 glass"></div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-7 glass"></div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
