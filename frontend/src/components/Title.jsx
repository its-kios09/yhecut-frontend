
const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-blue font-josefin">
        {text1} <span className="text-blue font-medium">{text2}</span>
      </p>
      <p className="w-20 sm:w-12 h-[1px] sm:h-[2px] bg-blue font-bold"></p>
    </div>
  );
};

export default Title;
