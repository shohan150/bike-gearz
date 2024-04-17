import bannerImg from "../../assets/banner img.png";
export default function Banner() {
  return (
    <div className="py-16 lg:py-32 flex justify-center items-center dark:bg-gray-900">
      <div className="px-7 lg:px-10 ">
        <div className="bg-primary dark:bg-primary/80 grid grid-cols-3 md:gap-6 gap-2 items-center text-white rounded-3xl">
          <div className="p-6 sm:p-8 space-y-3">
            <p className="text-lg">20% off</p>
            <h1 className="uppercase text-3xl lg:text-5xl font-bold">
              Great buy. Safe Ride.
            </h1>
            <p>5 days remaining</p>
          </div>
          <div className="h-full flex items-center">
            <img
              src={bannerImg}
              className="scale-125 drop-shadow-2xl object-cover"
            />
          </div>
          <div className="p-6 sm:p-8 space-y-5 text-right">
            <p className="font-semibold text-2xl">On All Helmets</p>
            <p className="text-4xl font-bold">Summer Sale</p>
            <p className="text-md leading-5 tracking-wide">
              Exclusive seasonal offer on helmets of all brands. Great buy. Safe
              Ride.
            </p>
            <div>
              <button className="border-2 py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-primary">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
