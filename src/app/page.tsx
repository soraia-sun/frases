"use client"
import { ubuntu } from "@/app/ui/fonts"
import { Help } from "@/app/ui/help"
import { MsgPage } from "@/app/ui/msg-page"
import { MsgGroup, parse } from "@/app/parse"
import { useState, FormEvent } from "react"


export default function Home() {
  let [showHelp, setShowHelp] = useState(false)
  let [title, setTitle] = useState("XVII Semana Espírita de Pará de Minas - 2024")
  let [copies, setCopies] = useState(20)
  let [rawmsg, setRawmsg] = useState("")
  let [groups, setGroups] = useState<MsgGroup[]>([])

  let toggleHelp = () => setShowHelp(!showHelp)
  let handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setGroups(parse(rawmsg))
  }

  return (
    <>
      <main className={`${ubuntu.className} flex flex-col print:hidden p-3 mx-24`}>
        <div className="flex-1 relative m-3">
          <h1 className="font-bold text-center text-3xl">Gerador de Frases</h1>
          <button onClick={toggleHelp} className="absolute top-0 right-0 px-3 h-full bg-primary text-white font-bold text-xl rounded-lg active:bg-sky-900 transition-colors">
            Ajuda?
          </button>
        </div>
        <div className="h-1 bg-primary m-3" />
        <Help show={showHelp} />
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex-1 flex flex-row justify-center items-center">
            <p className="m-0 ml-3">Título:</p>
            <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} className="flex-1 p-3 m-3 text-lg border-2 focus:border-sky-500 outline-none rounded-lg" />
            <p className="m-0 ml-3">Cópias:</p>
            <input placeholder="Cópias" type="number" value={copies} onChange={e => setCopies(parseInt(e.target.value))} className="p-3 m-3 text-lg border-2 focus:border-sky-500 outline-none rounded-lg" />
          </div>
          <textarea placeholder="Insira aqui as frases..." value={rawmsg} onChange={e => setRawmsg(e.target.value)} className="p-3 m-3 min-h-72 text-lg border-2 focus:border-sky-500 outline-none rounded-lg" />
          <button className="p-3 m-3 bg-primary text-white font-bold text-xl rounded-lg active:bg-sky-900 transition-colors">
            Gerar
          </button>
        </form>
      </main>
      {groups.map((g, i) => <MsgPage key={`group${i}`} copies={copies || 1} group={g} title={title} />)}
    </>
  )
}
