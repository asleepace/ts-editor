

export type BackgroundContainerProps = React.PropsWithChildren<{
}>

export const BackgroundContainer = (props: BackgroundContainerProps) => {
  return (
    <div className="flex flex-1 flex-col w-full bg-slate-700 min-h-screen">
      {props.children}
    </div>
  )
}