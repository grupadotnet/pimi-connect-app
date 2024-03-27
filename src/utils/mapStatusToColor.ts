import { universalColors } from 'style';

import { Status } from '@/types/status';

export const mapStatusToColor = (status: Status): string => {
  switch (status) {
    case 'available':
      return universalColors.available;
    case 'do not disturb':
      return universalColors.doNotDisturb;
    case 'unavailable':
      return universalColors.unavailable;
    case 'be right back':
      return universalColors.beRightBack;
  }
};
