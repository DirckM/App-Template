import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('local.db');

export const init = () => {
  const promise = new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
          return false;
        },
      );
    });
  });
  return promise;
};

export const insertTest = (value: string) => {
  const promise = new Promise<SQLite.SQLResultSet>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO test (value) VALUES (?);`,
        [value],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
          return false;
        },
      );
    });
  });
  return promise;
};

export const fetchTest = () => {
  const promise = new Promise<SQLite.SQLResultSet>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM test',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
          return false;
        },
      );
    });
  });
  return promise;
};

export default db;
