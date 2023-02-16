import { FC } from 'react'

type TDotProps = {
  widthHeight?: string
  position?: string
  bgColor?: string
}

const DotNotification: FC<TDotProps> = ({
  widthHeight = '',
  position = '',
  bgColor = '',
}) => {
  return (
    <span
      className={`flex absolute top-0 right-0 h-2.5 w-2.5 ${position} ${widthHeight}`}
    >
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75 ${bgColor}`}
      />
      <span
        className={`relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow ${widthHeight} ${bgColor}`}
      />
    </span>
  )
}

export default DotNotification
