import AdviceInfo from "@/widgets/home/advice-info"
import HeroInfo from "@/widgets/home/hero-info"
import PracticeInfo from "@/widgets/home/practice-info"
import WhoWeAre from "@/widgets/home/who-we-are"

export default function Page(){
  return (
    <section>
      <HeroInfo />
      <PracticeInfo />
      <AdviceInfo />
      <WhoWeAre />
    </section>
  )
}
