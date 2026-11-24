# Portfolio

빌드 도구 없이 동작하는 정적 포트폴리오 사이트입니다. GitHub Pages에 그대로 올릴 수 있습니다.

## 폴더 구조

```
index.html          페이지 골격
css/style.css       스타일 (Happy Hues #3 팔레트, Wanted Sans 폰트)
js/main.js          화면 렌더링, 필터, 상세 모달
data/portfolio.js   ← 내용은 여기만 수정
assets/images/      프로젝트 스크린샷
.nojekyll           GitHub Pages가 파일을 가공하지 않도록 하는 빈 파일
```

## 내용 수정하기

`data/portfolio.js`를 열어 `TODO` 표시된 곳(이름, 소개, 연락처)과 `projects` 배열을 채우세요.

- 프로젝트 추가: `projects` 배열에 객체를 하나 더 복사해 넣기
- `category`: `"web"`, `"app"`, `"game"` 중 하나 (사용한 분류만 필터 버튼으로 나타남)
- 이미지: `assets/images/`에 넣고 `image: "assets/images/파일명.png"`
- 링크: `links`의 `github` / `demo` / `store` 중 비어 있지 않은 것만 버튼으로 표시

## 로컬에서 보기

```bash
cd ~/Documents/portfolio && python3 -m http.server 8080
```

그다음 브라우저에서 http://localhost:8080 을 여세요.
(`index.html`을 더블클릭해서 열어도 대부분 동작합니다.)

## GitHub Pages로 배포하기

1. GitHub에서 새 저장소를 만듭니다. 이름을 `<내아이디>.github.io`로 하면 주소가 `https://<내아이디>.github.io`가 됩니다.
2. 이 폴더를 푸시합니다.

   ```bash
   git init && git add . && git commit -m "Initial portfolio" && git branch -M main
   git remote add origin https://github.com/<내아이디>/<저장소이름>.git
   git push -u origin main
   ```
3. 저장소의 **Settings → Pages**에서 Source를 `Deploy from a branch`, Branch를 `main` / `/ (root)`로 설정합니다.
4. 1~2분 뒤 표시되는 주소로 접속하면 끝. 이후에는 푸시할 때마다 자동으로 갱신됩니다.
