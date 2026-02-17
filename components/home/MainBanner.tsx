import mainBanner1 from '@/public/images/mainBanner1.png'
import Image from 'next/image'
function MainBanner() {
  return (
    <div className='bg-[#333] h-177.5 relative'>
      <Image src={mainBanner1} alt="Main Banner" className='w-full absolute h-full object-cover' />
      <span className='absolute top-25 w-full z-2 h-px bg-[#d9d9d9bf]'></span>
      <div className='custom_container  border-[#d9d9d9bf]  border-l h-full'>

        <div className="grid grid-cols-6 grid-rows-8 gap-0 w-[calc(100%-120px)] border-[#d9d9d9bf]  border-r h-full ml-[-24px] pt-25">
          <div className="col-span-2 row-span-2 col-start-2 glass"></div>
          <div className="col-span-4 row-span-4 row-start-3 glass relative">
            <span className="absolute right-0 w-px h-[calc(100%*2.1)] top-[-110%] bg-[#d9d9d9bf]"></span>
            <div className='pt-[40px] pl-10'>
              <h1 className='text-[45px] font-bold'>Quick & <span className="text-[#FE2B00] px-3">Accurate</span>Cost</h1>
              <div className='mt-2'>Lorem Ipsum is simply dummy text of the lorem</div>
              <div>Lorem Ipsum is simply dummy text of the</div>
              <button className='mt-10 px-10 py-3  bg-[#FE2B00] text-white '>Calculate Cost</button>
            </div>
            <span className="absolute bottom-0 h-px w-[calc(100%*3)] left-[-40%] bg-[#d9d9d9bf]"></span>
          </div>
          <div className="row-span-2 col-start-6 row-start-5 glass"></div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-7 glass"></div>
        </div>


      </div>
    </div>
  )
}

export default MainBanner