export enum LogLevel {
    debug = 0,
    info = 1,
    warn = 2,
    error = 3,
    nothing = 4
}

export class Logger {

    private readonly layer: LogLevel

    constructor(layer: LogLevel) {
        this.layer = layer
    }

    private display(level: LogLevel, ...args: any) {
        if (this.layer <= level) return
        switch (level) {
            case LogLevel.debug:
                console.debug(...args)
                break

            case LogLevel.info:
                console.info(...args)
                break

            case LogLevel.warn:
                console.warn(...args)
                break

            case LogLevel.error:
                console.error(...args)
                break
        }
    }

    public debug(...args: any) {
        this.display(LogLevel.debug, ...args)
    }
    
    public info(...args: any) {
        this.display(LogLevel.info, ...args)
    }
    
    public warn(...args: any) {
        this.display(LogLevel.warn, ...args)
    }
    
    public error(...args: any) {
        this.display(LogLevel.error, ...args)
    }
}