interface props{
  color:string
}
const FeatureTabCard = (props:props) => {
  const css = props.color
  return (
      <div
          className={`flex flex-col gap-10 justify-center items-center  w-1/2 h-[360px]  border border-[#363535] rounded-2xl  max-md:w-full max-md:h-[290px] max-lg:w-2/3 max-lg:h-[300px] ${css} z-50`}
      >
          <div className="flex flex-col gap-10 justify-center items-center  w-[92%] h-[310px] border border-[#363535]  rounded-2xl  max-md:w-[90%] max-md:h-[250px] max-lg:w-[90%] max-lg:h-[250px] bg-black duration-500">
              <img src="" alt="" />
          </div>
      </div>
  );
}

export default FeatureTabCard