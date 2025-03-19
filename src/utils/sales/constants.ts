
// 테이블에 사용할 상수값 정의
export const MONTHS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
export const CATEGORIES = ['전년', '계획', '실행', '속보', '전망', '비고'];
export const COUNTRIES = ['미국', '캐나다', '영국', '이태리'];
export const MODELS = ['모델1', '모델2'];

// 국가 그룹 정의
export const COUNTRY_GROUPS = {
  '미주': ['미국', '캐나다'],
  '구주': ['영국', '이태리']
};

// 국가 그룹 목록
export const GROUPS = Object.keys(COUNTRY_GROUPS);

// 각 국가가 속한 그룹 찾기 (역참조용)
export const COUNTRY_TO_GROUP: Record<string, string> = {};
Object.entries(COUNTRY_GROUPS).forEach(([group, countries]) => {
  countries.forEach(country => {
    COUNTRY_TO_GROUP[country] = group;
  });
});
