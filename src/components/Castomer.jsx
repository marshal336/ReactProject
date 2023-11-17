import { reviews } from "../constants"
import ReviewCard from "./ReviewCard"

const Castomer = () => {
    return (
        <section className="max-container">
            <h3 className="text-4xl font-palanquin text-center
            font-bold">
                What Our
                <span className="text-coral-red"> Castomer </span>
                Say?
            </h3>
            <p className="info-text text-center m-auto
            nt-4 max-w-lg ">dle e-readers open doorways to infinite stories, revolutionizing how we consume literature. In this era of constant innovation, these products weave a narrative of contemporary living, each purchase echoing a</p>
            <div className="mt-24 flex justify-evenly
            flex-1 max-lg:flex-col gap-14">
                {reviews.map(rev => (
                    <ReviewCard
                        key={rev.customerName}
                        imgURL={rev.imgURL}
                        customerName={rev.customerName}
                        rating={rev.rating}
                        feedback={rev.feedback}
                    />
                ))}
            </div>
        </section>
    )
}

export default Castomer
