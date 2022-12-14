/*
* This file was generated by a tool.
* Rerun sql-ts to regenerate this file.
*/
export interface article {
  'articleID': string;
  'created'?: Date | null;
  'title': string;
  'url': string;
}
export interface comment {
  'articleID': string;
  'commentID': string;
  'text': string;
}
export interface kysely_migration {
  'name': string;
  'timestamp': string;
}
export interface kysely_migration_lock {
  'id': string;
  'is_locked'?: number;
}

export interface Database {
  "article": article
  "comment": comment
  "kysely_migration": kysely_migration
  "kysely_migration_lock": kysely_migration_lock
}