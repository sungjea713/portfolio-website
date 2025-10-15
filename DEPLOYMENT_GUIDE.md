# 🚂 Railway 배포 가이드

이 가이드는 포트폴리오 웹사이트를 Railway에 배포하는 방법을 단계별로 설명합니다.

## 📋 사전 준비사항

1. ✅ GitHub 계정
2. ✅ Railway 계정 ([https://railway.app](https://railway.app))
3. ✅ 프로젝트가 GitHub에 업로드되어 있어야 함

---

## 🔧 Step 1: GitHub에 코드 올리기

### 1-1. GitHub에서 새 리포지토리 생성

1. GitHub ([https://github.com](https://github.com)) 로그인
2. 우측 상단 `+` 버튼 클릭 → "New repository" 선택
3. 리포지토리 정보 입력:
   - **Repository name**: `portfolio-website` (원하는 이름으로 변경 가능)
   - **Description**: "Personal portfolio website built with Bun and React"
   - **Public** 또는 **Private** 선택
   - ⚠️ "Initialize this repository with a README" **체크하지 않기** (이미 로컬에 파일이 있으므로)
4. "Create repository" 버튼 클릭

### 1-2. 로컬 프로젝트를 GitHub에 푸시

터미널에서 다음 명령어를 실행하세요:

```bash
# GitHub 리포지토리 연결 (YOUR_USERNAME을 본인의 GitHub 유저명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# 코드 푸시
git push -u origin main
```

**예시:**
```bash
git remote add origin https://github.com/sungjea/portfolio-website.git
git push -u origin main
```

푸시가 완료되면 GitHub 리포지토리 페이지에서 코드를 확인할 수 있습니다!

---

## 🚀 Step 2: Railway에 배포하기

### 2-1. Railway 계정 생성 및 로그인

1. [Railway 웹사이트](https://railway.app) 방문
2. "Start a New Project" 또는 "Login" 클릭
3. GitHub 계정으로 로그인 (권장)

### 2-2. 새 프로젝트 생성

1. Railway 대시보드에서 **"New Project"** 클릭
2. **"Deploy from GitHub repo"** 선택
3. 권한 설정:
   - GitHub 연동이 처음이라면 "Configure GitHub App" 클릭
   - Railway가 접근할 수 있는 리포지토리 권한 부여
4. 리포지토리 선택:
   - 방금 생성한 `portfolio-website` 리포지토리 선택

### 2-3. 배포 설정

Railway는 자동으로 프로젝트를 감지하고 배포를 시작합니다.

**중요 설정 확인:**

1. **Build Command**: Railway가 자동으로 감지하지만, 필요시 수동 설정
   - Settings → Build 섹션
   - Build Command: `bun install` (일반적으로 자동 감지됨)

2. **Start Command**: 서버 시작 명령어 설정
   - Settings → Deploy 섹션
   - Start Command: `bun start`

3. **환경 변수 설정** (선택사항):
   - Settings → Variables 섹션
   - `PORT` 변수는 Railway가 자동으로 설정하므로 별도 설정 불필요

### 2-4. 도메인 확인

1. 배포가 완료되면 Railway가 자동으로 도메인을 생성합니다
2. Settings → Domains 섹션에서 확인
3. 생성된 URL 클릭하여 웹사이트 확인!

예: `https://portfolio-website-production.up.railway.app`

---

## 🔄 Step 3: 코드 업데이트 시 재배포

코드를 수정한 후 다시 배포하려면:

```bash
# 1. 변경사항 커밋
git add .
git commit -m "Update portfolio content"

# 2. GitHub에 푸시
git push origin main
```

Railway는 GitHub에 푸시되면 **자동으로 재배포**됩니다! 🎉

---

## 🎨 커스텀 도메인 연결 (선택사항)

본인 소유의 도메인을 연결하려면:

1. Railway 프로젝트 → Settings → Domains
2. "Custom Domain" 클릭
3. 본인의 도메인 입력 (예: `portfolio.yourdomain.com`)
4. DNS 설정:
   - 도메인 제공업체(가비아, Cloudflare 등)에서 CNAME 레코드 추가
   - Railway에서 제공하는 값으로 설정

---

## 📊 배포 상태 모니터링

Railway 대시보드에서:
- **Deployments**: 배포 히스토리 및 로그 확인
- **Metrics**: CPU, 메모리, 네트워크 사용량 확인
- **Logs**: 실시간 서버 로그 확인

---

## 🛠️ 트러블슈팅

### 문제 1: 배포는 성공했지만 사이트가 열리지 않음
**해결 방법:**
- Railway 로그 확인: Deployments → 최신 배포 클릭 → Logs 탭
- `PORT` 환경변수가 올바르게 설정되었는지 확인
- Start Command가 `bun start`로 설정되었는지 확인

### 문제 2: Bun이 인식되지 않음
**해결 방법:**
Railway는 자동으로 Bun을 감지하지만, 필요시 Nixpacks 설정 추가:

프로젝트 루트에 `nixpacks.toml` 파일 생성:
```toml
[phases.setup]
nixPkgs = ["bun"]

[phases.install]
cmds = ["bun install"]

[start]
cmd = "bun start"
```

### 문제 3: GitHub 푸시 권한 오류
**해결 방법:**
- Personal Access Token 사용: GitHub Settings → Developer settings → Personal access tokens
- 또는 SSH 키 설정

---

## ✅ 체크리스트

배포 전 확인사항:

- [ ] 로컬에서 `bun --hot index.ts` 실행 시 정상 작동
- [ ] Git 커밋 완료
- [ ] GitHub 리포지토리에 푸시 완료
- [ ] Railway 계정 생성 및 GitHub 연동
- [ ] Railway 프로젝트 생성 및 리포지토리 선택
- [ ] Start Command 확인: `bun start`
- [ ] 배포 완료 후 생성된 URL로 접속 테스트

---

## 📚 추가 리소스

- [Railway 공식 문서](https://docs.railway.app)
- [Bun 공식 문서](https://bun.sh/docs)
- [GitHub 가이드](https://docs.github.com)

---

## 🎉 완료!

이제 포트폴리오 웹사이트가 전 세계에서 접속 가능합니다!

생성된 Railway URL을 이력서나 LinkedIn 프로필에 추가하세요. 🚀

**궁금한 점이 있다면 이슈를 생성해주세요!**
