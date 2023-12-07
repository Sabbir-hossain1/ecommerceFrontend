import offer_3_banner from '/assets/img/Banner/offer-3.jpg'

const Banner = () => {
  return (
    <div className="m-10 bg-blue-300 cursor-pointer">
      <div className="bg-red-300">
        <img src={offer_3_banner} alt="offer-3" />
      </div>
    </div>
  );
};

export default Banner;
