import ImageMosaic from "./ImageMosaic";

export default function PostFormCard() {
  return (
    <div className="relative text-center">
      <div className="">
        <img
          className="m-auto mb-5 shadow-lg shadow-gray-700"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-861947805411509899/original/c4c6091e-d505-4af9-b80a-ef13d9fa3d7e.jpeg?im_w=1200"
          alt=""
        />
      </div>
      <div className="text-center ">
        <div className="text-black absolute top-2 md:top-24">
          <h2 className="text-4xl font-semibold">
            <span className="text-shadow-lg shadow-gray-300">
              Welcome to Freddy personal site.
            </span>
          </h2>
          <br />
          <span className="text-lg font-medium text-shadow-lg shadow-gray-300">
            I work as a Full Stack Engineer and write blogs "sometimes" about all things software "so far"
          </span>
        </div>
      </div>
 
    </div>
  );
}
