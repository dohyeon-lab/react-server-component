# React Server Component

Next.js에서 리액트 서버 컴포넌트와 클라이언트 컴포넌트를 사용할 수 있다. app 경로에서 기본 적으로 모든 컴포넌트들은 서버 컴포넌트이다.

## Serialization이란?

Serialization(직렬화)는 객체가 파일 시스템, DB 또는 메모리에 저장될 수 있도록 하기 위해서 객체를 바이트 스트림으로 변환하는 과정이다.

메모리나 DB 파일시스템에 어떠한 것을 저장하기 위해서는 저장하고 싶은 것들을 바이트 스트림으로 유지해놓아야한다.

## 리액트 서버 컴포넌트란?

리액트 서버 컴포넌트들은 서버에서 렌더되고 요청되는 컴포넌트이다.
서버컴포넌트는 클라이언트 쪽의 번들에서 존재하지 않는다.

## 리액트 서버 컴포넌트의 특징

- 서버컴포넌트들은 onClick 같은 상호작용성을 포함하지 않는다.
- fallback과 함수들은 props들로써 전달될 수 없다.
- 서버 컴포넌트들은 상호작용 하지 않으며, 그들은 React State가 필요가 없다.
- 서버 컴포넌트들은 리액트 Life Cycle Hooks들을 사용하지 않는다.
- 리액트 컴포넌트들을 백엔드 부분이라고 생각하기 시작한다면 이해가 될 것이다.
- 데이터베이스나, 파일 시스템에 기반한 작업들이나, life cycle hooks들이나 상호작용성이 없는 다른 컴포넌트들이 리액트 서버 컴포넌트들의 예시이다.

## 서버 컴포넌트의 목적

서버 컴포넌트의 가장 큰 이점은, 서버컴포넌트는 클라이언트 사이드 번들을 포함하지 않는다. 이것은 적은 양의 클라이언트 사이드 번들을 우리가 전달할 수 있도록해서, 사용자가 적은 자바스크립트 코드를 다운로드 하도록 한다. 이것은 사용자가 핸드폰 데이터 요금제를 사용하거나, 인터넷이 불안정한 도시에서 앱을 사용할 때 큰 도움을 준다.

webpack 번들 파일을 확인했을 때 "use client"로 표시되는 컴포넌트들만 webpack 번들에 포함된다.

## 클라이언트 컴포넌트의 특징

- 클라이언트 컴포넌트들은 onClick 같은 상호작용성들을 포함한다.
- 클라이언트 컴포넌트들은 클라이언트라고 불리는 브라우저에서 렌더된다.
- 클라이언트 컴포넌트들은 "use client"라고 선언함으로써 그들이 클라이언트 컴포넌트인걸 나타낸다.
- 만약 useState, useEffect같은 리액틑 lifecycle hooks들을 사용할 계획이 있다면, 그들은 클라이언트 컴포넌트에서 사용해야한다.

## 리액트 서버 컴포넌트와 클라이언트 컴포넌트의 차이점

리액트 서버 컴포넌트들은 서버에서 렌더되고 fetch되는 반면에, 클라이언트 컴포넌트들은 클라이언트쪽에서 렌더되고 fetch 된다.

만약 lifecycle hooks를 포함하는 컴포넌트라면 그것을 클라이언트 컴포넌트로 만들고, 그렇지 않다면 서버 컴포넌트로 작성하자.

> useState나 useEffect를 사용하는 npm 패키지들은 어떻게 될 것인가? 서버 컴포넌트가 기본적으로 사용되기 때문에 사용되지 않는 것인가?

컴포넌트를 선언하는 곳이 중요하기 때문에 그렇지 않다.
예를들어서 클라이언트 컴포넌트로 작성된 패키지를 선언할 때는 "use client"로 선언된 컴포넌트 내부에 포함하면 잘 동작한다. 만약 "use client" 선언을 지운다면 서버 컴포넌트로 변하고, 에러가 발생할 것이다.

## 서버사이드 렌더링과 리액트 서버 컴포넌트

서버 컴포넌트들은 서버사이드 렌더링과 같지 않지만 상호 보완적이다. 둘다 "server"라는 용어를 사용해서 헷갈릴 수 있다.

## 서버사이드 렌더링이란

웹사이트들은 js, html, css에 의존하고 서버로부터 데이터를 요청한다. 웹페이지에 첫 번째 로드는 필수적이므로, ssr은 해당 페이지의 html 컨텐츠를 미리 빌드한다. 이것은 seo에 효과적이고, 사용자가 자바스크립트 코드를 다운받는 동안 해당 페이지의 컨텐츠를 볼 수 있다. 서버의 결과물은 html이다.

