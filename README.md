# 💼 Portfolio Website

개인 포트폴리오 웹사이트입니다. Bun과 React를 사용하여 제작되었습니다.

## 🚀 기술 스택

- **Runtime**: Bun
- **Frontend**: React, TypeScript
- **Styling**: CSS3
- **Deployment**: Railway

## 📦 설치 및 실행

### 필수 요구사항
- Bun 설치 필요 ([https://bun.sh](https://bun.sh))

### 로컬 개발 환경 실행

```bash
# 의존성 설치
bun install

# 개발 서버 실행 (Hot Reload 지원)
bun run dev

# 또는
bun --hot index.ts
```

서버가 실행되면 브라우저에서 `http://localhost:3000`으로 접속하세요.

### 프로덕션 빌드

```bash
# 프로덕션 서버 실행
bun start
```

## 📁 프로젝트 구조

```
portfolio-website/
├── index.ts          # Bun 서버 설정
├── index.html        # HTML 템플릿
├── frontend.tsx      # React 메인 컴포넌트
├── styles.css        # 스타일시트
├── package.json      # 프로젝트 설정
└── README.md         # 프로젝트 문서
```

## 🎨 주요 기능

- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🎯 깔끔하고 모던한 UI/UX
- ⚡ Bun을 활용한 빠른 빌드 및 개발 경험
- 🔥 Hot Module Replacement (HMR) 지원

## 🌐 배포

이 프로젝트는 Railway를 통해 배포됩니다.

### Railway 배포 방법

1. GitHub에 코드 푸시
2. Railway 대시보드에서 "New Project" 클릭
3. GitHub 리포지토리 연결
4. 자동으로 배포됨

환경 변수 설정 (필요시):
- `PORT`: 서버 포트 (기본값: 3000)

## 📝 라이선스

MIT License

## 👤 작성자

**김성재 (Kim Sungjea)**

- GitHub: [@sungjea](https://github.com/sungjea)
- Email: sungjea.kim@example.com

---

⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요!
