import { Injectable } from '@nestjs/common';

import { Notification, Content } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notification.repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

@Injectable()
export class SendNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(request: SendNotificationRequest) {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
