# CodeBASED Client

### 📌 TODO List

#### High Priority

##### 1️ Add ESLint and Prettier
- [ ] Install ESLint and configure it to check files:
  - [ ] Add an ESLint script to `package.json`:
  - [ ] Ensure `eslint.config.js` is correctly set up:
  - [ ] Fix all ESLint errors.

##### 2️ Ensure a Simple Build Process
- [ ] Implement a script for a full build that includes linting and testing:
  ```json
  "scripts": {
    "full-build": "npm run eslint && npm test && npm run build"
  }
  ```

##### 3️ Implement Global State Management using Context & Reducer
- [ ] Move shared state to a context provider.
- [ ] Create `DataContext` and `DataDispatchContext`.
- [ ] Use `useReducer` instead of `useState` where appropriate.
- [ ] Ensure all components retrieve data via context.

##### 4️ Add Unit Tests for Reducers using Jest/Vitest
- [ ] Implement a test suite for reducers.
- [ ] Ensure reducers work correctly for various actions.

---

#### Medium Priority

##### 5️ Expand Context Usage Across the App
- [ ] Remove redundant state management within components.
- [ ] Ensure all necessary components are connected to `DataContext`.

##### 6️ Improve Code Organization
- [ ] Move all button components together.
- [ ] Organize SVGs into a dedicated directory.
- [ ] Follow the container/presentational component pattern.
- [ ] Separate business logic from UI components.

---

####  Low Priority

##### 7️ Add Cypress for E2E Testing
- [ ] Install and configure Cypress.
- [ ] Write basic E2E tests for core functionalities.

##### 8️ Use Trello for Tracking Tasks
- [x] Organize tasks into **Backlog**, **In Progress**, and **Done** columns.


---