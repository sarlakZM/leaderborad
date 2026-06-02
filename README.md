# APSIS Coding Assignment Full Stack

A full-stack leaderboard application built for the **Apsis RnD coding assignment**.

The project implements a company-wide **steps leaderboard system** where employees are grouped into teams and each user contributes step counts to the team total.  
This repository contains:

- a **Node.js + Express backend API**
- a **frontend implementation in Angular 8**
- a **frontend implementation in Angular 13 with NgRx**
- a **docs folder** with UI and architecture diagrams

The goal of the assignment is to demonstrate clean architecture, maintainable code, and full-stack problem solving.

---

## Assignment Overview

The core use case is a **team steps leaderboard** application.

Users should be able to:

- create a new team counter
- increment the value of a stored counter
- get the current total steps taken by a team
- list all teams and compare step counts
- add users to teams
- increment individual user step counters

---

## Repository Structure
```bash
leaderborad/
├── backend-nodejs-express
├── docs
├── frontend
├── frontend-angular8
├── Assignment.md
└── README.md

### Sections

- **backend-nodejs-express**  
  REST API built with Node.js, TypeScript, and Express

- **frontend-angular8**  
  Angular 8 implementation of the leaderboard frontend

- **frontend**  
  Angular 13 implementation using RxJS and NgRx for state management

- **docs**  
  Screenshots and diagrams demonstrating the UI and architecture

---

## Architecture Summary

This repository contains one backend and two frontend implementations:

### Backend
The backend exposes RESTful endpoints for:

- creating teams
- creating users with counters
- incrementing step counts
- retrieving team totals
- listing all leaderboard data

The backend stores data **in memory during application lifetime**, in line with the assignment requirements.

### Frontend Angular 8
The Angular 8 client provides a UI for:

- listing teams
- viewing team details
- adding teams
- adding users
- incrementing counters

This version demonstrates a classic Angular application architecture using services and shared components.

### Frontend Angular 13 + NgRx
The Angular 13 client is a more modern implementation of the same product requirements, with additional architectural improvements such as:

- reactive forms
- RxJS-based flows
- NgRx store for state management
- improved modularity
- better separation of concerns

---

## Getting Started

To run the application locally, start both the backend and one of the frontend applications.

### 1. Run the backend
```
bash
cd backend-nodejs-express
npm install
npm run start:dev

Backend default URL:

bash
http://127.0.0.1:7000
```
### 2. Run one frontend

#### Angular 8 frontend
```
bash
cd frontend-angular8
npm install
npm run start
```
#### Angular 13 frontend
```
bash
cd frontend
npm install
npm run start

Frontend default URL:

bash
http://127.0.0.1:4200
```
---

## Important Note

The frontend is connected to the backend through the configured API URL in the shared URL configuration.

Example location:

bash
shared/url

Please ensure the backend is running before using the frontend application.

---

## Demo

### Team View
![img](docs/ui-team.png)

### User View
![img](docs/ui-user.png)

---

## Project Parts

- [Backend README](backend-nodejs-express/README.md)
- [Frontend Angular 8 README](frontend-angular8/README.md)
- [Frontend Angular 13 + NgRx README](frontend/README.md)

---

## Why Two Frontends?

This repository includes **two frontend implementations** of the same assignment:

- **Angular 8 version**  
  A solution aligned closely with the original frontend requirement

- **Angular 13 + NgRx version**  
  A more modern alternative showcasing updated Angular practices, reactive state handling, and stronger scalability

---
 Assignment for [APSIS](https://www.apsis.com/)
