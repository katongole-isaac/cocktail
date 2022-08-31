import Input from "../components/Input";
import Cocktails from "../components/cocktails";

const Home = () => {
  
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-6 justify-self-center mt-5">
          <Input />
        </div>
      </div>
      <Cocktails />
    </>
  );
};

export default Home;
