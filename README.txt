# MERN Quiz Analytics Platform

> **A full-stack quiz engine with real-time analytics, user performance tracking, and an admin dashboard — built end-to-end on the MERN stack.**

![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=flat&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-18.0-61DAFB?style=flat&logo=react&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-18.0-339933?style=flat&logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production%20Ready-22c55e?style=flat)

<br>

## The problem

Most quiz tools are either too simple or too bloated. Neither gives educators or trainers real insight into how users perform — which questions trip people up, where knowledge gaps cluster, how scores trend over time. This platform fills that gap with a lightweight, fast, fully custom quiz engine and a built-in analytics layer that turns raw scores into actionable learning insights.

<br>

## Key features

| Feature | Details |
|---------|---------|
| Quiz engine | Timed quizzes, multiple choice, instant scoring |
| User accounts | JWT auth, persistent progress tracking |
| Analytics dashboard | Score trends, question-level difficulty, cohort comparison |
| Admin panel | Create, edit, publish quizzes with no code required |
| REST API | Fully documented, ready for third-party integration |
| Responsive UI | Works across desktop, tablet, and mobile |

<br>

## System architecture

```
Client (React)
        │
        │  HTTP / REST API
        ▼
┌─────────────────────┐
│  Express.js server  │  ← Route handling, middleware,
│                     │    JWT authentication, validation
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│  Business logic     │  ← Quiz engine, scoring engine,
│  layer              │    analytics aggregation
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│  MongoDB            │  ← Users, quizzes, questions,
│  (Mongoose ODM)     │    attempts, scores, analytics
└─────────────────────┘
```

<br>

## Project structure

```
MERN-quiz-analytics-platform/
│
├── client/
│   └── src/
│       ├── components/             # Reusable UI components
│       ├── pages/                  # Quiz, Dashboard, Admin, Auth
│       ├── context/                # Auth context, global state
│       ├── hooks/                  # Custom React hooks
│       └── utils/                  # API helpers, formatters
│
├── server/
│   ├── controllers/                # Route logic
│   ├── models/                     # Mongoose schemas
│   │   ├── User.js
│   │   ├── Quiz.js
│   │   ├── Question.js
│   │   └── Attempt.js
│   ├── routes/                     # API route definitions
│   ├── middleware/                 # Auth, error handling
│   └── index.js
│
├── .env.example
├── package.json
└── README.md
```

<br>

## Quickstart

```bash
git clone https://github.com/sinchanamuddi/MERN-quiz-analytics-platform.git
cd MERN-quiz-analytics-platform
cd server && npm install
cd ../client && npm install
cp .env.example .env
npm run dev
```

Client runs at `http://localhost:3000` and API at `http://localhost:5000`

<br>

## API endpoints

```
AUTH
POST   /api/auth/register       Register new user
POST   /api/auth/login          Login, returns JWT

QUIZZES
GET    /api/quizzes             List all published quizzes
GET    /api/quizzes/:id         Get quiz by ID
POST   /api/quizzes             Create quiz (admin)
PUT    /api/quizzes/:id         Update quiz (admin)
DELETE /api/quizzes/:id         Delete quiz (admin)

ATTEMPTS
POST   /api/attempts            Submit quiz attempt
GET    /api/attempts/user/:id   Get user attempt history

ANALYTICS
GET    /api/analytics/quiz/:id  Question-level stats
GET    /api/analytics/user/:id  User performance trends
```

<br>

## How it works

### 1. Authentication
JWT-based auth with bcrypt password hashing. Tokens stored in HTTP-only cookies. Protected routes verified via Express middleware on every request.

### 2. Quiz engine
Questions stored with type, options, correct answer, and difficulty weight. On submission, the engine scores each answer, calculates weighted total, records time taken, and persists the attempt to MongoDB.

### 3. Analytics layer
Every attempt feeds the analytics collection. Aggregation pipelines compute average score per question, score distribution across all users, user score trend over time, and completion rate per quiz.

### 4. Admin dashboard
CRUD interface for quiz and question management with drag-and-drop question reordering, live preview before publishing, and analytics overview per quiz.

<br>

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router, Context API |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose ODM |
| Auth | JWT, bcryptjs |
| Dev tools | Nodemon, Concurrently, dotenv |

<br>

## What I learned

- **Schema design makes or breaks MongoDB apps.** Embedding vs referencing questions inside quizzes was the most consequential architectural decision — referencing won because it made analytics aggregations far simpler.
- **React Context is enough for medium-scale state.** Context API with custom hooks handled auth state, quiz state, and analytics data cleanly without Redux boilerplate.
- **Aggregation pipelines are MongoDB's superpower.** Computing question difficulty scores and user performance trends in a single pipeline call — without pulling data into Node — was both faster and cleaner than application-level aggregation.

<br>

## Roadmap

- [ ] WebSocket support for live multiplayer quizzes
- [ ] AI-generated question suggestions using OpenAI API
- [ ] PDF certificate generation on quiz completion
- [ ] Role-based access (super admin, instructor, student)
- [ ] LangChain integration for quiz generation from documents

<br>

## Author

**Sinchana M** — ML Engineer and GenAI Systems Builder

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/sinchana-m-sd)
[![Email](https://img.shields.io/badge/Email-sinchanamuddi%40gmail.com-EA4335?style=flat&logo=gmail)](mailto:sinchanamuddi@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-sinchanamuddi.github.io-000?style=flat&logo=github)](https://sinchanamuddi.github.io)

*If this project was useful to you, a ⭐ on GitHub goes a long way!*
