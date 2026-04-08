import AuthFlow from '@/widgets/auth/auth-flow'

const Auth = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-linear-to-b from-[#D0A144]  via-[#d4a74b] 0 to-purple-[#FFFFFF]">
      <div className="relative bg-white w-1/3 h-fit shadow rounded-lg flex flex-col">
        <p className="text-center text-[#D0A144] font-semibold text-[3rem]">
          Qamqorly
        </p>
        <AuthFlow />
      </div>
    </section>
  )
}

export default Auth
