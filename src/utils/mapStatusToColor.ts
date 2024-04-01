import { universalColors } from 'style';

import { Status } from '@/types/status';

export const mapStatusToColor = (status: Status): string => {
  switch (status) {
    case 'available':
      return universalColors.americanGreen;
    case 'do not disturb':
      return universalColors.permanentGeraniumLake;
    case 'unavailable':
      return universalColors.lightSilver;
    case 'be right back':
      return universalColors.metallicYellow;
  }
};
