import { useEffect, useRef } from "react";

export const DragDrop = () => {

    const boxRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const isClicked = useRef<boolean>(false)

    
    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;
        const box = boxRef.current
        const container = containerRef.current

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true
        }
        
        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false
        }

        const onMouseMove = (e: MouseEvent) => {
            if(!isClicked.current) return;

            box.style.top = `e.clientY`
        }

        box.addEventListener('mousedown', onMouseDown)
        box.addEventListener('mouseup', onMouseUp)
        container.addEventListener('mousemove', onMouseMove)

        const cleanUp = () => {
            box.removeEventListener('mousedown', onMouseDown)
            box.removeEventListener('mouseup', onMouseUp)
            container.removeEventListener('mousemove', onMouseMove)
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