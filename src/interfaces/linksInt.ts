export interface sectionUseInt {
    id: number,
    title: string,
    kicker: string,
    extra?: object[],
    user?: string
}

export interface linkListInt {
    id: number,
    category: string,
    description?: string,
    flag: string,
    type: string,
    links?:linksInt[]
}

export interface linksInt {
    id: number,
    link_title?: string,
    description?: string,
    url?: string
}