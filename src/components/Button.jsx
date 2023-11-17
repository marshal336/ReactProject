
const Button = ({ label, iconURL, backgoundColor, borderColor, textColor, fullWidth }) => {
    return (
        <button className={`flex justify-center gap-4
            px-7 py-4 items-center leading-none
            text-lg font-montserrat
            ${backgoundColor
                ? `${backgoundColor} ${textColor} border ${borderColor}`
                : 'text-white bg-coral-red border border-coral-red'}
            rounded-full ${fullWidth && 'w-full'}}`}>
            {label}
            {iconURL && <img
                src={iconURL}
                alt="icon arrow right"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    )
}

export default Button
