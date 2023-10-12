import { useSettings } from '../../contexts/SettingsContext';
import { getMvpSprite, getAnimatedMvpSprite } from '../../utils';

import { Sprite } from './styles';

interface MvpSpriteProps {
  mvp:
    | {
        id: number;
        name?: string;
      }
    | IMvp;
}

export function MvpSprite({ mvp }: MvpSpriteProps) {
  const { animatedSprites } = useSettings();

  return (
    <Sprite
      src={
        !animatedSprites ? getMvpSprite(mvp.id) : getAnimatedMvpSprite(mvp.id)
      }
      alt={mvp?.name}
      isAnimated={animatedSprites}
      loading='lazy'
    />
  );
}
