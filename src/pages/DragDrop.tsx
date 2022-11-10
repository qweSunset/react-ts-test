import { useEffect, useRef } from "react";

export const DragDrop = () => {

    const boxRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const isClicked = useRef<boolean>(false)

    const coords = useRef<{
        startX: number,
        startY: number,
        lastX: number,
        lastY: number
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    })

    
    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;
        const box = boxRef.current
        const container = containerRef.current

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true
            coords.current.startX = e.clientX
            coords.current.startY = e.clientY
        }
        
        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false

            coords.current.lastX = box.offsetLeft
            coords.current.lastY = box.offsetTop
        }

        const onMouseMove = (e: MouseEvent) => {
            if(!isClicked.current) return;

            box.style.top = `${e.clientY - coords.current.startY + coords.current.lastY}px`
            box.style.left = `${e.clientX - coords.current.startX + coords.current.lastX}px`
        }

        box.addEventListener('mousedown', onMouseDown)
        box.addEventListener('mouseup', onMouseUp)
        container.addEventListener('mousemove', onMouseMove)
        container.addEventListener('mouseleave', onMouseUp)

        const cleanUp = () => {
            box.removeEventListener('mousedown', onMouseDown)
            box.removeEventListener('mouseup', onMouseUp)
            container.removeEventListener('mousemove', onMouseMove)
            container.removeEventListener('mouseleave', onMouseUp)
        }

        return cleanUp
    }, [])

    return (
        <main className="main h-[100vh] w-[100vh] mx-auto grid items-center">
            <div ref={containerRef} className="container relative border-2 border-black h-[800px] h-[800px] overflow-hidden">
                <div ref={boxRef} className="box absolute top-0 left-0 bg-pink-500 h-[60px] w-[60px] cursor-pointer">

                </div>
            </div>
        </main>
    )
}

export default DragDrop;