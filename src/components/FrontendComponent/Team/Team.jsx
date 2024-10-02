import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import TeamMemberSlider from "./TeamMemberSlider";


const Team = () => {
    return (
        <div className="mt-20">
            <SectionHeadingCenter subTitle="Our Professionals" title="OUR DEDICATED TEAM" />
            <TeamMemberSlider />
            
        </div>
    );
};

export default Team;