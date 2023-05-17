import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = ({ images = [] }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                {images.map((slider, key) => (
                    <div key={key} align="center">
                        <img src={`/slider-${slider}.png`} alt={`slider-${slider}`} style={{ display: "block" }} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident atque accusamus alias
                            quis, quae rerum iure ad deleniti totam, officia laudantium repudiandae perspiciatis ea
                            velit, fugiat reiciendis? Natus, similique reprehenderit!
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
