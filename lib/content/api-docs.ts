export interface ApiSection {
  id: string;
  title: { en: string; ua: string };
  description: { en: string; ua: string };
  examples: ApiExample[];
}

export interface ApiExample {
  title: { en: string; ua: string };
  description?: { en: string; ua: string };
  code: {
    graphql: string;
    javascript?: string;
    curl?: string;
  };
  note?: { en: string; ua: string };
}

export const apiSections: ApiSection[] = [
  {
    id: 'health',
    title: { en: 'Health & Version', ua: 'Статус та версія' },
    description: { en: 'Check API availability and version', ua: 'Перевірка доступності сервера та версії API' },
    examples: [
      {
        title: { en: 'Health Check', ua: 'Перевірка статусу' },
        description: { en: 'Check if the server is running', ua: 'Перевірка доступності сервера' },
        code: {
          graphql: `query Health {
  health
}`,
          javascript: `const { data } = await client.query({
  query: gql\`
    query Health {
      health
    }
  \`
});

console.log(data.health); // "OK"`,
          curl: `curl -X POST https://api.kanban.example.com/graphql \\
  -H "Content-Type: application/json" \\
  -d '{"query": "query { health }"}'`,
        },
      },
      {
        title: { en: 'API Version', ua: 'Версія API' },
        description: { en: 'Get current API version', ua: 'Отримати поточну версію API' },
        code: {
          graphql: `query Version {
  version
}`,
          javascript: `const { data } = await client.query({
  query: gql\`query { version }\`
});

console.log(data.version); // "1.0.0"`,
        },
      },
    ],
  },
  {
    id: 'getting-started',
    title: { en: 'Getting Started', ua: 'Початок роботи' },
    description: { en: 'Quick start guide: register, login, and make your first API call', ua: 'Швидкий старт: реєстрація, вхід та перший API запит' },
    examples: [
      {
        title: { en: 'Step 1: Register or Login', ua: 'Крок 1: Реєстрація або вхід' },
        description: { en: 'Create an account or login to receive a JWT token', ua: 'Створіть обліковий запис або увійдіть, щоб отримати JWT токен' },
        code: {
          graphql: `# Register a new account
mutation Register {
  register(email: "user@example.com", password: "secret123", name: "Anna") {
    token
    user { id email name createdAt }
  }
}

# Or login with existing account
mutation Login {
  login(email: "user@example.com", password: "secret123") {
    token
    user { id email name }
  }
}`,
        },
      },
      {
        title: { en: 'Step 2: Add Authorization Header', ua: 'Крок 2: Додати заголовок авторизації' },
        description: { en: 'Use the token from login/register response in all subsequent requests', ua: 'Використовуйте токен з відповіді login/register у всіх наступних запитах' },
        code: {
          graphql: `# In GraphiQL / Playground, add to HTTP Headers:
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`,
          javascript: `// Set up Apollo Client with auth
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.kanban.example.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? \`Bearer \${token}\` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});`,
        },
      },
      {
        title: { en: 'Step 3: Typical Workflow', ua: 'Крок 3: Типовий робочий процес' },
        description: { en: 'Follow this order to work with the API', ua: 'Дотримуйтесь цього порядку для роботи з API' },
        code: {
          graphql: `# 1. Check current user
query Me {
  me { id email name }
}

# 2. Get or create a board
query Boards {
  boards(first: 10) {
    edges {
      node { id title }
    }
  }
}

# 3. Get board columns
query Columns($boardId: ID!) {
  columns(boardId: $boardId) {
    id
    title
    position
  }
}

# 4. Get or create tasks
query TasksByBoard($boardId: ID!) {
  tasksByBoard(boardId: $boardId, first: 20) {
    edges {
      node {
        id
        title
        priority
        columnId
      }
    }
  }
}`,
        },
        note: { 
          en: 'All mutations and protected queries require the Authorization header with a valid JWT token',
          ua: 'Всі мутації та захищені запити потребують заголовок Authorization з дійсним JWT токеном'
        },
      },
    ],
  },
  {
    id: 'authentication',
    title: { en: 'Authentication', ua: 'Автентифікація' },
    description: { en: 'Register, login, and manage user authentication with JWT tokens', ua: 'Реєстрація, вхід та управління автентифікацією через JWT токени' },
    examples: [
      {
        title: { en: 'Register', ua: 'Реєстрація' },
        description: { en: 'Create a new user account and receive a JWT token', ua: 'Створити обліковий запис та отримати JWT токен' },
        code: {
          graphql: `mutation Register($email: String!, $password: String!, $name: String) {
  register(email: $email, password: $password, name: $name) {
    token
    user {
      id
      email
      name
      createdAt
    }
  }
}

# Variables
{
  "email": "user@example.com",
  "password": "secret123",
  "name": "John"
}`,
          javascript: `const { data } = await client.mutate({
  mutation: gql\`
    mutation Register($email: String!, $password: String!, $name: String) {
      register(email: $email, password: $password, name: $name) {
        token
        user {
          id
          email
          name
        }
      }
    }
  \`,
  variables: {
    email: "user@example.com",
    password: "secret123",
    name: "John"
  }
});

// Store token for future requests
localStorage.setItem('token', data.register.token);`,
          curl: `curl -X POST https://api.kanban.example.com/graphql \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "mutation Register($email: String!, $password: String!, $name: String) { register(email: $email, password: $password, name: $name) { token user { id email name } } }",
    "variables": {
      "email": "user@example.com",
      "password": "secret123",
      "name": "John"
    }
  }'`,
        },
      },
      {
        title: { en: 'Login', ua: 'Вхід' },
        description: { en: 'Authenticate with email and password', ua: 'Авторизуватися з email та паролем' },
        code: {
          graphql: `mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      email
      name
    }
  }
}

# Variables
{
  "email": "user@example.com",
  "password": "secret123"
}`,
          javascript: `const { data } = await client.mutate({
  mutation: LOGIN_MUTATION,
  variables: {
    email: "user@example.com",
    password: "secret123"
  }
});

localStorage.setItem('token', data.login.token);`,
        },
      },
      {
        title: { en: 'Get Current User', ua: 'Отримати поточного користувача' },
        description: { en: 'Retrieve authenticated user details (requires Authorization header)', ua: 'Отримати дані авторизованого користувача (потребує заголовок Authorization)' },
        code: {
          graphql: `query Me {
  me {
    id
    email
    name
    createdAt
  }
}

# Headers
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}`,
          javascript: `const { data } = await client.query({
  query: gql\`
    query Me {
      me {
        id
        email
        name
        createdAt
      }
    }
  \`,
  context: {
    headers: {
      authorization: \`Bearer \${token}\`
    }
  }
});`,
        },
        note: { en: 'All subsequent requests require the Authorization header with Bearer token', ua: 'Всі наступні запити потребують заголовок Authorization з Bearer токеном' },
      },
      {
        title: { en: 'Logout', ua: 'Вихід' },
        description: { en: 'Invalidate current token', ua: 'Інвалідувати поточний токен' },
        code: {
          graphql: `mutation Logout {
  logout
}`,
          javascript: `await client.mutate({
  mutation: gql\`mutation { logout }\`
});

localStorage.removeItem('token');`,
        },
      },
    ],
  },
  {
    id: 'boards',
    title: { en: 'Boards', ua: 'Дошки' },
    description: { en: 'Query and manage Kanban boards with cursor-based pagination', ua: 'Запити та управління Kanban дошками з cursor-пагінацією' },
    examples: [
      {
        title: { en: 'Get All Boards', ua: 'Отримати всі дошки' },
        description: { en: 'List boards with pagination and filtering', ua: 'Список дошок з пагінацією та фільтрацією' },
        code: {
          graphql: `query Boards($visibility: BoardVisibility, $first: Int) {
  boards(visibility: $visibility, first: $first) {
    edges {
      node {
        id
        title
        description
        visibility
        createdAt
        updatedAt
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}

# Variables
{
  "visibility": "PUBLIC",
  "first": 10
}`,
          javascript: `const { data } = await client.query({
  query: BOARDS_QUERY,
  variables: {
    visibility: "PUBLIC",
    first: 10
  }
});

// Access boards
data.boards.edges.forEach(({ node }) => {
  console.log(node.title);
});`,
        },
      },
      {
        title: { en: 'Get Board by ID', ua: 'Отримати дошку по ID' },
        description: { en: 'Retrieve a single board with all details', ua: 'Отримати дошку з усіма деталями' },
        code: {
          graphql: `query Board($id: ID!) {
  board(id: $id) {
    id
    title
    description
    visibility
    createdAt
    updatedAt
  }
}

# Variables
{
  "id": "<BOARD_ID>"
}`,
        },
      },
      {
        title: { en: 'Create Board', ua: 'Створити дошку' },
        code: {
          graphql: `mutation CreateBoard($title: String!, $description: String, $visibility: BoardVisibility!) {
  createBoard(title: $title, description: $description, visibility: $visibility) {
    id
    title
    description
    visibility
    createdAt
  }
}

# Variables
{
  "title": "My Board",
  "description": "Project board for team",
  "visibility": "PRIVATE"
}`,
          javascript: `const { data } = await client.mutate({
  mutation: CREATE_BOARD,
  variables: {
    title: "My Board",
    description: "Project board",
    visibility: "PRIVATE"
  }
});`,
        },
      },
      {
        title: { en: 'Update Board', ua: 'Оновити дошку' },
        code: {
          graphql: `mutation UpdateBoard($id: ID!, $title: String, $description: String, $visibility: BoardVisibility) {
  updateBoard(id: $id, title: $title, description: $description, visibility: $visibility) {
    id
    title
    description
    visibility
    updatedAt
  }
}

# Variables
{
  "id": "<BOARD_ID>",
  "title": "Updated Title"
}`,
        },
      },
      {
        title: { en: 'Delete Board', ua: 'Видалити дошку' },
        code: {
          graphql: `mutation DeleteBoard($id: ID!) {
  deleteBoard(id: $id)
}

# Variables
{
  "id": "<BOARD_ID>"
}`,
        },
      },
    ],
  },
  {
    id: 'columns',
    title: { en: 'Columns', ua: 'Колонки' },
    description: { en: 'Manage board columns and their positioning', ua: 'Управління колонками дошок та їх позиціонуванням' },
    examples: [
      {
        title: { en: 'Get Columns by Board', ua: 'Отримати колонки по дошці' },
        code: {
          graphql: `query Columns($boardId: ID!) {
  columns(boardId: $boardId) {
    id
    boardId
    title
    position
    statusId
    createdAt
  }
}

# Variables
{
  "boardId": "<BOARD_ID>"
}`,
        },
      },
      {
        title: { en: 'Create Column', ua: 'Створити колонку' },
        code: {
          graphql: `mutation CreateColumn($boardId: ID!, $title: String!) {
  createColumn(boardId: $boardId, title: $title) {
    id
    boardId
    title
    position
    statusId
  }
}

# Variables
{
  "boardId": "<BOARD_ID>",
  "title": "In Progress"
}`,
        },
      },
      {
        title: { en: 'Update Column', ua: 'Оновити колонку' },
        code: {
          graphql: `mutation UpdateColumn($id: ID!, $title: String!) {
  updateColumn(id: $id, title: $title) {
    id
    title
    updatedAt
  }
}

# Variables
{
  "id": "<COLUMN_ID>",
  "title": "Done"
}`,
        },
      },
      {
        title: { en: 'Delete Column', ua: 'Видалити колонку' },
        code: {
          graphql: `mutation DeleteColumn($id: ID!) {
  deleteColumn(id: $id)
}

# Variables
{
  "id": "<COLUMN_ID>"
}`,
        },
      },
      {
        title: { en: 'Move Column', ua: 'Перемістити колонку' },
        description: { en: 'Change column position', ua: 'Змінити позицію колонки' },
        code: {
          graphql: `mutation MoveColumn($id: ID!, $newPosition: Int!) {
  moveColumn(id: $id, newPosition: $newPosition) {
    id
    position
  }
}

# Variables
{
  "id": "<COLUMN_ID>",
  "newPosition": 0
}`,
        },
      },
    ],
  },
  {
    id: 'tasks',
    title: { en: 'Tasks', ua: 'Задачі' },
    description: { en: 'Create, update, and manage tasks with filtering, sorting, and search', ua: 'Створення, оновлення та управління задачами з фільтрацією, сортуванням та пошуком' },
    examples: [
      {
        title: { en: 'Get Task by ID', ua: 'Отримати задачу по ID' },
        code: {
          graphql: `query Task($id: ID!) {
  task(id: $id) {
    id
    columnId
    title
    description
    priority
    dueDate
    position
    statusId
    labelIds
    createdAt
    updatedAt
  }
}

# Variables
{
  "id": "<TASK_ID>"
}`,
        },
      },
      {
        title: { en: 'Get Tasks by Column', ua: 'Отримати задачі по колонці' },
        code: {
          graphql: `query TasksByColumn($columnId: ID!, $first: Int) {
  tasksByColumn(columnId: $columnId, first: $first) {
    edges {
      node {
        id
        title
        priority
        position
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

# Variables
{
  "columnId": "<COLUMN_ID>",
  "first": 20
}`,
        },
      },
      {
        title: { en: 'Search Tasks by Board', ua: 'Пошук задач по дошці' },
        description: { en: 'Advanced filtering with search, status, priority, assignee, labels, and sorting', ua: 'Розширена фільтрація з пошуком, статусом, пріоритетом, виконавцем, мітками та сортуванням' },
        code: {
          graphql: `query TasksByBoard(
  $boardId: ID!
  $query: String
  $statusIds: [ID!]
  $priority: [TaskPriority!]
  $sortBy: TaskSortBy
  $sortOrder: SortOrder
  $first: Int
) {
  tasksByBoard(
    boardId: $boardId
    query: $query
    statusIds: $statusIds
    priority: $priority
    sortBy: $sortBy
    sortOrder: $sortOrder
    first: $first
  ) {
    edges {
      node {
        id
        title
        columnId
        priority
        statusId
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

# Variables
{
  "boardId": "<BOARD_ID>",
  "sortBy": "CREATED_AT",
  "sortOrder": "DESC",
  "first": 50
}`,
        },
      },
      {
        title: { en: 'Create Task', ua: 'Створити задачу' },
        code: {
          graphql: `mutation CreateTask(
  $columnId: ID!
  $title: String!
  $description: String
  $priority: TaskPriority!
  $dueDate: DateTime
  $assigneeId: ID
) {
  createTask(
    columnId: $columnId
    title: $title
    description: $description
    priority: $priority
    dueDate: $dueDate
    assigneeId: $assigneeId
  ) {
    id
    columnId
    title
    description
    priority
    position
    statusId
    createdAt
  }
}

# Variables
{
  "columnId": "<COLUMN_ID>",
  "title": "New task",
  "priority": "MEDIUM"
}`,
        },
      },
      {
        title: { en: 'Update Task', ua: 'Оновити задачу' },
        code: {
          graphql: `mutation UpdateTask(
  $id: ID!
  $title: String
  $description: String
  $priority: TaskPriority
  $dueDate: DateTime
  $assigneeId: ID
) {
  updateTask(
    id: $id
    title: $title
    description: $description
    priority: $priority
    dueDate: $dueDate
    assigneeId: $assigneeId
  ) {
    id
    title
    description
    priority
    updatedAt
  }
}

# Variables
{
  "id": "<TASK_ID>",
  "title": "Updated title"
}`,
        },
      },
      {
        title: { en: 'Move Task', ua: 'Перемістити задачу' },
        description: { en: 'Move task to different column and position', ua: 'Перемістити задачу в іншу колонку та позицію' },
        code: {
          graphql: `mutation MoveTask($id: ID!, $columnId: ID!, $position: Int) {
  moveTask(id: $id, columnId: $columnId, position: $position) {
    id
    columnId
    position
    statusId
    updatedAt
  }
}

# Variables
{
  "id": "<TASK_ID>",
  "columnId": "<COLUMN_ID>",
  "position": 0
}`,
        },
      },
      {
        title: { en: 'Update Task Labels', ua: 'Оновити мітки задачі' },
        code: {
          graphql: `mutation UpdateTaskLabels($taskId: ID!, $labelIds: [ID!]!) {
  updateTaskLabels(taskId: $taskId, labelIds: $labelIds) {
    id
    labelIds
    updatedAt
  }
}

# Variables
{
  "taskId": "<TASK_ID>",
  "labelIds": ["<LABEL_ID_1>", "<LABEL_ID_2>"]
}`,
        },
      },
      {
        title: { en: 'Update Task Status', ua: 'Оновити статус задачі' },
        description: { en: 'Override task status (independent from column status)', ua: 'Перевизначити статус задачі (незалежно від статусу колонки)' },
        code: {
          graphql: `mutation UpdateTaskStatus($taskId: ID!, $statusId: ID!) {
  updateTaskStatus(taskId: $taskId, statusId: $statusId) {
    id
    statusId
    overrideStatusId
    updatedAt
  }
}

# Variables
{
  "taskId": "<TASK_ID>",
  "statusId": "<STATUS_ID>"
}`,
        },
      },
      {
        title: { en: 'Clear Status Override', ua: 'Скинути перевизначення статусу' },
        description: { en: 'Reset to column default status', ua: 'Повернути статус колонки' },
        code: {
          graphql: `mutation ClearTaskStatusOverride($taskId: ID!) {
  clearTaskStatusOverride(taskId: $taskId) {
    id
    statusId
    overrideStatusId
    updatedAt
  }
}

# Variables
{
  "taskId": "<TASK_ID>"
}`,
        },
      },
      {
        title: { en: 'Delete Task', ua: 'Видалити задачу' },
        code: {
          graphql: `mutation DeleteTask($id: ID!) {
  deleteTask(id: $id)
}

# Variables
{
  "id": "<TASK_ID>"
}`,
        },
      },
    ],
  },
  {
    id: 'members',
    title: { en: 'Board Members', ua: 'Учасники дошки' },
    description: { en: 'Manage board members and their roles', ua: 'Управління учасниками дошки та їх ролями' },
    examples: [
      {
        title: { en: 'Get Board Members', ua: 'Отримати учасників дошки' },
        code: {
          graphql: `query BoardMembers($boardId: ID!) {
  boardMembers(boardId: $boardId) {
    boardId
    userId
    role
    user {
      id
      email
      name
    }
  }
}

# Variables
{
  "boardId": "<BOARD_ID>"
}`,
        },
      },
      {
        title: { en: 'Invite Member', ua: 'Запросити учасника' },
        code: {
          graphql: `mutation InviteBoardMember($boardId: ID!, $userId: ID!, $role: BoardRole!) {
  inviteBoardMember(boardId: $boardId, userId: $userId, role: $role) {
    boardId
    userId
    role
    user {
      id
      email
    }
  }
}

# Variables
{
  "boardId": "<BOARD_ID>",
  "userId": "<USER_ID>",
  "role": "MEMBER"
}`,
        },
      },
      {
        title: { en: 'Update Member Role', ua: 'Оновити роль учасника' },
        code: {
          graphql: `mutation UpdateBoardMemberRole($boardId: ID!, $userId: ID!, $role: BoardRole!) {
  updateBoardMemberRole(boardId: $boardId, userId: $userId, role: $role) {
    boardId
    userId
    role
  }
}

# Variables
{
  "boardId": "<BOARD_ID>",
  "userId": "<USER_ID>",
  "role": "ADMIN"
}`,
        },
      },
      {
        title: { en: 'Remove Member', ua: 'Видалити учасника' },
        code: {
          graphql: `mutation RemoveBoardMember($boardId: ID!, $userId: ID!) {
  removeBoardMember(boardId: $boardId, userId: $userId)
}

# Variables
{
  "boardId": "<BOARD_ID>",
  "userId": "<USER_ID>"
}`,
        },
      },
    ],
  },
  {
    id: 'labels',
    title: { en: 'Labels & Statuses', ua: 'Мітки та статуси' },
    description: { en: 'Manage task labels and board statuses', ua: 'Управління мітками задач та статусами дошки' },
    examples: [
      {
        title: { en: 'Get Board Labels', ua: 'Отримати мітки дошки' },
        code: {
          graphql: `query BoardLabels($boardId: ID!) {
  boardLabels(boardId: $boardId) {
    id
    boardId
    name
    color
  }
}

# Variables
{
  "boardId": "<BOARD_ID>"
}`,
        },
      },
      {
        title: { en: 'Get Board Statuses', ua: 'Отримати статуси дошки' },
        code: {
          graphql: `query BoardStatuses($boardId: ID!) {
  boardStatuses(boardId: $boardId) {
    id
    boardId
    name
    order
    color
  }
}

# Variables
{
  "boardId": "<BOARD_ID>"
}`,
        },
      },
      {
        title: { en: 'Get Status by ID', ua: 'Отримати статус по ID' },
        code: {
          graphql: `query StatusById($id: ID!) {
  statusById(id: $id) {
    id
    name
    order
    color
  }
}

# Variables
{
  "id": "<STATUS_ID>"
}`,
        },
      },
      {
        title: { en: 'Create Label', ua: 'Створити мітку' },
        code: {
          graphql: `mutation CreateLabel($boardId: ID!, $name: String!, $color: String) {
  createLabel(boardId: $boardId, name: $name, color: $color) {
    id
    boardId
    name
    color
  }
}

# Variables
{
  "boardId": "<BOARD_ID>",
  "name": "Bug",
  "color": "#DC2626"
}`,
        },
      },
      {
        title: { en: 'Update Label', ua: 'Оновити мітку' },
        code: {
          graphql: `mutation UpdateLabel($id: ID!, $name: String, $color: String) {
  updateLabel(id: $id, name: $name, color: $color) {
    id
    name
    color
  }
}

# Variables
{
  "id": "<LABEL_ID>",
  "name": "Critical"
}`,
        },
      },
      {
        title: { en: 'Delete Label', ua: 'Видалити мітку' },
        code: {
          graphql: `mutation DeleteLabel($id: ID!) {
  deleteLabel(id: $id)
}

# Variables
{
  "id": "<LABEL_ID>"
}`,
        },
      },
    ],
  },
  {
    id: 'invites',
    title: { en: 'Email Invites', ua: 'Запрошення по email' },
    description: { en: 'Invite users by email and manage pending invitations', ua: 'Запрошення користувачів по email та управління очікуючими запрошеннями' },
    examples: [
      {
        title: { en: 'Get Pending Invites', ua: 'Отримати очікуючі запрошення' },
        code: {
          graphql: `query PendingInvites($boardId: ID!) {
  pendingInvites(boardId: $boardId) {
    id
    boardId
    email
    role
    createdAt
    invitedBy {
      id
      email
    }
  }
}

# Variables
{
  "boardId": "<BOARD_ID>"
}`,
        },
      },
      {
        title: { en: 'Get Invites by Email', ua: 'Отримати запрошення по email' },
        code: {
          graphql: `query PendingInvitesByEmail($email: String!) {
  pendingInvitesByEmail(email: $email) {
    id
    boardId
    email
    role
    board {
      id
      title
    }
  }
}

# Variables
{
  "email": "user@example.com"
}`,
        },
      },
      {
        title: { en: 'Invite by Email', ua: 'Запросити по email' },
        code: {
          graphql: `mutation InviteByEmail($boardId: ID!, $email: String!, $role: BoardRole!) {
  inviteByEmail(boardId: $boardId, email: $email, role: $role) {
    id
    boardId
    email
    role
    createdAt
  }
}

# Variables
{
  "boardId": "<BOARD_ID>",
  "email": "newuser@example.com",
  "role": "MEMBER"
}`,
        },
      },
    ],
  },
  {
    id: 'activity',
    title: { en: 'Activity Logs', ua: 'Журнал активності' },
    description: { en: 'Track task and board activity history', ua: 'Відстеження історії активності задач та дошок' },
    examples: [
      {
        title: { en: 'Task Activities', ua: 'Активність задачі' },
        code: {
          graphql: `query TaskActivities($taskId: ID!, $first: Int) {
  taskActivities(taskId: $taskId, first: $first) {
    edges {
      node {
        id
        entityType
        entityId
        action
        diff
        createdAt
        actor {
          id
          email
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

# Variables
{
  "taskId": "<TASK_ID>",
  "first": 20
}`,
        },
      },
      {
        title: { en: 'Board Activities', ua: 'Активність дошки' },
        code: {
          graphql: `query BoardActivities($boardId: ID!, $first: Int) {
  boardActivities(boardId: $boardId, first: $first) {
    edges {
      node {
        id
        entityType
        entityId
        action
        diff
        createdAt
        actor {
          id
          email
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

# Variables
{
  "boardId": "<BOARD_ID>",
  "first": 50
}`,
        },
      },
    ],
  },
  {
    id: 'subscriptions',
    title: { en: 'Subscriptions (Real-time)', ua: 'Підписки (Real-time)' },
    description: { en: 'Real-time updates via GraphQL subscriptions over WebSocket', ua: 'Оновлення в реальному часі через GraphQL підписки по WebSocket' },
    examples: [
      {
        title: { en: 'Task Created', ua: 'Задача створена' },
        description: { en: 'Subscribe to new task events on a board', ua: 'Підписатися на події створення задач на дошці' },
        code: {
          graphql: `subscription TaskCreated($boardId: ID!) {
  taskCreated(boardId: $boardId) {
    id
    title
    columnId
    position
    createdAt
  }
}

# Variables
{
  "boardId": "<BOARD_ID>"
}`,
          javascript: `const subscription = client.subscribe({
  query: gql\`
    subscription TaskCreated($boardId: ID!) {
      taskCreated(boardId: $boardId) {
        id
        title
        columnId
      }
    }
  \`,
  variables: { boardId: "board_123" }
}).subscribe({
  next: ({ data }) => {
    console.log('New task created:', data.taskCreated);
  },
  error: (err) => console.error('Subscription error:', err)
});

// Unsubscribe when done
subscription.unsubscribe();`,
        },
      },
      {
        title: { en: 'Task Updated', ua: 'Задача оновлена' },
        description: { en: 'Listen for task updates in real-time', ua: 'Слухати оновлення задач в реальному часі' },
        code: {
          graphql: `subscription TaskUpdated($boardId: ID!) {
  taskUpdated(boardId: $boardId) {
    id
    title
    columnId
    position
    statusId
    updatedAt
  }
}

# Variables
{
  "boardId": "<BOARD_ID>"
}`,
        },
      },
      {
        title: { en: 'Column Moved', ua: 'Колонка переміщена' },
        description: { en: 'Get notified when columns are reordered', ua: 'Отримувати повідомлення при зміні порядку колонок' },
        code: {
          graphql: `subscription ColumnMoved($boardId: ID!) {
  columnMoved(boardId: $boardId) {
    id
    boardId
    title
    position
  }
}

# Variables
{
  "boardId": "<BOARD_ID>"
}`,
        },
      },
    ],
  },
];