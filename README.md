# REACT NATIVE NEXT WORLD

[![Maintainability](https://api.codeclimate.com/v1/badges/db62ea953d04a04cbf11/maintainability)](https://codeclimate.com/github/HwangJJung/react-native-future/maintainability)

현업에선 소수만 쓰거나 아무도 쓰지 않는 다음 세대 기술스택으로 만들어보는 RN 프로젝트.

## 목표

1. ios, android 는 물론 web 까지 one source, multi use 가능하도록 만들기.
1. lottie, svg 등이 web, app 코드 공유되나 해보기.
1. social login 구현하면서 web, app 코드 공유되나 해보기.
1. eslint 빡세게 활용하기.
1. jest, cypress, detox 로 테스트코드 짜보기.
1. typescript any 없이 구현하기.
1. fastlane 과 circle CI 로 테스트 자동화 하기.
1. apollo 와 xstate 로 상태관리 해보기.
1. bugsnag 써보기.
1. gcp 서울리전으로 백엔드 구현하기.
1. prisma2 + nexus 써보기.
1. message broker 써보기. (apache pulsar)

## 주요 기술스택

1. expo (eject): 36.0.0
1. react-native: 0.62-rc.2
1. react navigation: 5.0.0
1. ui-kitten: 4.4.0
1. apollo client: 3.0.0-beta
1. styled component: 5.0.1
1. xstate: 4.7.8
1. prisma2.preview

## 해야할 일

- [x] RN 62 와 expo integration
- [x] 주요 클라이언트 라이브러리 설치
- [x] babel, typescript, webpack 설정
- [x] eslint 설정
- [ ] lottie-react 구현하기 ( 제대로된 react 구현체가 없음 )
- [ ] jest 설정
- [ ] cypress 설정
- [ ] detox 설정
- [ ] lottieView unit, e2e 테스트 통과시키기
- [ ] xState로 todolist 구현하기
- [ ] apollo client 로 client resolver 만 써서 apollo 붙이기
- [ ] xState 와 apollo 연동
- [ ] jest, cypress, detox 로 투두까지 테스트하기
- [ ] prisma2, nexus 로 todo 백엔드 구현
- [ ] gcp에 배포하고 server ci 부터 셋업
- [ ] client detox ci 환경 셋업
- [ ] bugsnag 설정
- [ ] pm2+dokcer+prometheus+grafana 로 서버 apm 구축
- [ ] pulsa 를 메시지브로커로 해서 CQRS SQL + mongodb 구조 만들어보기
- [ ] event Sourcing 구현해보기
