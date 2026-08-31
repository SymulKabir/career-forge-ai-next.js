"use client";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

const Index = ({ activeTool, setActiveTool }: any) => {
  const handleToolClick = (title: string) => {
    console.log("Click ");
    console.log("title ", title);
    setActiveTool(activeTool === title ? null : title);
  };
  const toolBoxToggle = ({ toolBox, childId }: any) => {
    const closeToolBox = document.getElementById("closeToolBox");

    if (toolBox) {
      toolBox.classList.toggle("left-[0px]");
      const childElement = document.getElementById(childId);
      if (childElement) {
        childElement.classList.toggle("hidden");
      }
    }
    setTimeout(() => {
      if (closeToolBox) {
        closeToolBox.classList.add("right-[-35px]");
      }
    }, 300);
  };
  const rearrangeModalToggle = (rearrangeModal: any) => {
    if (rearrangeModal) {
      rearrangeModal?.classList?.toggle("hidden");
    }
  };

  const makeToolActive = (currentActiveTool: string) => {
    const toolbar = document.querySelector("#resumeToolbar");
    const toolBox = document.querySelector("#toolBox");
    const rearrangeModal = document.querySelector("#rearrangeModal");
    const activeBtn = toolbar?.querySelector(
      `[aria-label="${currentActiveTool}"]`,
    );
    const actionGroup = activeBtn?.getAttribute("data-action-group");
    const childId = activeBtn?.getAttribute("data-child-id");

    console.log("actionGroup -->>>", actionGroup)
    console.log("childId -->>>", childId)
    setTimeout(() => {
      if (actionGroup === "ToolBox") {
        toolBoxToggle({ toolBox, childId });
      } else if (actionGroup === "Rearrange") {
        rearrangeModalToggle(rearrangeModal);
      }
    }, 400);
  };

  const resetAllUi = () => {
    const closeToolBox = document.getElementById("closeToolBox"); 
    const toolBox = document.querySelector("#toolBox");
    const rearrangeModal = document.querySelector("#rearrangeModal");
    if (closeToolBox) {
      closeToolBox.classList.remove("right-[-35px]");
    }

    if (toolBox) {
      const childDivs = toolBox.querySelectorAll(":scope > div > div"); 

      childDivs.forEach((element) => {
        element.classList.add("hidden");
      }); 
      toolBox.classList.remove("left-[0px]");
    }
    if (rearrangeModal) {
      rearrangeModal.classList.add("hidden");
    }
  };

 
  useEffect(() => {
    console.log("🔥 SUBSCRIBER FIRED");
    console.log("activeTool -->", activeTool); 
    resetAllUi();
    if (!activeTool) return;
    makeToolActive(activeTool);
    console.log("");
  }, [activeTool]);

  return {handleToolClick}
};

export default Index;
