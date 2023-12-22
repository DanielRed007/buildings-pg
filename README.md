
# Buildings PG

A prototype REST API built in NodeJS + Typescript + PostgresSQL

## Tech Stack

**Server:**

- NodeJS
- Typescript
- Postgres SQL
- Sequelize


## Set Up

1. to set up this project go to the root directory and run:

```bash
  npm run dev
```

1. to migrate the tables run:

```bash
  npm run migrate
```

## API Reference

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

## Appendix

The project architecture is made under the repository pattern using classes and initializers to optimize the code splitting and distributiion in a more organized way.
