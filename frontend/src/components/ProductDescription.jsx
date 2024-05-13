export default function ProductDescription() {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">Description</button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Care Guide</button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Size Guide</button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur mollitia eveniet? Officiis quasi eaque accusantium, impedit maxime
          harum iure dolore quod ipsa. Accusamus reprehenderit architecto officia delectus, veritatis, recusandae, facilis iste natus ad illo ab
          inventore? Quasi iusto rem, repellat itaque recusandae consectetur temporibus ipsum velit, cumque neque harum deserunt voluptas!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore fugit modi unde minus atque quas error fuga quia nobis quasi
          sequi, delectus natus quod ut placeat praesentium.
        </p>
      </div>
    </div>
  )
}
