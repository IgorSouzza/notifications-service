import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories/notification.repository';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

@Injectable()
export class GetRecipientNotifications {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async execute(request: GetRecipientNotificationsRequest) {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
