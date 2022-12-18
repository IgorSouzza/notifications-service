import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories/notification.repository';
import { NotificationNotFound } from './errors/notification-not-found.error';

interface ReadNotificationRequest {
  notificationId: string;
}

@Injectable()
export class ReadNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(request: ReadNotificationRequest) {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
