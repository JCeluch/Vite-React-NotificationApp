// src/types.ts
export interface Notification {
  id: number;
  message: string;
  read: boolean;
  type: 'request' | 'on_hold' | 'new_feature';
}