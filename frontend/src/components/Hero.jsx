import { MdOutlineLocalOffer } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { FaStar } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full pb-12">
      <div className="max_padd_container relative top-32 xs:top-52">
        <h1 className="h1 capitalize max-w-[37rem]">Digital Shop Hub Junction</h1>
        <p className="text-gray-50 regular-16 mt-6 max-w-[33rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate illum rerum nesciunt corporis quis harum maxime perspiciatis
          facere earum dolore itaque dicta, vitae sequi officia eveniet! Provident nemo omnis libero quod dignissimos!
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20">
            308k <span className="regular-16 sm:regular-20">Excelent Reviews</span>
          </div>
        </div>
        <div className="max-xs:flex-col flex gap-2">
          <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
            Shop Now
          </NavLink>
          <NavLink to={""} className={"btn_dark_rounded flexCenter gap-x-2"}>
            <MdOutlineLocalOffer /> Offers
          </NavLink>
        </div>
      </div>
    </section>
  )
}
