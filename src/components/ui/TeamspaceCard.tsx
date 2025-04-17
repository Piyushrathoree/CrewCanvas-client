interface TeamspaceCardProps {
  title: string;
  desc?: string;
  icon: React.ReactNode;
  onClick?: () => void;
  members: number;
  lastUpdated: string;
}

const TeamspaceCard = (props: TeamspaceCardProps) => {
  return (
    <div className="w-[600px] h-[180px] bg-black rounded-xl shadow-md flex flex-col justify-between p-6 m-4 border-purple-500 border-2 hover:border-purple-700 transition duration-200 ease-in-out ">
      {/* //this is the main div having col */}
      <div className="flex flex-row  items-center gap-3">
        {props.icon}
        <div className=" flex flex-row justify-between m-1 items-center w-full">
          <div className="justify-between m-1 flex flex-col w-full">
            <h2 className="text-xl">{props.title}</h2>
            <h2 className="text-md mt-1">{props.desc}</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-10 w-10 h-10 text-blue-500 hover:text-gray-200 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-5 justify-between mt-2">
          <div className="gap-4 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <span className="text-gray-500">{props.members} Members</span>
          </div>
          <span className="text-gray-500">Last updated: {props.lastUpdated} </span>
        </div>
      </div>
    </div>
  );
};

export default TeamspaceCard;

/* w- 560px h-130px */

/* 
<div className="w-[600px] h-[180px] bg-black rounded-xl shadow-md flex flex-col justify-between p-6 m-4 border-purple-500 border-2 hover:border-purple-700 transition duration-200 ease-in-out ">
   
      <div className="flex flex-row justify-between  items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6  w-10 h-20 text-blue-500 hover:text-gray-200 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>

        <div className="justify-between m-1 flex flex-col">
          <h2 className="text-xl">Hardwork Teamspace</h2>
          <h2 className="text-md mt-1">This is a Hardwork Teamspace for members to work hard</h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-10 w-10 h-10 text-blue-500 hover:text-gray-200 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div>
        <div className="flex items-center gap-5 justify-between mt-2">
          <div className="gap-4 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <span className="text-gray-500">5 members</span>
          </div>
          <span className="text-gray-500">Last updated: 2 days ago</span>
        </div>
      </div>
    </div> */
