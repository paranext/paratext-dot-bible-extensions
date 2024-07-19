import { logger } from '@papi/backend';

export async function activate() {
  logger.info('Paratext 10 Send/Receive is activating!');
}

export async function deactivate() {
  logger.info('Paratext 10 Send/Receive is deactivating!');
  return true;
}
