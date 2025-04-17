import CardList from '@/components/Dashboard/CardList';
import { CreateTeamspace } from '@/components/Dashboard/CreateTeamspace';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import Sidebar from '@/components/Dashboard/SideBar';
import TeamspaceCardList from '@/components/Dashboard/TeamspaceCardList';
import TeamspaceCard from '@/components/ui/TeamspaceCard';

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen h-screen relative">
      <div className="h-[9%] flex items-center justify-center ">
        <DashboardHeader />
      </div>
      <div className="h-[91%] w-full fixed left-0">
        <Sidebar />
      </div>
      <div className="min-h-[91%] absolute right-0 bg-black w-[85%] p-3 text-white flex flex-col ">
        <div className="flex flex-row items-center justify-between w-full  p-2">
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
          <CreateTeamspace />
        </div>
        <p className="text-xl  text-gray-300 p-2 mb-4">Welcome back, John Doe</p>
        <CardList />
        <div className="my-8 h-[1px] max-md:mr-4 w-full mx-auto bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700" />
        <p className="text-2xl  text-white ml-3 "> All Team Spaces</p>
        <TeamspaceCardList />
      </div>
    </div>
  );
};

export default Dashboard;
