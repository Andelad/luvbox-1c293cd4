// Test file to debug content system
import { CONTENT } from '../content';

console.log('CONTENT object:', CONTENT);
console.log('Navigation:', CONTENT.navigation);
console.log('Pages:', CONTENT.pages);

export const testContent = () => {
  console.log('Testing content access...');
  console.log('Navigation theBox:', CONTENT.navigation.theBox);
  console.log('Feedback title:', CONTENT.pages.feedback.title);
};
