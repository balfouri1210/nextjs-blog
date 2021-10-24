<p></p>
✅  Next.js 핵심개념숙지

👉  기본컨셉은 Nuxt와 다르지 않음.
<p></p>
✅  code splitting, prefetch (background)
<p></p>
✅  pre-render: static site generation (SSG), server side rendering (SSR)

👉  각 페이지 특성에 따라 hybrid 하게 구성할 수 있다는 점이 매력적
<p></p>
✅  SSG의 경우 getStaticProps, SSR의 경우 getServerSideProps를 통해 페이지 렌더링을 위해 필요한 데이터를 fetching.

👉  상태관리 라이브러리와 연동해서 사용할 경우 어떻게 달라지는지 학습 필요 (Nuxt와 비슷할 것으로 예상 - asyncdata, fetch 에서 vuex action을 호출하는 방식)
<p></p>
✅  Next 서버 자체를 api-route로 활용할 수 있는 점이 흥미로움

👉  어느수준까지 지원되는지는 아직 모르지만, nodejs 코드를 그대로 사용할 수 있음 - 기본적인 CRUD정도는 별도의 백엔드 구성없이도 할 수 있을 듯.
<p></p>
✅  Vercel로 아주 쉽게 배포 가능.

👉  AWS로 배포할때는 code pipeline - github 연동을 통해 push 감지 후 code build - code deploy 순서였지만, vercel은 모든과정이 자동. (심지어 계정으로 진행메일까지 보내줌)
<p></p>
🚀  시작은 블로그를 SSG (with data)로 만들어보는게 전부였기 때문에 기능을 추가하면서 디테일한 기술들에 익숙해지는것이 필요

🚀  Mobx 연동도 해봐야 함
