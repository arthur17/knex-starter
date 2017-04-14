#!/usr/bin/env bash

# get script directory
SCRIPT_DIR="`dirname \"$0\"`"

# search for at least one adapter on package.json
GREP_RESULT="`grep '"pg"\|"sqlite3"\|"mysql"\|"mysql2"\|"mariasql"\|"strong-oracle"\|"oracle"\|"mssql"' "$SCRIPT_DIR"/package.json`"

# if adapter is not found
if [[ -z ${GREP_RESULT} ]]; then
    echo -e "\nAt least one database adapter is required:"
    echo -e "    pg\n    sqlite3\n    mysql\n    mysql2\n    mariasql\n    strong-oracle\n    oracle\n    mssql"
    echo -e "\nExample:\n    npm install --save pg"
    exit 1
fi

# set variables
KNEX_CLI=${SCRIPT_DIR}/node_modules/knex/bin/cli.js
KNEX_FILE=${SCRIPT_DIR}/config.js
WORK_DIR=${SCRIPT_DIR}/.

# set environment if not defined
if [ -z ${NODE_ENV} ]; then
    NODE_ENV="development"
fi

# run knex
node ${KNEX_CLI} --knexfile ${KNEX_FILE} --cwd ${WORK_DIR} --env ${NODE_ENV} "$@"

# easy rollback, migrate and seed
# ./knex.sh migrate:rollback && ./knex.sh migrate:latest && ./knex.sh seed:run
