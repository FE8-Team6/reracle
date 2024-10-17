import { FaSearch } from 'react-icons/fa';
import { wasteCategories } from '@/lib/constants/wasteCategories';
import { wasteCategoryImages } from '@/lib/constants/wasteCategoryImages';
import { chunkArray } from '@/lib/utils/chunkArray';
import SearchBar from './SearchBar';
import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';
import { NavLink } from 'react-router-dom';

export const WasteCategory = () => {
  const chunkedCategories = chunkArray(wasteCategories, 9);

  return (
    <section className="w-[56.3vh] h-[79.7vh] flex flex-col justify-center overflow-y-auto">
      <div className="flex items-center rounded-[2vh] border border-purple-600 gap-[1.5vh] px-[2.5vh] mx-auto">
        <FaSearch />
        <SearchBar />
      </div>
      <hr className="w-[46vh] h-px my-[3vh] bg-purple-600 mx-auto" />
      <h2 className="text-[2.3vh] font-bold text-purple-600 mt-[0.6vh] ml-[5vh]">재활용품 분류</h2>
      <SlCarousel pagination mouse-dragging className="w-[46vh] h-[60vh] mx-auto">
        {chunkedCategories.map((chunk, index) => (
          <SlCarouselItem key={index} className="mb-[1vh]">
            <div className="grid grid-cols-3 gap-y-[1.5vh] w-[45vh] mt-[2vh]">
              {chunk.map((category) => (
                <NavLink key={category.id} to={`/${category.id}`} className="text-gray-800 no-underline">
                  <div className="bg-yellow-100 w-3/4 h-[6rem] flex justify-center items-center rounded-lg mx-auto hover:bg-yellow-300 cursor-pointer">
                    {category.img && (
                      <img
                        src={wasteCategoryImages[category.img]}
                        alt={category.name}
                        className="flex justify-center max-w-[60%] h-auto"
                      />
                    )}
                  </div>
                  <p className="text-base font-medium mt-1 text-center">{category.name}</p>
                </NavLink>
              ))}
            </div>
          </SlCarouselItem>
        ))}
      </SlCarousel>
    </section>
  );
};

export default WasteCategory;
