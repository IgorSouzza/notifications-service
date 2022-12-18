import {
  Notification,
  NotificationProps,
  Content,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New notification'),
    recipientId: 'recipient-1',
    ...override,
  });
}
