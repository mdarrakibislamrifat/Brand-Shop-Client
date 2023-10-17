import Banner from "../../Components/Banner/Banner";

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
            <img className="h-[300px]"
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
            <img className="h-[300px] "
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
            <img className="h-[300px] "
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
            <img className="h-[300px] "
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
            <img className="h-[300px] "
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
            <img className="h-[300px] "
              src="https://i.ibb.co/S3rz3x8/Sony-logo-500x281.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
          <h2 className="font-bold text-center text-3xl">Sony</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
