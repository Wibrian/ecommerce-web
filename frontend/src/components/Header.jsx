import logo from "../assets/images/logo.svg"
// import logout from "../assets/logout.svg"
import user from "../assets/images/user.svg"
import { Link, NavLink } from "react-router-dom"
import Navbar from "./Navbar"
import { useContext, useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import { FaOpencart } from "react-icons/fa"
import { ShopContext } from "../context/ShopContext"

export default function Header() {
  const [menuOpenned, setMenuOpenned] = useState(false)
  const toggleMenu = () => setMenuOpenned(!menuOpenned)
  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-20 ">
      <div className="px-4 flexBetween py-3 max-xs:px-2">
        <div>
          <Link>
            <img src={logo} alt="" width={66} height={88} />
          </Link>
        </div>
        {/* Navbar Desktop */}
        <Navbar containerStyle={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15 z-30"} />
        {/* Navbar Mobile */}
        <Navbar
          containerStyle={`${
            menuOpenned
              ? "flex md:right-[-100%] items-center flex-col gap-y-12 fixed top-20 right-2 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex items-center flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        <div className="flexBetween sm:gap-x-3 bold-16">
          {!menuOpenned ? (
            <MdMenu
              className="md:hidden hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary transition-all"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary transition-all"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-3">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">{getTotalCartItems()}</span>
            </NavLink>
            {/* <NavLink to={"logout"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
              <img src={logout} alt="logout icon" height={19} width={19} /> Logout
            </NavLink> */}
            <NavLink to={"login"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
              <img src={user} alt="user icon" height={19} width={19} /> Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
