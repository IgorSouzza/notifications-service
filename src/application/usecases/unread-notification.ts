import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories/notification.repository';
import { NotificationNotFound } from './errors/notification-not-found.error';

interface UnreadNotificationRequest {
  notificationId: string;
}

@Injectable()
export class UnreadNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(request: UnreadNotificationRequest) {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.unRead();

    await this.notificationsRepository.save(notification);
  }
}
