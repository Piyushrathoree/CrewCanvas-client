
import {
  UsersIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketSquareIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/solid';
import TeamspaceCard from '../ui/TeamspaceCard';

const teamspaceData = [
  {
    title: 'Engineering',
    desc: 'Product development and R&D',
    icon: <CodeBracketSquareIcon className="w-12 h-12 text-blue-500 border-2 rounded-full" />,
    members: 12,
    lastUpdated: '2 days ago',
  },
  {
    title: 'Design',
    desc: 'UI/UX and branding',
    icon: <LightBulbIcon className="w-12 h-12 text-yellow-400 border-2 rounded-full" />,
    members: 8,
    lastUpdated: '5 hours ago',
  },
  {
    title: 'Marketing',
    desc: 'Socials, outreach, and PR',
    icon: <RocketLaunchIcon className="w-12 h-12 text-purple-500 border-2 rounded-full" />,
    members: 10,
    lastUpdated: '1 day ago',
  },
  {
    title: 'Operations',
    desc: 'Daily workflows and admin',
    icon: <Cog6ToothIcon className="w-12 h-12 text-gray-400 border-2 rounded-full" />,
    members: 6,
    lastUpdated: '4 days ago',
  },
  {
    title: 'QA & Testing',
    desc: 'Bug tracking and testing tools',
    icon: <ClipboardDocumentCheckIcon className="w-12 h-12 text-green-500 border-2 rounded-full" />,
    members: 7,
    lastUpdated: '3 hours ago',
  },
  {
    title: 'Support',
    desc: 'Customer support and helpdesk',
    icon: <UsersIcon className="w-12 h-12 text-blue-400 border-2 rounded-full" />,
    members: 14,
    lastUpdated: 'Just now',
  },
  {
    title: 'Tools Team',
    desc: 'Internal tool development',
    icon: <WrenchScrewdriverIcon className="w-12 h-12 text-pink-400 border-2 rounded-full" />,
    members: 4,
    lastUpdated: '6 hours ago',
  },
  {
    title: 'Projects',
    desc: 'Project management & timelines',
    icon: <PresentationChartLineIcon className="w-12 h-12 text-indigo-400 border-2 rounded-full" />,
    members: 9,
    lastUpdated: 'Yesterday',
  },
];

const TeamspaceCardList = () => {
  return (
    <div className="flex flex-wrap justify-center items gap-6 p-6">
      {teamspaceData.map((item, index) => (
        <TeamspaceCard
          key={index}
          title={item.title}
          desc={item.desc}
          icon={item.icon}
          members={item.members}
          lastUpdated={item.lastUpdated}
        />
      ))}
    </div>
  );
};

export default TeamspaceCardList;
