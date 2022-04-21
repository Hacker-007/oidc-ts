interface Id {
    id: string
}

interface StorageAdapter<T extends Id> {
    get(id: string): Promise<T | undefined>
    getAll(): Promise<T[]>
    insert(value: T): Promise<T>
    update(id: string, value: T): Promise<T | undefined>
    delete(id: string): Promise<T | undefined>
}