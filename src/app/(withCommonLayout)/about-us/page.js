import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import CEO from "@/components/FrontendComponent/CEO/CEO";
import MD from "@/components/FrontendComponent/MD/MD";


const page = () => {
    return (
        <div>
            <MaxWidthWrapper className="min-h-[100vh]">
                <CEO />
                <MD />
            </MaxWidthWrapper>
        </div>
    );
};

export default page;