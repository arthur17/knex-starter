# Knex Starter

## Getting started

* Download or clone this repository
* Run `npm install`
* Install the database adapter you are going to use (i.e. `npm install --save pg`)
* Make sure `./knex.sh` is executable: `chmod +x knex.sh`

## Usage

### Migrations

Create migration (file will be **overwritten** if already exists)
```
./knex.sh migrate:make create_users_table
```

Run migrations
```
./knex.sh migrate:latest
```

Rollback migrations
```
./knex.sh migrate:rollback
```

### Seeds

Create seed (file will be **overwritten** if already exists)
```
./knex.sh seed:make 001_users_table_seeder
```

Run seeds
```
./knex.sh seed:run
```

### More commands

Show help
```
./knex.sh --help
```
