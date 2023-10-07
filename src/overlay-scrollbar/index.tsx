import { useEffect, useRef } from 'react'
import styles from './style.module.css'

export type Props = {
  children?: React.ReactNode
  className?: string
  containerStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
}

export function OverlayScrollbar({
  children,
  className,
  containerStyle,
  contentStyle,
}: Props) {
  const container = useRef<HTMLDivElement>(null)
  const scroll = useRef<HTMLDivElement>(null)
  const trackX = useRef<HTMLDivElement>(null)
  const thumbX = useRef<HTMLDivElement>(null)
  const trackY = useRef<HTMLDivElement>(null)
  const thumbY = useRef<HTMLDivElement>(null)

  const mouseEntered = useRef<boolean>(false)
  const startX = useRef<number>(0)
  const startY = useRef<number>(0)
  const startLeft = useRef<number>(0)
  const startTop = useRef<number>(0)
  const isXDragging = useRef<boolean>(false)
  const isYDragging = useRef<boolean>(false)

  const positionThumb = () => {
    if (!scroll.current) return
    if (!thumbY.current) return
    if (!thumbX.current) return

    const {
      scrollHeight,
      clientHeight,
      scrollTop,
      scrollWidth,
      clientWidth,
      scrollLeft,
    } = scroll.current

    const computedScrollTop = getComputedStyle(
      scroll.current
    ).flexDirection.endsWith('reverse')
      ? scrollHeight - clientHeight + scrollTop
      : scrollTop
    const thumbScrollTop =
      (computedScrollTop / (scrollHeight - clientHeight)) *
      (clientHeight - thumbY.current.clientHeight)
    thumbY.current.style.top = `${thumbScrollTop}px`

    const computedScrollLeft = getComputedStyle(
      scroll.current
    ).flexDirection.endsWith('reverse')
      ? scrollWidth - clientWidth + scrollLeft
      : scrollLeft
    const thumbScrollLeft =
      (computedScrollLeft / (scrollWidth - clientWidth)) *
      (clientWidth - thumbX.current.clientWidth)
    thumbX.current.style.left = `${thumbScrollLeft}px`
  }

  const toggleThumbOpacity = (entered?: boolean) => {
    return () => {
      if (!trackY.current) return
      if (!trackX.current) return
      if (typeof entered === 'boolean') mouseEntered.current = entered

      if (mouseEntered.current || isYDragging.current || isXDragging.current) {
        trackY.current.style.opacity = '1'
        trackY.current.style.transitionDelay = '0ms'
        trackX.current.style.opacity = '1'
        trackX.current.style.transitionDelay = '0ms'
      } else {
        trackY.current.style.opacity = '0'
        trackY.current.style.transitionDelay = '500ms'
        trackX.current.style.opacity = '0'
        trackX.current.style.transitionDelay = '500ms'
      }
    }
  }

  const preventTextSelection = (event: MouseEvent) => event.preventDefault()

  const handleThumbYMouseDown = (event: MouseEvent) => {
    if (!thumbY.current) return

    isYDragging.current = true
    startY.current = event.clientY
    startTop.current = parseFloat(getComputedStyle(thumbY.current).top)

    // Prevent text selection during dragging
    event.preventDefault()
  }

  const handleThumbXMouseDown = (event: MouseEvent) => {
    if (!thumbX.current) return

    isXDragging.current = true
    startX.current = event.clientX
    startLeft.current = parseFloat(getComputedStyle(thumbX.current).left)

    // Prevent text selection during dragging
    event.preventDefault()
  }

  const handleThumbMouseMove = (event: MouseEvent) => {
    if (!isYDragging.current && !isXDragging.current) return
    if (!scroll.current) return
    if (!thumbY.current) return
    if (!thumbX.current) return

    if (isYDragging.current) {
      const deltaY = event.clientY - startY.current
      const newY = startTop.current + deltaY

      // Ensure the thumb stays within the scroll's boundaries
      const scrollH = scroll.current.clientHeight
      const thumbH = thumbY.current.clientHeight
      const maxTop = scrollH - thumbH
      const newTop = Math.min(Math.max(newY, 0), maxTop)
      thumbY.current.style.top = newTop + 'px'

      const thumbSpace =
        scroll.current.clientHeight - thumbY.current.clientHeight
      const scrollJump =
        (scroll.current.scrollHeight - scroll.current.clientHeight) / thumbSpace
      const scrollableH =
        scroll.current.scrollHeight - scroll.current.clientHeight
      const newScrollTop = getComputedStyle(
        scroll.current
      ).flexDirection.endsWith('reverse')
        ? newTop * scrollJump - scrollableH
        : newTop * scrollJump
      scroll.current.scrollTop = newScrollTop
    } else {
      const deltaX = event.clientX - startX.current
      const newX = startLeft.current + deltaX

      // Ensure the thumb stays within the scroll's boundaries
      const scrollW = scroll.current.clientWidth
      const thumbW = thumbX.current.clientWidth
      const maxLeft = scrollW - thumbW
      const newLeft = Math.min(Math.max(newX, 0), maxLeft)
      thumbX.current.style.left = newLeft + 'px'

      const thumbSpace = scroll.current.clientWidth - thumbX.current.clientWidth
      const scrollJump =
        (scroll.current.scrollWidth - scroll.current.clientWidth) / thumbSpace
      const scrollableW =
        scroll.current.scrollWidth - scroll.current.clientWidth
      const newScrollLeft = getComputedStyle(
        scroll.current
      ).flexDirection.endsWith('reverse')
        ? newLeft * scrollJump - scrollableW
        : newLeft * scrollJump
      scroll.current.scrollLeft = newScrollLeft
    }
  }

  const handleThumbMouseUp = () => {
    isYDragging.current = false
    isXDragging.current = false
    toggleThumbOpacity()()
  }

  useEffect(() => {
    if (!container.current) return
    if (!scroll.current) return
    if (!trackY.current) return
    if (!trackX.current) return
    if (!thumbY.current) return
    if (!thumbX.current) return

    const resizeObserver = new ResizeObserver(() => {
      if (!scroll.current) return
      if (!trackY.current) return
      if (!trackX.current) return
      if (!thumbY.current) return
      if (!thumbX.current) return
      const { scrollHeight, clientHeight, scrollWidth, clientWidth } =
        scroll.current

      // check if Y axis overflowed
      if (scrollHeight === clientHeight) {
        trackY.current.style.display = 'none'
      } else {
        trackY.current.style.display = 'block'
        thumbY.current.style.height =
          ((clientHeight / scrollHeight) * clientHeight).toFixed(2) + 'px'
        positionThumb()
      }

      // check if X axis overflowed
      if (scrollWidth === clientWidth) {
        trackX.current.style.display = 'none'
      } else {
        trackX.current.style.display = 'block'
        thumbX.current.style.width =
          ((clientWidth / scrollWidth) * clientWidth).toFixed(2) + 'px'
        positionThumb()
      }
    })
    resizeObserver.observe(scroll.current)

    scroll.current.addEventListener('scroll', positionThumb)
    trackY.current.addEventListener('mousedown', preventTextSelection)
    trackX.current.addEventListener('mousedown', preventTextSelection)
    thumbY.current.addEventListener('mousedown', handleThumbYMouseDown)
    thumbX.current.addEventListener('mousedown', handleThumbXMouseDown)
    document.addEventListener('mousemove', handleThumbMouseMove)
    document.addEventListener('mouseup', handleThumbMouseUp)
    container.current.addEventListener('mouseenter', toggleThumbOpacity(true))
    container.current.addEventListener('mouseleave', toggleThumbOpacity(false))

    const containerRef = container.current
    const scrollRef = scroll.current
    const trackYRef = thumbY.current
    const trackXRef = thumbY.current
    const thumbYRef = thumbY.current
    const thumbXRef = thumbY.current
    return () => {
      resizeObserver.unobserve(scrollRef)
      scrollRef.removeEventListener('scroll', positionThumb)
      trackYRef.removeEventListener('mousedown', preventTextSelection)
      trackXRef.removeEventListener('mousedown', preventTextSelection)
      thumbYRef?.removeEventListener('mousedown', handleThumbYMouseDown)
      thumbXRef?.removeEventListener('mousedown', handleThumbXMouseDown)
      document.removeEventListener('mousemove', handleThumbMouseMove)
      document.removeEventListener('mouseup', handleThumbMouseUp)
      containerRef.removeEventListener('mouseenter', toggleThumbOpacity(true))
      containerRef.removeEventListener('mouseleave', toggleThumbOpacity(false))
    }
  }, [])

  return (
    <div className={styles.container} ref={container} style={containerStyle}>
      <div
        className={`${className} ${styles.scroll}`}
        style={contentStyle}
        ref={scroll}
      >
        {children}
      </div>
      <div className={styles.trackY} ref={trackY}>
        <div className={styles.wrapper}>
          <div className={styles.thumbY} ref={thumbY}></div>
        </div>
      </div>
      <div className={styles.trackX} ref={trackX}>
        <div className={styles.wrapper}>
          <div className={styles.thumbX} ref={thumbX}></div>
        </div>
      </div>
    </div>
  )
}
