import Image from "next/image";
import MaxWidthWrapper from "../custom/MaxWidthWrapper";


const Vision = () => {
    return (
        <div>
            <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
            <div></div>
            <div className="">
                <Image src="https://i.postimg.cc/4ysfpKG8/Frame-76484-1.png" alt="our vision image" height={500} width={500}  />
            </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default Vision;