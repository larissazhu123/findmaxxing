import * as React from "react"
import { cn } from "@/lib/utils"

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
}

export function ImageWithFallback({ 
  src, 
  fallbackSrc = "https://images.unsplash.com/photo-1741637335289-c99652d3155f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc1OTc4NDIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  className,
  ...props 
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = React.useState(src)

  React.useEffect(() => {
    setImgSrc(src)
  }, [src])

  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  return (
    <img
      src={imgSrc}
      onError={handleError}
      className={cn("w-full h-auto", className)}
      {...props}
    />
  )
}
