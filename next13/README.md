# Next.js 13버젼 연습용 웹앱

## 1. File & Folder structure

### 1.1 layout.js

`Layout` 컴포넌트는 리액트의 `App` 컴포넌트처럼 앱 전체에서, 또는 특정 페이지에서 공통적으로 적용되는 요소들이 들어가도록 한다.
즉 `Navbar`, `Footer` 등 여러 페이지에서 공통으로 위치하는 컴포넌트를 위치시키거나, `Redux toolkit wrapper` 등 앱 전체나 여러 컴포넌트에 적용해야 할 여러 설정을 세팅해주면 된다.

### 1.2 page.js

앱 실행 시 처음으로 보여지는 index 페이지이다.

## 2. Server & Client Components
[서버 컴포넌트와 클라이언트 컴포넌트는 각각 어떤 경우에 쓰는게 좋을까?](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components)

### 2.1 Server Components

Nextjs 13버젼부터 `app` 디렉토리 내에 있는 컴포넌트들은 기본적으로 `React Server Component` 이다.
따라서, `app` 디렉토리 내에 위치한 컴포넌트에서 `useState, useEffect` 등 `react hook` 을 정상적으로 사용하려면, 해당 파일 최상단에 `"use client"` directive를 사용하여 `Client Component`로 바꾸어줄 수 있다.

