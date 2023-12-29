
# Buildings PG

A prototype REST API built in NodeJS + Typescript + PostgresSQL

## Tech Stack

**Server:**

- NodeJS
- Typescript
- Postgres SQL
- Sequelize
- Sequelize CLI


## Set Up

1. to set up this project go to the root directory and run:

```bash
  npm run dev
```

2. This setup is integrated with sequelize-cli, to migrate the tables run:

```bash
  npm run cli-migrate
```

3. to create new migrations you should run the following script:

```bash
  npx sequelize-cli migration:generate --name your_migration_name
```

# API Reference

## Buildings

#### GET all Buildings

```http
GET /api/buildings
```
#### GET Building By id

```http
GET /api/buildings/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of building to fetch |

#### UPDATE Building By id

```http
UPDATE /api/buildings/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of building to update |

### Create a New Building

```http
POST /api/buildings
```
#### DELETE Building By id

```http
DELETE /api/buildings/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of building to delete |

## Floors

#### GET all Floors

```http
GET /api/floors
```
#### GET Floors By id

```http
GET /api/floors/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of floor to fetch |

### Create a New Floor

```http
POST /api/floors
```
#### UPDATE Floor By id

```http
UPDATE /api/floors/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of floor to update |

#### DELETE Floor By id

```http
DELETE /api/floors/${id}
```

## 🔗  Documentation

Buildings PG has Swagger UI as API documentation as default, whenever you want to check every endpoint, just make sure you have the API running in local properly, and when running just go to the browser to the following location:

(http://localhost:3000/api-docs/#/)

## Appendix

The project architecture is made under the repository pattern using classes and initializers to optimize the code splitting and distributiion in a more organized way.
