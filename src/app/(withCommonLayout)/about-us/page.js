import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import CEO from "@/components/FrontendComponent/CEO/CEO";
import MD from "@/components/FrontendComponent/MD/MD";
import OurPromise from "@/components/FrontendComponent/OurPromise/OurPromise";
import Team from "@/components/FrontendComponent/Team/Team";


const page = () => {
    return (
        <div>
            <MaxWidthWrapper className="min-h-[100vh]">
                <CEO />
                <MD />
                <Team />

            </MaxWidthWrapper>
            <OurPromise />
        </div>
    );
};

export default page;