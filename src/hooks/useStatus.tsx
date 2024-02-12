import React from 'react';

import AccessibleStatusButton from '@/components/Button/StatusButton/AccessibleStatusButton';
import BeRightBackStatusButton from '@/components/Button/StatusButton/BeRightBackStatusButton';
import DefaultButtonStatus from '@/components/Button/StatusButton/DefaultButtonStatus';
import DoNotDisturbStatusButton from '@/components/Button/StatusButton/DoNotDisturbStatusButton';
import InaccessibleStatusButton from '@/components/Button/StatusButton/InaccessibleStatusButton';
import { Status } from '@/types/status';

export const selectStatus = (property: Status) => {
  switch (property) {
    case 'Inaccessible':
      return <InaccessibleStatusButton />;
    case 'Accessible':
      return <AccessibleStatusButton />;
    case 'DoNotDisturb':
      return <DoNotDisturbStatusButton />;
    case 'BeRightBack':
      return <BeRightBackStatusButton />;
    default:
      return <DefaultButtonStatus />;
  }
};
