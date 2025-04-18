import FeatureSection from "@/components/landing/Features/FeatureSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSectionOne from "@/components/landing/HeroSection";
import LabelButton from "@/components/landing/Labelbutton";
const LandingPage = () => {
    return (
        <div className="mt-20  w-screen px-[8%] flex flex-col">
            <Header />
            <HeroSectionOne />
            <div className="p-2 rounded-full size-10  flex justify-center items-center translate-y-2 animate-bounce hover:scale-130 duration-300 w-full mx-auto">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-white lucide lucide-chevron-down-icon lucide-chevron-down"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </div>
            <div className="my-8 h-[1px] max-md:mr-4 w-full mx-auto bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700" />
            <LabelButton label={"Features"} />
            <br />
            <br />
            <FeatureSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
