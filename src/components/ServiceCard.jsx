

const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="sm:min-w-[350px] sm:w-[350px]
        px-10 py-16 w-full shadow-2xl shadow-slate-400 rounded-[20px]">
            <div className="flex justify-center items-center
            bg-coral-red rounded-full w-11 h-11">
                <img
                    src={imgURL}
                    alt={label}
                    width={24}
                    height={24}
                />
            </div>
            <h3 className="mt-5 font-palanquin text-3xl leading-normal
            font-bold">{label}</h3>
            <p className="break-words mt-3 font-montserrat
            text-lg leading-normal text-slate-gray">{subtext}</p>
        </div>
    )
}

export default ServiceCard
