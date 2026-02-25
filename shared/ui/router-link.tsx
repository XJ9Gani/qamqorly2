import Link from "next/link"

const RouterLink = ({
    link,
    text,
}: {
    link: string,
    text: string,
}) => {
  return (
    <Link href={link} className="text-md text-[#737373] font-semibold">{text}</Link>
  )
}

export default RouterLink