export enum Chains {
    PENDULUM = 'pendulum',
    AMPLITUDE = 'amplitude'
}

export type Chain = keyof typeof Chains;