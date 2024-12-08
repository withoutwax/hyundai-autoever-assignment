# [현대 오토에버] CoE Frontend Engineer 과제

안녕하세요, 방문해주셔서 감사합니다.

## Tech Stack

- Next.js 를 사용, Tailwind CSS, 백엔드로는 json-server 페키지를 이용하였습니다.
- FAQ의 Accordion 컴포넌트 구현을 위해 @radix-ui/react-accordion 라이브러리를 사용하였습니다.
- 데이터를 불러오기 위해서 React Query 라이브러리를 사용하였습니다.

## 시작하는 방법:

우선 `npm run json-server` 커멘드로 백엔드 서버를 시작합니다. 엔드 포인트는 http://localhost:3001 입니다.
그 후 `npm run dev`로 [http://localhost:3000](http://localhost:3000) 사이트를 테스트 하실 수 있습니다.

## 구현 범위에 대한 설명

FAQ 페이지는 크게 2가지의 중요 기능을 탑제하고 있습니다:

1. FAQ 데이터를 백엔드 API에서 불러와서 탭에 맞게 분류하는 것.
2. 검색 기능을 통해서 찾고자 하는 FAQ를 찾을 수 있는 것.

## 구현 설명

### FAQ 데이터 불러오기

FAQ 페이지는 한번 데이터가 결정이 되면 쉽게 바뀌지 않지만 그래도 완전한 정적인 페이지는 아닙니다. 그리고 무엇보다 페이지가 로딩 된 이후 페이지에 있는 탭, 또는 카테고리 선택을 할때 최대한 막힘없고 딜레이가 없는 인터렉션 구현을 원했습니다.

첫 번째로 고민했던 방법은 SSG로 빌드 때 필요한 데이터와 페이지들을 다 가져와서 미리 빌드를 하는 방식으로 사용자가 FAQ 검색을 매우 빠른 속도로 검색 및 인터렉션이 가능하겠다고 생각하였습니다. 추후에 FAQ 데이터가 업데이트가 될 경우 ISR 방식으로 데이터를 백그라운드에서 새롭게 빌드하여 사용자가 페이지를 다시 접근하였을때 새로운 페이지를 로딩하는 방법을 생각하였습니다. 하지만 이 방법에는 단점이 있었습니다:

- SSG와 ISR 방식으로는 Node 런타임이 가능한 서버에서만 구현이 가능합니다. 기업의 입장에서 사용이 가능한 서버가 어떻게 될지 모르니 한정적인 서버 호스팅 선택권이 아쉬웠습니다.

그래서 다음으로 CSR로 데이터를 호출하는 방법을 생각하다가 React Query 에서 제공하는 Prefetching 기능이 있어 미리 데이터를 불러올 수 있으면 SSG처럼 데이터를 미리 불러올 수 있다는 장점과 React Query 로 데이터를 업데이트 (mutate) 할 수 있는 장점을 기인하여 적용하기로 하였습니다.

- React Query의 Prefetching 기능으로 데이터를 우선적으로 먼저 가져오고 그 다음에 해당 컴포넌트나 또는 페이지가 로딩되면 Prefetching으로 가져온 데이터의 캐시를 사용해서 구현하는 방법입니다.

### 왜 React Query의 Prefetching을 사용했나요?

React Query의 Prefetching을 아래의 이유로 사용하였습니다:

1. FAQ는 실시간이나 또는 주기적으로 데이터가 바뀌는 페이지가 아닌 내용이 바뀌기까지 꽤 오랜 기간 정적성을 유지하는 페이지라 판단되었습니다. 처음에 탭이 바뀌거나 FAQ의 더보기 창을 눌렀을때 데이터를 가져오는 방법도 좋은 방법이지만, 더보기, 탭 클릭 등을 사용할때 새로운 데이터를 업데이트 할때 마다 살짝의 딜레이가 있고 서버 호출이 계속 있기 때문에 과연 FAQ 페이지에 적합한가 라는 질문에 조금 과할 수 있다는 솔직한 의견이 있었습니다. 그리고 궁극적으로 FAQ 페이지의 주 데이터가 용량이 큰 이미지 또는 파일 에셋이 아닌 글로 많이 이루어져 있어서 Prefetching으로 모든 데이터를 미리 불러오는데 크게 무리가 없을거라고 판단 되었습니다. 따라서 미리 필요한 데이터를 다 불러와서 사용자가 인터렉션을 할때 딜레이가 없이 사용자가 인터렉션을 할 수 있도록 하는 것이 중요하다고 판단하였습니다.
2. 검색 인터렉션에 실시간 검색이 가능해집니다. FAQ사이트에 구현이 되어있지는 않지만 미리 데이터가 불러져 와 있기 때문에 실시간 검색 (사용자가 검색창에 타이핑을 할때 즉석에서 검색 결과가 업데이트 되는 것)이 가능해 집니다. 이 사용자 경험에 큰 플러스 요인이 될 수 있다고 판단하였습니다.

결론적으로 FAQ 페이지 구현에 앞서서 저의 React Query의 Prefetching을 선택한 이유는:

1. FAQ 페이지의 핵심이자 중요한 부분인 Accordion 섹션의 탭, 카테고리 선택 등의 인터렉션 때 막힘없고 딜레이가 없는 인터렉션이 가장 중요하다고 판단하였습니다.
2. FAQ 페이지의 데이터가 글로 구성되어있고 양이 그렇게 많지 않다고 판단하였습니다. 더보기 또는 새로운 탭을 클릭 할때마다 API를 호출을 해야하는 것은 어떤 면에서 보면 서버 호출을 지속적으로 해야하는 부분인데 이것이 리소스 낭비일 수 도 있겠다는 생각을 하였습니다.

### 탭, 카테고리 및 검색 기능

데이터를 전부 미리 불러옴으로써 탭, 카테고리의 분리와 FAQ의 검색은 전부 자바스크립트로 구현하였습니다. 컴포넌트가 불러와지면 먼저 검색어가 지정이 되어있는지 확인을 합니다. 검색어가 지정이 되어있으면 그 검색어로 미리 필터링을 구현하고 필터링 된 데이터를 각각 카테고리에 맞게 세부적으로 분리하였습니다. 그리고 추후에 더보기를 눌렀을 경우 `limit` variable에 의해서 보여지는 횟수가 결정이 됩니다. 이 기능은 `Faq.tsx` 와 `FaqContent.tsx`에 구현이 되어있습니다.

### 더 효율적으로 할 수 있는 방법은?

Memoization 같은 캐싱을 이용하여 데이터에 검색어의 결과물을 검색 시 저장하여 나중에 같은 검색어가 검색이 될 경우 더 빠르게 결과물이 보일 수 있을것 같습니다. 이 부분은 실시간 검색에도 마찬가지로 적용될 수 있습니다.
