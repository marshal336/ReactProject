import { star } from "../assets/icons"

const ReviewCard = ({ customerName, imgURL, rating, feedback }) => {
    return (
        <div className="flex flex-col 
        justify-center items-center">
            <img
                src={imgURL}
                alt="castomer"
                className="rounded-full object-cover
                w-[120px] h-[120px]"
            />
            <p className="text-center m-5 max-w-lg text-slate-gray
            text-xl">{feedback}</p>
            <div className="mt-3 flex gap-4">
                <img
                    src={star}
                    width={24}
                    height={24}
                    className="m-0 object-contain"
                />
                <p>{rating}</p>
            </div>
            <h3 className="text-2xl mt-3">{customerName}</h3>
        </div>
    )
}

export default ReviewCard
