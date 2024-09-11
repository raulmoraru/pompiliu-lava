import { fn } from '@storybook/test';
import StaticCard from '../../components/Cards/StaticCard';

export default {
    title: 'Example/Card with icon',
    component: StaticCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
};

export const Normal = {
    args: {
        title: 'Your Card Title',
        description: 'Here you can add your cards description',
    }
}

export const WithExtraActions = {
    args: {
        title: 'Your Card Title',
        description: 'Here you can add your cards description',
        hasExtraActions: true
    }
}
