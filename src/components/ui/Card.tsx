interface CardProps {
  title: string;
  desc?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const TsCard = (props: CardProps) => {
  return (
    <div className="p-6 rounded-2xl shadow-md transition-all bg-black flex flex-col items-center gap-2 w-full max-w-sm border-2 border-white/20 cursor-pointer hover:-translate-y-1 hover:text-white">
      <div className="flex flex-row items-center justify-start gap-4 w-full text-xl">
        {/* Icon */}
        <div className="flex-row gap-3 text-white">{props.icon}</div>

        {/* Title and Description */}
        <div className="flex-col gap-5 mt-1">
          <h3 className="font-semibold text-white text-2xl">{props.title}</h3>
          <p className="text-md text-white mt-2">{props.desc}</p>
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-row items-center justify-between w-full">
        <button
          onClick={props.onClick}
          className="mt-4 text-lg text-white bg-purple-600 hover:underline-offset-8 border-2 border-purple-400 rounded-lg px-4 py-2 transition duration-200 ease-in-out cursor-pointer hover:bg-purple-500 hover:text-black active:text-black flex flex-row items-center w-full justify-center"
        >
          {props.title}
        </button>
      </div>
    </div>
  );
};

export default TsCard;
