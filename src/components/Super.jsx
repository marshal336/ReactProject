import { shoe8 } from "../assets/images"
import Button from "./Button"

const Super = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center
    max-lg:flex-col gap-10 max-container w-full">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin
        capitalize lg:max-w-lg font-bold">
          We Provide You <span className="text-coral-red">
            Supper
          </span> <span className="text-coral-red">
            Quality
          </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text"
        >Kindle e-readers open doorways to infinite stories, revolutionizing how we consume literature. In this era of constant innovation, these products weave a narrative of contemporary living, each purchase echoing a personal choice in the grand tapestry of global consumerism.</p>
        <p className="mt-6 lg:max-w-lg info-text"
        >AirPods offer a seamless blend of technology.</p>
        <div className="mt-11">
          <Button //!!!
            label="View details"
          />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
        />
      </div>
    </section>
  )
}

export default Super
