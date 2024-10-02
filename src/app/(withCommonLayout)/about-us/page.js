import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import CEO from "@/components/FrontendComponent/CEO/CEO";


const page = () => {
    return (
        <div>
            <MaxWidthWrapper className="min-h-[100vh]">
                <CEO />
            </MaxWidthWrapper>
        </div>
    );
};

export default page;