
  import { EP1ObserveYourSenses,EP0ObserveYourSensespilot, } from '../content/meditations/index.tsx'
  const MeditationsScreens = new Map();

  export const EP1OBSERVEYOURSENSES_SCREEN = 'navigation.EP1ObserveYourSensesScreen';
export const EP0OBSERVEYOURSENSESPILOT_SCREEN = 'navigation.EP0ObserveYourSensespilotScreen';

  MeditationsScreens.set(EP1OBSERVEYOURSENSES_SCREEN, EP1ObserveYourSenses);
MeditationsScreens.set(EP0OBSERVEYOURSENSESPILOT_SCREEN, EP0ObserveYourSensespilot);

  export default MeditationsScreens;

  