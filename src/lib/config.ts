const conf = new Map<string, boolean>();

export function wait(name: string) {
    return conf.get(name);
}

export function toggleWait(name: string) {
    conf.set(name, !conf.get(name));
}
