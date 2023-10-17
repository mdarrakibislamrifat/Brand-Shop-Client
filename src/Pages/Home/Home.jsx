import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-20">
        {/* first cart */}
        <div className="card my-4 mx-4 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px]"
              src="https://i.ibb.co/RNk8JjG/1511456315-653-apple-desktop.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-center text-3xl">Apple</h2>
          </div>
        </div>
        {/* second card */}
        <div className="card my-4 mx-4 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px] "
              src="https://i.ibb.co/8Nc4y5y/Samsung-Logo-svg.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-center text-3xl">Samsung</h2>
          </div>
        </div>
        {/* third card */}
        <div className="card my-4 mx-4 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px] "
              src="https://i.ibb.co/ygNNL5x/Google-logo-500x281.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-center text-3xl">Google</h2>
          </div>
        </div>
        {/* forth card */}
        <div className="card my-4 mx-4 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px] "
              src="https://i.ibb.co/wrJ4Mdh/Xiaomi-logo-500x281.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-center text-3xl">Xiaomi</h2>
          </div>
        </div>
        {/* fifth card */}
        <div className="card my-4 mx-4 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px] "
              src="https://i.ibb.co/W2sGLnc/realme5985-logowik-com.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-center text-3xl">Realme</h2>
          </div>
        </div>
        {/* sixth card */}
        <div className="card my-4 mx-4 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px] "
              src="https://i.ibb.co/S3rz3x8/Sony-logo-500x281.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-center text-3xl">Sony</h2>
          </div>
        </div>
      </div>
      {/* new arival phone */}
        <h2 className="text-center text-3xl font-bold underline">New Arrival Phones</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/vPbnf9P/apple-iphone-15-pro-max-1.jpg"
              class=" w-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                iPhone 15 Pro Max
              </p>
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                $95.00
              </p>
            </div>
            <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            You still get a 6.7-inch OLED display with a 2796 x 1290 resolution and a 120Hz variable refresh rate. Brightness levels are also the same, delivering 1,000 nits for typical max brightness, 1,600 nits for viewing HDR content, and up to 2,000 nits for peak outdoor brightness.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* second arival phone */}
        <div class="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://i.ibb.co/PMJ5GVv/google-pixel-8-pro-1.jpg"
              class=" w-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="mb-2 flex items-center justify-between">
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                Google Pixel 8 Pro
              </p>
              <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                $75.00
              </p>
            </div>
            <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            Fully upgraded cameras and never-before-seen editing. Polished aluminum frame and matte back glass. The power and brains behind Pixel 8 Pro. The new Google Tensor G3 chip is custom-designed with Google AI for cutting-edge photo and video features and smarter ways to help throughout the day.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
