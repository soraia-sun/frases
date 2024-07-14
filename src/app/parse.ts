export type Message = {
    content: string[],
    reference: string,
    size?: number,
}

export type MsgGroup = Message[]

function notEmpty<TValue>(value: TValue | null): value is TValue {
    return value !== null;
}

export function parse(rawmsg: string): MsgGroup[] {
    return rawmsg
        .trim()
        .replaceAll(/\n\n+/g, "\n\n")
        .split("...")
        .map(g => g
            .trim()
            .split("\n\n")
            .map(msg => {
                let lines = msg.split("\n")
                if (lines.length == 0)
                    return null
                let last = lines.at(-1)
                if (last?.match(/^\d+$/)) {
                    return {
                        content: lines.slice(0, -2),
                        reference: lines.at(-2) || "",
                        size: parseInt(last)
                    }
                }
                let content = lines.slice(0, -1)
                return {
                    content,
                    reference: lines.at(-1) || ""
                }
            })
            .filter(notEmpty)
            .slice(0, 10)
        )
}