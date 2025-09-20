# 할일 기록 앱 

## 레이아웃 변경

- 레이아웃을 가로와 세로를 useState를 사용한 상태로 구분하여 작동 <br/>
- input이 계속 반복적으로 렌더링 되는것을 방지 가상의 다량의 데이터를 만들어서 useMemo(리랜더링 사이에 계산 결과를 캐싱하는 훅) 사용<br/>
- Action -> Reducer(상태정의) -> Store(초기상태 정의)의 flux 형태의 Redux 
- `npm i redux@5.0.1 @reduxjs/toolkit@2.2.3 react-redux@9.1.2`
