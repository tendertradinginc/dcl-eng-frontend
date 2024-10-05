import { customLoader } from '@/utils/customLoader';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const SuccessStoryCard = ({ successStoryData, index, setReload }) => {
    const {
        clientName,
        clientDesignation,
        projectName,
        shortDescription,
        fullDescription,
        location,
        handoverDate,
        image,
    } = successStoryData;

    const isEven = index % 2 === 0; // Check if the index is even

    return (
        <div className="flex flex-wrap w-full relative z-10 bg-secondary mb-4">
            {/* Image Div */}
            <div className={`w-full md:w-3/5 p-4 flex flex-col ${isEven ? '' : 'lg:order-last'}`}>
                <div className="relative h-full border-[6px] border-orange-500 p-2">
                    <Image
                        src={image}
                        alt="Client House"
                        loader={customLoader}
                        width={800}
                        height={600}
                        className="shadow-md h-full object-cover"
                    />
                </div>

                {/* Location and Handover Date */}
                <div className="w-full flex lg:flex-row flex-col justify-between text-start bg-secondary bg-opacity-80 p-2 mt-2">
                    <p className="text-sm font-semibold flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-orange-500" />
                        Location: {location}
                    </p>
                    <p className="text-sm font-semibold flex items-center mt-1">
                        <FaCalendarAlt className="mr-2 text-orange-500" />
                        Handover: {handoverDate}
                    </p>
                </div>
            </div>

            {/* Text Content Div */}
            <div className="w-full md:w-2/5 p-4">
                <p className="text-orange-500 text-base">Happy Client -</p>
                <h2 className="text-xl font-semibold text-black mt-4">{clientName}</h2>
                <h3 className="text-sm font-medium text-gray-600">{clientDesignation}</h3>
                <h1 className="text-base font-semibold text-black mt-2">Project: {projectName}</h1>
                <h4 className="mt-4 text-black text-sm font-semibold inline-block border-b-2 border-orange-500">
                    Their Story
                </h4>
                <p className="mt-2 text-gray-600 leading-relaxed">{shortDescription}</p>
                <p className="mt-2 text-gray-600 leading-relaxed">{fullDescription}</p>
                <p className="text-base font-semibold italic mt-6">Thank you so much DCL Engineering team</p>
            </div>
        </div>
    );
};

export default SuccessStoryCard;
