# 할일 기록 앱 

## 레이아웃 변경 Redux 상태관리<br/>

- 레이아웃을 가로와 세로를 useState를 사용한 상태로 구분하여 작동 <br/>
- input이 계속 반복적으로 렌더링 되는것을 방지 가상의 다량의 데이터를 만들어서 useMemo(리랜더링 사이에 계산 결과를 캐싱하는 훅) 사용<br/>
- Action -> Reducer(상태정의) -> Store(초기상태 정의)의 flux 형태의 Redux <br/>
- `npm i redux@5.0.1 @reduxjs/toolkit@2.2.3 react-redux@9.1.2`<br/>
- useDispatch와 useSelector을 사용해서 상태를 읽고 액션을 실행 <br/>
- 입력이 진행중일때 성공했을때 실패했을때 각각의 상황을 나누어 상태관리<br/>
- `npm i redux-saga@1.3.0` Redux-saga를 사용해 비동기 처리 => 미들웨어로 추가<br/>

## Zustand 상태 관리 <br/>

- Redux와 다르게 보일러 플레이트 없이 간단한 상태관리 가능 <br/>
- `npm i zustand@4.5.4`로 zustand 설치 <br/>
- `addTodos, toggleTodos, fetchTodos`의 타입을 설정하고 비동기 로직으로 상태를 관리한다. <br/>