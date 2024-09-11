import logo from "../assets/logo.svg";


const InstructionCard = () => {
  return (
    <div className="relative w-full overflow-hidden mt-8">
      <div className="relative h-90 md:h-80 lg:h-96 overflow-hidden flex flex-col md:flex-row items-center p-4 border rounded-lg shadow-lg max-w-full mx-auto">
        <div className="w-full md:w-1/3 h-full">
          <img
            className="w-50 h-full object-cover rounded-lg"
            src={logo}
            alt="Instruction"
          />
        </div>
        <div className="w-full md:w-2/3 h-full md:pl-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">HOW IT WORKS</h2>

          <h4 className="text-1xl font-bold mb-2">
            1. SELECT PRODUCT OR SERVICE
          </h4>
          <p className="text-gray-600 mb-4">
            Browse through our catalogue and select what you wish to purchase.
          </p>
          <h4 className="text-1xl font-bold mb-2">
            2. UPLOAD ARTWORK AND PLACE YOUR ORDER
          </h4>
          <p className="text-gray-600">
            Place your order specifying when and where you want your items
            delivered and proceed to pay easily with M-Pesa
          </p>
          <h4 className="text-1xl font-bold mb-2">3. PRINTING & DELIVERY</h4>
          <p className="text-gray-600">
            Our logistics team gets started on your order and once done, our
            delivery partners conveniently deliver at your doorstep
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructionCard;
