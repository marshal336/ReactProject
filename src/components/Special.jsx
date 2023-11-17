import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "./Button"


const Special = () => {
  return (
    <section className="flex justify-wrap items-center
    max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          className="object-contain w-full bg-center"
        />
      </div>
      <div>
        <h2 className="text-4xl font-palanquin
        capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red">
            Special
          </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text"
        >Kindle e-readers open doorways to In this era of constant innovation, these products weave a narrative of contemporary living, each purchase echoing a personal choice in the grand tapestry of global consumerism.</p>
        <p className="mt-6 lg:max-w-lg info-text"
        >AirPods offer a seamless blend of technology.</p>
        <div className="mt-11 flex gap-5">
          <Button
            label="AirPods"
            iconURL={arrowRight}
          />
          <Button
            label="learn more"
            backgoundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>

    </section>
  )
}

export default Special
