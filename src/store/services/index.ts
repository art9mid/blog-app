import { MMKV } from 'react-native-mmkv';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '../keys';

export const queryClient = new QueryClient({});

const storage = new MMKV();

export const clientStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
  },
  getItem: (key: string): string | null => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
};

export const appPersister = createSyncStoragePersister({
  storage: clientStorage,
  key: QUERY_KEY.storage.persister,
  serialize: (client) => {
    return JSON.stringify(client);
  },
  deserialize: (serializedClient) => {
    return JSON.parse(serializedClient);
  },
});
