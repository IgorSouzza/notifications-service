import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

import { SendNotification } from '@application/usecases/send-notification';
import { CancelNotification } from '@application/usecases/cancel-notification';
import { ReadNotification } from '@application/usecases/read-notification';
import { UnreadNotification } from '@application/usecases/unread-notification';
import { CountRecipientNotifications } from '@application/usecases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/usecases/get-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
