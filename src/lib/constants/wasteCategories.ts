import { WasteCategoryTypes } from '@/lib/types/wasteTypes';

export const wasteCategories: WasteCategoryTypes[] = [
  {
    id: 'paper',
    name: '종이',
    img: 'paper',
    items: [
      {
        id: 'newspaper',
        name: '신문지',
        img: 'newspaper',
        disposalMethod:
          '쓰레기는 재활용하지 않으면 매립하거나 소각하여야 하는데, 이러면 돈이 든다. 때문에 버릴 때마다 돈을 내고서 버리거나 정부나 지자체에서 예산을 들여서 처리해야 한다. 하지만 분리배출된 쓰레기는 그대로 가져가서 재활용할 수 있기 때문에 재활용 업체에서 가져가 준다. 덕분에 대부분의 재활용 쓰레기는 분리배출하면 공짜로 버릴 수 있다. 하지만 재활용에도 회수, 재분류, 재처리 등의 비용이 들고 재활용해도 값이 잘 안 나오는 쓰레기도 ',
      },
      { id: 'ricebag', name: '쌀포대', img: 'ricebag', disposalMethod: '쌀포대 버리는 방법' },
      { id: 'notebook', name: '수첩', img: 'notebook', disposalMethod: '수첩 버리는 방법' },
      {
        id: 'magazine',
        name: '잡지',
        img: 'magazine',
        disposalMethod: '잡지 버리는 방법',
      },
      {
        id: 'priceTag',
        name: '가격표',
        img: 'priceTag',
        disposalMethod: '가격표 버리는 방법',
      },
      {
        id: 'cardboard',
        name: '골판지',
        img: 'cardboard',
        disposalMethod: '골판지 버리는 방법',
      },
      {
        id: 'flyer',
        name: '전단지',
        img: 'flyer',
        disposalMethod: '전단지 버리는 방법',
      },
      {
        id: 'paperCup',
        name: '종이컵',
        img: 'paperCup',
        disposalMethod: '종이컵 버리는 방법',
      },
      {
        id: 'businessCard',
        name: '명함',
        img: 'businessCard',
        disposalMethod: '명함 버리는 방법',
      },
      {
        id: 'encyclopedia',
        name: '백과사전',
        img: 'encyclopedia',
        disposalMethod: '백과사전 버리는 방법',
      },
      {
        id: 'paperbox',
        name: '종이상자',
        img: 'paperbox',
        disposalMethod: '종이상자 버리는 방법',
      },
      {
        id: 'book',
        name: '책',
        img: 'book',
        disposalMethod: '책 버리는 방법',
      },
      {
        id: 'calendar',
        name: '캘린더',
        img: 'calendar',
        disposalMethod: '캘린더 버리는 방법',
      },
    ],
  },
  {
    id: 'paperPack',
    name: '종이팩',
    img: 'paperPack',
    items: [{ id: 'milkpack', name: '우유팩', img: 'milkpack', disposalMethod: '우유팩 버리는 방법' }],
  },
  {
    id: 'can',
    name: '금속캔',
    img: 'can',
    items: [
      {
        id: 'spray',
        name: '스프레이',
        img: 'spray',
        disposalMethod: '스프레이/부탄가스 버리는 방법',
      },
      {
        id: 'beverageCan',
        name: '음료캔',
        img: 'beverageCan',
        disposalMethod: '음료캔 버리는 방법',
      },
      {
        id: 'cannedFood',
        name: '통조림',
        img: 'cannedFood',
        disposalMethod: '통조림 버리는 방법',
      },
    ],
  },
  {
    id: 'scrapMetal',
    name: '고철',
    img: 'scrapMetal',
    items: [{}],
  },
  { id: 'glassBottle', name: '유리병', img: 'glassBottle', items: [{}] },
  { id: 'plastic', name: '플라스틱', img: 'plastic', items: [{}] },
  { id: 'vinyl', name: '비닐', img: 'vinyl', items: [{}] },
  { id: 'styrofoam', name: '발포합성', img: 'styrofoam', items: [{}] },
  { id: 'clothes', name: '의류', img: 'clothes', items: [{}] },
  {
    id: 'electronics',
    name: '가전제품',
    img: 'electronics',
    items: [
      {
        id: 'washingmachine',
        name: '세탁기',
        img: 'washingmachine',
        disposalMethod: '세탁기 버리는 방법',
      },
      { id: 'tv', name: 'TV', img: 'tv', disposalMethod: 'TV 버리는 방법' },
      { id: 'refrigerator', name: '냉장고', img: 'refrigerator', disposalMethod: '냉장고 버리는 방법' },
    ],
  },
  {
    id: 'largeWaste',
    name: '대형',
    img: 'largeWaste',
    items: [{}],
  },
  {
    id: 'foodWaste',
    name: '음식물',
    img: 'foodWaste',
    items: [{}],
  },
  {
    id: 'harmfulness',
    name: '유해',
    img: 'harmfulness',
    items: [{}],
  },
  {
    id: 'noncombustibleWaste',
    name: '불연성폐기물',
    img: 'noncombustibleWaste',
    items: [{}],
  },
  {
    id: 'garbage',
    name: '종량제 봉투',
    img: 'garbage',
    items: [{}],
  },
];
