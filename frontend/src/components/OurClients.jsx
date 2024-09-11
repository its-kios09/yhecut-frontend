import Title from "./Title";
import clients from "../assets/Clients.png";

const OurClients = () => {
  return (
    <div className="my-10">
      <div className="text-center py-4 text-3xl">
        <Title text1={"Clients &"} text2={"Partnership"} />
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-4 text-center text-xs sm:text-sm md:text-base text-gray-700">
        <div>
          <img src={clients}/>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
