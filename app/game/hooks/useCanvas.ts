import React, { useEffect } from "react";

/**
 *
 */
type Props = {
  canvasID: string;
  imageURL: string;
  sx?: number;
  sy?: number;
};

/**
 *
 * @param props
 * @returns
 */
const useCanvas = (props: Props) => {
  /**
   *
   */
  useEffect(() => {
    let canvas;
    try {
      canvas = document.getElementById(props.canvasID) as HTMLCanvasElement;
    } catch (e) {
      console.error(e);
      return;
    }

    setCanvasImage(canvas, props.imageURL, props.sx, props.sy);

    console.log("canvas has been set");
  }, [props.imageURL, props.canvasID]);

  /**
   * Sets an image on given canvas
   * @param canvas canvas element on whom to render image
   * @param imageURL image
   * @param sx crop idx x - defaults to 0
   * @param sy crop idx y - defaults to 0
   * @returns void
   */
  function setCanvasImage(
    canvas: HTMLCanvasElement,
    imageURL: string,
    sx: number = 0,
    sy: number = 0
  ) {
    if (canvas === null) {
      console.log("couldn't find canvas");
      return;
    }

    if(imageURL === "") return;

    const context = canvas.getContext("2d")!;
    var image = new Image();
    image.src = imageURL;

    image.onload = function () {
      context.drawImage(
        image,
        sx,
        sy,
        canvas.width,
        canvas.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
    };
  }
};

export default useCanvas;
