import React from 'react';
import { Provider } from 'react-redux';

import { PureInboxScreen } from './InboxScreen';

import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react/types-6-0";
import { PureInboxProps } from './InboxScreen'
import { store } from '../lib/redux'

// A super-simple mock of a redux store
// const store:any = {
//   getState: () => {
//     return {
//       tasks: TaskListStories.Default.args.tasks,
//     };
//   },
//   subscribe: () => 0,
//   dispatch: action('dispatch'),
// };

export default {
  component: PureInboxScreen,
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  title: 'InboxScreen',
} as Meta;

const Template: Story<PureInboxProps> = args => <PureInboxScreen {...args} />;

export const Default: any = Template.bind({});

export const Error: any = Template.bind({});
Error.args = {
  error: 'Something',
};