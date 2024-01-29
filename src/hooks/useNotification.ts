import { useState, useEffect, useCallback } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import { getMvpSprite } from '@/utils';

export function useNotification() {
  const { isNotificationSoundEnabled } = useSettings();

  const browserSupportsNotifications = 'Notification' in window;

  const [notificationStatus, setNotificationStatus] =
    useState<NotificationPermission>(
      browserSupportsNotifications ? Notification.permission : 'denied'
    );

  const hasNotificationPermission = notificationStatus === 'granted';
  const isNotificationPermissionDenied = notificationStatus === 'denied';

  const respawnNotification = useCallback(
    (mvpID: number, title: string, body: string) => {
      if (isNotificationSoundEnabled) {
        const audio = new Audio('notification.mp3');
        audio.volume = 0.2;
        audio.play();
      }

      if (hasNotificationPermission) {
        new Notification(title, {
          body,
          icon: getMvpSprite(mvpID),
        });
      }
    },
    [isNotificationSoundEnabled, hasNotificationPermission]
  );

  useEffect(() => {
    if (!browserSupportsNotifications || Notification.permission === 'granted')
      return;

    (async () => {
      const permission = await Notification.requestPermission();
      setNotificationStatus(permission);
    })();
  }, [browserSupportsNotifications]);

  return {
    respawnNotification,
    hasNotificationPermission,
    isNotificationPermissionDenied,
    browserSupportsNotifications,
  };
}
