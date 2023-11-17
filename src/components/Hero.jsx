import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants"
import Button from "./Button"
import Shoe from "./Shoe"



const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1)
  return (
    <section
      id="#home"
      className="w-full p-2 min-h-screen 
      flex xl:flex-row flex-col 
      justify-center max-container"
    >
      <div className="reletive xl:w-2/5 flex 
      flex-col justify-center items-start 
      w-full max-xl:padding-x pt-8">
        <p className="text-xl font-montserrat
         text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-palanquin 
        mt-10 font-bold
        max-sm:text-[72px]
        max-sm:leading-[82px]
        reletive z-10">
          <span className="xl:bg-white
          xl:whitespace-nowrap reletive z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3
          inline-block">
            Nike
          </span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat
        text-lg leading-8 mb-14 mt-8">
          Discover stylish Nike arrivals,
          quality comfort and innovation
          for you active life
        </p>
        <Button //!!!
          label="Show now"
          iconURL={arrowRight} />
        <div className="flex justify-start items-start 
          mt-20 flex-wrap w-full gap-9 sm:max-w-sm">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-palanquin font-bold">
                {item.value}
              </p>
              <p className="leading-7 font-montserrat
              text-slate-gray">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1
      justify-center items-center xl:min-h-screen
      max-lg:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe}
          alt="Shoe colection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex absolute -bottom-[5%]
        sm:left-[10%] max-sm:px-6 
        gap-4 max-sm:gap-6">
          {shoes.map(item => (
            <div>
              <Shoe
                imgURL={item}
                changeBigShoeImage=
                {(item) => setBigShoe(item)}
                bigShoeImg={bigShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
