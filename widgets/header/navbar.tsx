import RouterLink from '@/shared/ui/router-link'

const NavBar = () => {
  return (
    <nav className="flex gap-4">
      <RouterLink text="Home" link="/" />
      <RouterLink text="Product" link="/products" />
      <RouterLink text="Pricing" link="/pricing" />
      <RouterLink text="Contact" link="/contact" />
    </nav>
  )
}

export default NavBar
