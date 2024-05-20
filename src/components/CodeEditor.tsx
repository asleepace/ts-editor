

export type CodeEditorProps = {
  language: string;
}

export const CodeEditor = ({ language }: CodeEditorProps) => {

  return (
    <textarea id="codeEditor" className="flex-1 bg-transparent font-mono tracking-wide flex w-full outline-none flex-col p-4 text-white" placeholder="Write your code here...">

    </textarea>
  )
}