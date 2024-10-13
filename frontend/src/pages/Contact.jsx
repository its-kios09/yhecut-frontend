import Title from "../components/Title";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full sm:max-w-[480px] mt-10"
      >
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="tel"
          placeholder="Phone number"
          required
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
          required
        />
        <textarea
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full h-[200px]"
          placeholder="Interested In? "
          required
        />
        <button className="bg-red text-white text-sm px-16 py-3">
          Send enquiry
        </button>
      </form>
    </div>
  );
};

export default Contact;
