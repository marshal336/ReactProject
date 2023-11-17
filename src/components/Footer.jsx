import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20
      flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a
            href="/">
            <img
              src={footerLogo}
              alt="footerLogo"
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat
          text-white-400 sm:max-w-sm">
            Popular products are the heartbeat of consumer
            culture, defining trends and shaping lifestyles.
            From sleek iPhones to iconic Nike sneakers
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(logo => (
              <div className="flex justify-center items-center
            gap-8 bg-white rounded-full w-12 h-12">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between flex-1
        lg:gap-10 gap-20">
          {footerLinks.map(fL => (
            <div>
              <h4 className="text-white
              text-3xl font-montserrat font-medium
              leading-normal mb-4">{fL.title}</h4>
              <ul>
                {fL.links.map(links => (
                  <li>
                    <a
                      href={links.link}
                      className="text-white-400 font-montserrat
                     text-base leading-normal hover:text-slate-gray">
                      {links.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-sm:items-center
        text-white-400 mt-24 max-sm:flex-col">
          <div className="flex flex-1 justify-start font-montserrat
          gap-2 items-center">
            <img 
              src={copyrightSign}
            />
            <p>Copyright All rights reserved</p>
          </div>
          <p className="font-montserrat">Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer
