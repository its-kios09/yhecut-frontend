import Title from "../components/Title";
import logo from "../assets/logo.svg";
import companyProfile from "../doc/yhecut-media-profile.pdf";



const About = () => {
  return (
    <>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className=" flex flex-col md:flex-row gap-16">
        <img src={logo} className="w-25 md:max-w-[450px]" alt="Logo" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Yhecut media help you design messages and imagery that will open the
            and hearts and mind of your audience and improve customer engagement
            and Sales.
          </p>
          <p>
            We specialize in creating visually appealing and engaging content
            that resonates with your target audience. Also to create solutions
            tailored to the needs of our clients & get them to stand out and to
            be a renowned branding agency offering unique solutions both locally
            and internationally.
          </p>
          <button
            className="bg-red text-white text-sm py-2 px-4"
            style={{ width: "300px" }}
            onClick={() => window.open(companyProfile, "_blank")}
          >
            Download Our Company Profile
          </button>

          <b className="text-gray-800"> Our mission</b>
          <p>
            To Create unique & creative works for our clients by optimizing our
            potential and resources.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
