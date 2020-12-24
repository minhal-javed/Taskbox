import React from 'react';
import { PureInboxScreen } from './InboxScreen';
import * as TaskListStories from './TaskList.stories';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
// import { Meta } from "@storybook/react/types-6-0';
// import store from '../lib/redux'

const store:any = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args.tasks
        }
    },
    subscribe: () => 0,
    dispatch: action('dispatch')
}

export default {
    component: PureInboxScreen,
    title: 'InboxScreen',
    decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
}

const Template = (args: any) => <PureInboxScreen {...args} />

export const Default: any = Template.bind({});

export const Error: any = Template.bind({});
Error.args = {
    error: "Something"
};


