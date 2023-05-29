# Next.js 13버젼 연습용 웹앱

## 1. Server & Client Components
[서버 컴포넌트와 클라이언트 컴포넌트는 각각 어떤 경우에 쓰는게 좋을까?](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components)

Nextjs 13버젼부터 `app` 디렉토리 내에 있는 컴포넌트들은 기본적으로 `React Server Component` 이다.
따라서, `app` 디렉토리 내에 위치한 컴포넌트에서 `useState, useEffect` 등 `react hook` 을 정상적으로 사용하려면, 해당 파일 최상단에 `"use client"` directive를 사용하여 `Client Component`로 바꾸어줄 수 있다.

## 2. Routing

라우팅 경로는 `app` 디렉터리 하위에서 생성한 폴더명으로 자동으로 매칭된다.
하위 경로를 추가한다면 해당 폴더 안에서 새로운 폴더를 만들면 된다.
다이나믹 라우팅을 사용하려면, 폴더명을 `[name]` 형태로 만들어주면 된다.

## 3. File Conventions

### error.js

- 에러 발생시 보여질 페이지는 `error.js` 로 이름을 지어주면 된다.
- 반드시 `use client` directive를 사용하여 `Client Component`로 바꾸어주어야 한다.

### not-found.js

- 없는 경로에 접근 시 404 에러만 별도로 처리하고 싶다면 `not-found.js` 파일을 생성해주면 된다.

### layout.js

`Layout` 컴포넌트는 리액트의 `App` 컴포넌트처럼 앱 전체에서, 또는 특정 페이지에서 공통적으로 적용되는 요소들이 들어가도록 한다.
즉 `Navbar`, `Footer` 등 여러 페이지에서 공통으로 위치하는 컴포넌트를 위치시키거나, `Redux toolkit wrapper` 등 앱 전체나 여러 컴포넌트에 적용해야 할 여러 설정을 세팅해주면 된다.

### loading.js

- 로딩 중일 때 보여질 페이지는 `loading.js` 로 이름을 지어주면 된다.
- 반드시 `use client` directive를 사용하여 `Client Component`로 바꾸어주어야 한다. 

### page.js

해당 경로 접근 시 보여질 페이지는 `page.js` 로 이름을 지어주면 된다.
