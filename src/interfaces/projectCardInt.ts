export interface projectInt {
    id: number,
    type: string,
    image: string,
    title: string,
    description: string,
    tags?: string[],
    github: string,
    solution: string,
    extra?: string,
    bg_color?: string
}