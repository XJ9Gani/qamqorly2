import CustomSectionTitle from '@/shared/ui/custom-section-title'
import InfoBlock from '@/shared/ui/info-block'
import React from 'react'

const AdviceInfo = () => {
  return (
    <section className="h-screen">
        <CustomSectionTitle
          text='Practice Advice'
          constainerClassName='h-1/2 flex flex-col gap-5 items-center justify-center'
          mainTextClassName='text-5xl font-bold text-shadow-lg'
          description='Problems of coordinating care across two vulnerable groups: elderly people and pets'
          descriptionClassName='text-lg text-[#737373] w-1/3 text-center'
          />

          <div className='h-1/3 flex items-start justify-center gap-10 '>
            <InfoBlock
             text="Care"
             containerClassName='border-none w-60 shadow-lg bg-[#f6f4f4] flex-col gap-5'
             description='At first, it seemed that one approach could fit everyone — but later we learned 
             that seniors and animals 
             need different care'
             textClassName='w-full font-medium'/>
            <InfoBlock
             text="Attention"
             description='They describe a 
             universe consisting of 
             bodies moving'
             containerClassName='border-none w-60 shadow-lg bg-[#f6f4f4] flex-col gap-5'
             textClassName='w-full font-medium'/>
            <InfoBlock
             text="Traffic Related Crimes"
             description='They finally obtained a consistent description of the behaviour'
             containerClassName='border-none w-60 shadow-lg bg-[#f6f4f4] flex-col gap-5'
             textClassName='w-full font-medium'/>
          </div>
    </section>
  )
}

export default AdviceInfo