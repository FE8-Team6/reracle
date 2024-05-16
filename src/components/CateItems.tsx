import { categories } from '@/lib/constants/categories';
import { categoryItemsImages } from '@/lib/constants/categoryItemsImages';
import { NavLink, useParams } from 'react-router-dom';
import { Layout } from './layout/Layout';
import {
  CategoryWrapper,
  CategroryGird,
  HorizontalLine,
  StyledCategoryText,
  StyledImg,
  StyledSlCarousel,
  StyledSlCarouselItem,
  StyledNavLink,
  CategoryName,
} from '@/styles/carouselStyle';

const CateItems = () => {
  const { categoryId } = useParams();
  const category = categories.find((category) => category.id === categoryId);

  if (!category || !category.items) {
    return <div>카테고리를 찾을 수 없습니다.</div>;
  }
  const chunkedItems = [];
  const chunkSize = 9;

  for (let i = 0; i < category.items.length; i += chunkSize) {
    chunkedItems.push(category.items.slice(i, i + chunkSize));
  }

  return (
    <Layout>
      <HorizontalLine />
      <StyledCategoryText>재활용품 세부 품목</StyledCategoryText>
      <StyledSlCarousel pagination mouse-dragging>
        {chunkedItems.map((chunk, index) => (
          <StyledSlCarouselItem key={index}>
            <CategroryGird>
              {chunk.map((item) => (
                <div key={item.id}>
                  <StyledNavLink to={`/${categoryId}/${item.id}`}>
                    <CategoryWrapper>
                      {item.img && <StyledImg src={categoryItemsImages[item.img]} alt={item.name} />}
                    </CategoryWrapper>
                    <CategoryName>{item.name}</CategoryName>
                  </StyledNavLink>
                </div>
              ))}
            </CategroryGird>
          </StyledSlCarouselItem>
        ))}
      </StyledSlCarousel>
    </Layout>
  );
};

export default CateItems;
