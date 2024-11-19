export interface queryPort {
    fetchSearchQuery: (index: number) => Promise<string>
}
