require("../assets/styles/home.css");

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          className="home-image"
          src={require("../assets/images/bluemed.jpg")}
        ></img>
      </div>
    </div>
  );
};

export default Home;
