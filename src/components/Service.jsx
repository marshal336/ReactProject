import { services } from '../constants'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (
    <section
      id='service'
      className='flex justify-between items-center gap-4
    max-lg:flex-col w-full flex-wrap max-container'>
        {services.map(service => (
          <ServiceCard
            imgURL={service.imgURL}
            label={service.label}
            subtext={service.subtext}
          />
        ))}
    </section>
  )
}

export default Service
