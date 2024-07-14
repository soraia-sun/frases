import { MsgGroup, Message } from "@/app/parse"
import styles from "@/app/ui/msg.module.css"
import { ubuntu, ubuntuCondensed } from "@/app/ui/fonts"

function inferBodySize(msg: Message): string {
  let n = msg.content.map(s => s.length).reduce((a, b) => a + b, 0)
  if (n > 200)
    return "12pt"
  if (n > 150)
    return "13pt"
  return "15pt"
}

function inferRefSize(msg: Message): string {
  let n = msg.reference.length
  if (n > 42)
    return "8pt"
  if (n > 23)
    return "10pt"
  return "12pt"
}

export function MsgCard({ index, title, msg }: Readonly<{ index: number, title: string, msg: Message }>) {
  let bodySize = msg.size ? `${msg.size}pt` : inferBodySize(msg)
  let refSize = msg.refSize ? `${msg.refSize}pt` : inferRefSize(msg)
  let body = msg.content.join("\n")
  return (
    <div className={styles.msg}>
      <p className={`${ubuntuCondensed.className} ${styles["msg-title"]} `}>
        {title}
      </p>

      <p className={`${ubuntuCondensed.className} ${styles["msg-body"]} `} style={{ fontSize: bodySize }}>
        {body}
      </p>

      <p className={`${ubuntuCondensed.className} ${styles["msg-footer"]} `} style={{ fontSize: refSize }}>
        {msg.reference}
      </p>
      <p className={`${ubuntu.className} ${styles["msg-index"]} `}>{index}</p>
    </div>
  )
}


export function MsgPage({ copies, title, group }: Readonly<{ copies: number, title: string, group: MsgGroup }>) {
  return (
    <>
      {Array(copies)
        .fill(null)
        .map((_, i) => {
          return (
            <div
              key={i}
              className={styles["msg-page"]}
              style={{ height: i === copies - 1 ? "29cm" : undefined }}
            >
              {group.map((msg, mi) => (
                <MsgCard
                  key={`${i}.${mi}`}
                  index={i * 10 + mi + 1}
                  title={title}
                  msg={msg}
                />
              ))}
            </div>
          )
        })}
    </>
  )
}