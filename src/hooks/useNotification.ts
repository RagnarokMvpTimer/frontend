import { useSettings } from '@/contexts/SettingsContext';
import { getMvpSprite } from '@/utils';

export function useNotification() {
  const { isNotificationSoundEnabled } = useSettings();

  function respawnNotification(mvpID: number, title: string, body: string) {
    if (!('Notification' in window)) {
      return;
    }

    if (isNotificationSoundEnabled) {
      const audio = new Audio('./notification2.mp3');
      audio.volume = 0.2;
      audio.play();
    }

    if (Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: getMvpSprite(mvpID),
      });
    }
  }

  return { respawnNotification };
}
