import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import CEO from "@/components/FrontendComponent/CEO/CEO";
import MD from "@/components/FrontendComponent/MD/MD";
import Team from "@/components/FrontendComponent/Team/Team";


const page = () => {
    return (
        <div>
            <MaxWidthWrapper className="min-h-[100vh]">
                <CEO />
                <MD />
                <Team />
            </MaxWidthWrapper>
        </div>
    );
};

export default page;