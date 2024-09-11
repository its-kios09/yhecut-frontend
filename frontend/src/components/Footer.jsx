import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm w-full">
      <div>
        <img src={logo} className="mb-5 w-32" alt="Company Logo" />
        <p className="w-full md:w-2/3 text-gray-600">
          Located in Nairobi, Kenya we offer premium & top quality branding &
          signage solutions ranging from T-shirts, polos, hoodies, jerseys,
          branded corporate merchandise, indoor & outdoor signage, 3D & 2D
          signage installation.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">YheCut</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Phone: +254 722 400 222</li>
          <li>Email: yhecut.com</li>
          <li>Facebook: yhecut</li>
          <li>Instagram: yhecut</li>
          <li>Twitter: yhecut</li>
        </ul>
      </div>
      <div className="col-span-full">
        <hr />
        <p className="py-5 text-sm text-center">
          © 2023 YheCut. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
