# Junhyung personal site starter

이 폴더를 그대로 GitHub에 올리고 Vercel에 연결하면 개인 사이트를 바로 배포할 수 있습니다.

## 1) 먼저 수정할 것

`app/page.tsx` 안의 아래 placeholder를 네 정보로 바꾸세요.

- `https://github.com/your-username`
- `https://instagram.com/your-handle`
- `mailto:you@example.com`
- 소개 문구, selected pieces 제목/설명, about 섹션 문구

## 2) 로컬에서 미리 보기

터미널에서 이 폴더로 들어가서:

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 열기.

## 3) GitHub에 올리기

새 GitHub repository를 만든 뒤 아래 실행:

```bash
git init
git add .
git commit -m "Initial personal site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## 4) Vercel 배포

1. Vercel 로그인
2. `Add New...` → `Project`
3. 방금 만든 GitHub repository 선택
4. Framework는 자동으로 Next.js로 잡힘
5. `Deploy` 클릭

배포되면 `something.vercel.app` 주소가 생깁니다.

## 5) 나중에 수정할 때

파일 수정 후:

```bash
git add .
git commit -m "Update site"
git push
```

그러면 Vercel이 자동으로 다시 배포합니다.

## 6) 이 프로젝트에 들어있는 주요 파일

- `app/page.tsx` : 홈 화면
- `app/layout.tsx` : 사이트 기본 레이아웃과 metadata
- `app/globals.css` : 전역 스타일
- `components/ui/button.tsx`, `components/ui/card.tsx` : UI 컴포넌트
- `lib/utils.ts` : className 합치기 유틸

## 7) 문제가 생기면 먼저 확인

### `npm install` 에러
Node.js가 너무 오래됐을 수 있습니다. 최신 LTS 설치 후 다시 시도.

### 배포 후 링크가 이상함
`app/page.tsx`의 placeholder 링크를 실제 값으로 바꿨는지 확인.

### 스타일이 안 먹음
`npm install`이 정상 완료됐는지, 그리고 `app/globals.css`가 존재하는지 확인.
