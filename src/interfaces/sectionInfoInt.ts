export interface sectionInfoInt {
    id: number,
    title: string,
    kicker: string,
    extra?:
        {
            data?: string
        }[],
    user: string
}