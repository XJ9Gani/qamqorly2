import CustomSectionTitle from '@/shared/ui/custom-section-title'
import SpeedIcon from '@/shared/ui/icons/speed-icon'
import UsersIcon from '@/shared/ui/icons/users-icon'
import Image from 'next/image'

const WhoWeAre = () => {
  return (
    <section className="h-screen">
      <CustomSectionTitle
        text="Who we are?"
        constainerClassName="h-1/2 flex flex-col gap-5 items-center justify-center"
        mainTextClassName="text-5xl font-bold text-shadow-lg"
        description="Problems of coordinating care across two vulnerable groups: elderly people and pets"
        descriptionClassName="text-lg text-[#737373] w-1/3 text-center"
      />
      <div className="flex justify-center gap-10">
        <div className="w-1/3 h-80 overflow-hidden">
          <Image
            src="/who_we_are.jpg"
            alt="who we are"
            width={700}
            height={400}
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-[2rem] font-bold">Our Approach to Care</h2>

          <p className="text-[14px] text-[#737373]">
            We focus on reliable, thoughtful care that prioritizes safety,
            emotional well-being, and trust. Our approach is built around real
            human needs — not just supervision, but genuine attention.
          </p>

          <div className="flex gap-5 mt-4">
            <span>
              <UsersIcon />
            </span>

            <div className="flex flex-col gap-3">
              <p className="text-[16px] font-bold">
                Experienced and verified sitters
              </p>

              <p className="text-[#737373] text-[14px]">
                People you can trust with those you care about most
              </p>
            </div>
          </div>
          <div className="flex gap-5 mt-4">
            <span>
              <SpeedIcon />
            </span>

            <div className="flex flex-col gap-3">
              <p className="text-[16px] font-bold">
                Experienced and verified sitters
              </p>

              <p className="text-[#737373] text-[14px]">
                People you can trust with those you care about most
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
