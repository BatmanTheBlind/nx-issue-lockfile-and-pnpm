import { BigQuery } from '@google-cloud/bigquery'
import { Config } from '@tsoa/runtime'

export function myLib(): BigQuery {
  return new BigQuery();
}

export function myLib2(): Config | null {
  return null;
}