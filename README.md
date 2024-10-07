## LOL 백과사전

Riot Games API를 사용해 챔피언 및 아이템 정보를 제공합니다.

```bash
URL: https://riot-api-tau.vercel.app/
```

## 개발환경

기간 : 24.09.27 ~ 24.10.07

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Riot Games](https://img.shields.io/badge/riotgames-D32936.svg?style=for-the-badge&logo=riotgames&logoColor=white)

## 주요기능

### 홈페이지(SSG)

![홈페이지](https://github.com/user-attachments/assets/7390c609-defb-4749-8f2c-f59b89611de8)

- 사이트 소개글을 확인할 수 있으며 페이지 이동 링크가 있습니다.
- next/Link 태그를 통해 페이지 별로 이동 가능한 내비게이션 바를 전체 layout에 구현하였습니다.

### 챔피언페이지(ISR)

![챔피언페이지](https://github.com/user-attachments/assets/d791803b-c204-49a4-899c-55ff4ace2eed)

- 리그 오브 레전드 게임 내 챔피언 목록을 글자순으로 확인할 수 있습니다.
- 챔피언을 클릭하면 해당 챔피언 상세페이지로 이동 가능합니다.

### 챔피언 상세페이지(SSR)

![상세페이지](https://github.com/user-attachments/assets/47d82e08-85d0-4583-9db0-9bf33b689da4)

- 챔피언 소개와 역할군, 난이도, 스킬설명을 볼 수 있습니다.

### 아이템페이지(SSG)

![아이템페이지](https://github.com/user-attachments/assets/3ffb641a-9c37-4a37-92e6-b6d18c18ffb0)

- 모든 아이템 정보를 확인할 수 있습니다.

### 로테이션페이지(CSR)

![로테이션 스켈레톤](https://github.com/user-attachments/assets/64eb5be8-0520-4757-b95d-7b804320f2cf)

![로테이션](https://github.com/user-attachments/assets/aeab7f0f-a121-4519-8fb6-4b8f8ff67248)

- 금주 로테이션 챔피언 정보를 확인할 수 있습니다.
- 로딩 상태관리를 통해 스켈레톤 UI를 출력해줍니다.
- 이 페이지에서도 챔피언 상세정보 페이지로 이동이 가능합니다.

## 트러블슈팅

### 1. 로테이션페이지 빌드오류

fetch headers 에서 API키의 undefined 타입이 들어갈 수 없다는 타입에러가 확인됐습니다.

API키가 undefined 일때 빈 문자열을 반환하여 headers에 항상 문자열 타입이 들어가도록 수정했습니다.

```bash
URL: https://record165.tistory.com/32
```

### 2. 배포링크 로테이션 페이지 오류

배포링크로 접속시 로테이션 페이지에서 데이터 fetch가 정상적으로 이루어지지 않는 문제가 확인됐습니다.

배포 시 환경변수를 지정해주지 않아 API키 없어 발생했던 문제로 환경변수를 설정하여 재배포 했습니다.
