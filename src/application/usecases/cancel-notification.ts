import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories/notification.repository';
import { NotificationNotFound } from './errors/notification-not-found.error';

interface CancelNotificationRequest {
  notificationId: string;
}

@Injectable()
export class CancelNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(request: CancelNotificationRequest) {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
