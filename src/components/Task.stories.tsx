import React from 'react'
import { Task } from './Task'
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react/types-6-0";
import { props } from './Task'

export default {
  component: Task,
  title: 'Task',
} as Meta;

const Template: Story<props> = args => <Task {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned: any = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived: any = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};


