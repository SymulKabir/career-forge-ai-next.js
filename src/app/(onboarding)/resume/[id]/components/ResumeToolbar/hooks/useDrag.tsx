import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

const Index = ({ activeTool, setActiveTool }: any) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const toolbarRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);

  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  const updateScrollState = () => {
    const toolbar = toolbarRef.current;

    if (!toolbar) return;

    const maxScroll = Math.max(0, toolbar.scrollWidth - toolbar.clientWidth);

    const currentScroll = toolbar.scrollLeft;

    setCanScrollLeft(currentScroll > 5);

    setCanScrollRight(currentScroll < maxScroll - 5);
  }; 

  useEffect(() => {
    const toolbar = toolbarRef.current;

    if (!toolbar) return;

    updateScrollState();

    const handleScroll = () => {
      updateScrollState();
    };

    const handleResize = () => {
      updateScrollState();
    };

    toolbar.addEventListener("scroll", handleScroll, { passive: true });

    window.addEventListener("resize", handleResize);

    const frame = requestAnimationFrame(() => {
      updateScrollState();
    });

    return () => {
      cancelAnimationFrame(frame);

      toolbar.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  const scrollToolbar = (amount: number) => {
    const toolbar = toolbarRef.current;

    if (!toolbar) return;

    toolbar.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };
 



  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const toolbar = toolbarRef.current;

    if (!toolbar) return;

    // Don't start toolbar dragging when interacting with buttons.
    const target = event.target as HTMLElement;

    if (target.closest("button")) {
      return;
    }

    // Only allow primary mouse button.
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    isDraggingRef.current = true;
    hasDraggedRef.current = false;

    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = toolbar.scrollLeft;

    try {
      toolbar.setPointerCapture(event.pointerId);
    } catch {
      // Ignore pointer capture errors.
    }

    document.body.style.userSelect = "none";
  };
 

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const toolbar = toolbarRef.current;

    if (!toolbar || !isDraggingRef.current) {
      return;
    }

    const distance = event.clientX - dragStartXRef.current; 
    if (Math.abs(distance) > 5) {
      hasDraggedRef.current = true;
    }
 
    toolbar.scrollLeft = dragStartScrollLeftRef.current - distance;
  };
 

  const stopDragging = (event?: ReactPointerEvent<HTMLDivElement>) => {
    const toolbar = toolbarRef.current;

    if (!toolbar || !isDraggingRef.current) {
      return;
    }

    isDraggingRef.current = false; 
    if (event && toolbar.hasPointerCapture(event.pointerId)) {
      try {
        toolbar.releasePointerCapture(event.pointerId);
      } catch {
        // Ignore pointer capture release errors.
      }
    }
 
    document.body.style.userSelect = "";
 
    requestAnimationFrame(() => {
      hasDraggedRef.current = false;
    });
  };
 

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    const toolbar = toolbarRef.current;

    if (!toolbar) return; 
    if (event.shiftKey) {
      event.preventDefault();

      toolbar.scrollLeft += event.deltaY || event.deltaX;

      return;
    }

    
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();

      toolbar.scrollLeft += event.deltaY;

      return;
    }
 
    if (event.deltaX !== 0) {
      toolbar.scrollLeft += event.deltaX;
    }
  };

  return {
    canScrollLeft,
    canScrollRight,
    toolbarRef,
    isDraggingRef,
    hasDraggedRef,
    dragStartXRef,
    dragStartScrollLeftRef,
    handlePointerDown,
    handlePointerMove,
    stopDragging,
    handleWheel,
    scrollToolbar,
  };
};

export default Index;