ssr은 클라이언트 컴포넌트의 html을 보여줌으로써 사용자가 페이지를 로드할 때 초기 부팅시간을 줄여줄 수 있도록 한다. 그러나, html이 로드 됐을 때 아직 다운르도를 해야한다면, 컴포넌트들을 파싱해야한다.

## 서버사이드 렌더링과 리액트 서버 컴포넌트의 차이점

서버 컴포넌트들은 HTMl 자체를 반환하기보다, 렌더된 ui에 대한 설명을 반환한다.
이러한 방식은 리액트가 상태값을 잃지 않고 존재하는 클라이언트 컴포넌트들과 데이터를 영리하게 병합하도록 한다.

리액트 서버 컴포넌트들은 각각의 컴포넌트마다, 클라이언트 컴포넌트로 렌더할 것인지 서버 컴포넌트로 렌더할 것인지 선택하도록 한다.

반면에 서버사이드 렌더링은 페이지당, 해당 페이지 자체를 서버사이드 렌더링을 하도록 한다.

## 서버 컴포넌트에서 클라이언트 컴포넌트로 어떻게 props를 전달하는가

서버 컴포넌트에서 클라이언트 컴포넌트로 prop를 전달할 때, 서버 컴포넌트들은 serializable(직렬화)가 되어야 한다.

props로써 () => {} 같은 화살표 함수를 전달할 수 없다. 대신에 JSON으로 직렬화 될 수 있는 props들을 전달할 수 있다.

그러나 항상 모든 props들을 직렬화하는 것은 번거로울 것이다.

```jsx
<p>Hello</p> // 이와 같이 JSON으로 직렬화 될 수 있는 요소들은 전달할 수 있다.
```

만약에 코드들이 클라이언트 컴포넌트가 아니라 서버컴포넌트에서만 명백히 작동하도록 하게 하고 싶다면 "server-only"라는 새로운 패키지를 설치할 수 있다.
기본적으로 컴포넌트들은 서버 컴포넌트들이지만, 이것들을 명백하게 하고싶고 갑작스럽게 import하고 싶지 않다면, 이 패키지를 사용하면 된다.

## 좋은 사고

- 서버 컴포넌트에서 데이터를 요청하자, 예를 들어서 "use client" 선언 없이 fetch를 사용할 생각을 할 때마다 서버 컴포넌트에서 호출되는지 확인하자
- 이것은 성능 향상에 도움이되고, 서버 컴포넌트들이 탄생한 큰 이유이다.

## 서버 컴포넌트들에서 Context 사용하기

어떻게 컴포넌트들에서 전역 state들을 공유할 수 있을까?
일반적으로, \_app.js 컴포넌트 안에서 context 같은 전역 상태 값들을 저장했을 것이다.
하지만 next.js 13에서는 \_app.js는 존재하지 않고 \_app.js는 RootLayout으로 대체되었다.

예를 들어서

```jsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

위의 코드에서 context를 만들었다면, 그것들은 동작하지 않을 것이다.
기본적으로 RootLayout은 서버컴포넌트이고, 서버 로직이 그 안에 있기 때문에 클라이언트 context는 동작하지 않는다.

그렇다면 위의 코드를 아래처럼 고치면 된다.
"use client"를 사용해서 오직 클라이언트 코드만 들어가는 컴포넌트를 만들고 그 안에서 context를 만들 수 있다.

예를 들어서.

```jsx
// app.store-provider.js
"use client";

import { createContext, useReducer } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const initialState = {
    data: [],
  };

  return (
    <StoreContext.Provider value={{ state = initialState}}>
      {children}
    </StoreContext.Provider>
  )
};

// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" />
      </head>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
```

## 써드파티 Providers는 어떠한가?

써드 파티 providers는 어떤가? 이것들을 사용하려면, "use client" 선언이 필요하다.
npm에 있는 수 많은 라이브러리들은 "use client" 선언을 하지 않았을 수 있다. 이럴 경우 클라이언트에서 사용하도록 해당 Provider를 래핑해서 사용하자.

```jsx
"use client";

import { ThemeProvider } from "acme-theme";
import { AuthProvider } from "acme-auth";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
```

이제 Providers는 RootLayout에서 렌더할 수 있다.

```jsx
// app/layout.js
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```
