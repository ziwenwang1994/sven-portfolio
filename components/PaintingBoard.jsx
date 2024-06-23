"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { BsEraserFill } from "react-icons/bs";
import { IoIosColorFill } from "react-icons/io";
const defaultColor = "transparent";
const defaultBrush = "black";
const brushPath = "/assets/brush.png";
const erasePath = "/assets/erase.png";
const fillPath = "/assets/fill.png";
const PaintingBoard = () => {
  const rows = 64;
  const cols = 64;
  const cellSize = 20;
  const [grid, setGrid] = useState(
    Array(rows).fill(Array(cols).fill("transparent"))
  );
  const [isPainting, setIsPainting] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [brushColor, setBrushColor] = useState(defaultBrush);
  const [brushSize, _] = useState(1);
  const [cursor, setCursor] = useState(brushPath);
  const canvasRef = useRef(null);

  const handleMouseDown = (e, { rowIdx, colIdx }) => {
    e.preventDefault();
    setIsPainting(true);
    if (isFilling) {
      fillCell(rowIdx, colIdx);
    } else {
      setIsPainting(true);
      if (isErasing) {
        eraseCell(rowIdx, colIdx);
      } else {
        paintCell(rowIdx, colIdx);
      }
    }
  };

  const handleMouseUp = () => {
    setIsPainting(false);
  };

  const handleMouseEnter = (e, { rowIdx, colIdx }) => {
    e.preventDefault();
    if (isPainting) {
      if (isErasing) {
        eraseCell(rowIdx, colIdx);
      } else {
        paintCell(rowIdx, colIdx);
      }
    }
  };

  const paintCell = (rowIdx, colIdx) => {
    const newGrid = grid.map((row, rIdx) =>
      row.map((color, cIdx) =>
        rIdx === rowIdx && cIdx === colIdx ? brushColor : color
      )
    );
    setGrid(newGrid);
  };

  const eraseCell = (rowIdx, colIdx) => {
    const newGrid = grid.map((row, rIdx) =>
      row.map((color, cIdx) => {
        const inBrushArea =
          Math.abs(rIdx - rowIdx) < brushSize &&
          Math.abs(cIdx - colIdx) < brushSize;
        return inBrushArea ? defaultColor : color;
      })
    );
    setGrid(newGrid);
  };

  const fillCell = (rowIdx, colIdx) => {
    const targetColor = grid[rowIdx][colIdx];
    if (targetColor === brushColor) return;

    const newGrid = grid.map((row) => row.slice());
    const fillQueue = [{ rowIdx, colIdx }];

    while (fillQueue.length > 0) {
      const { rowIdx, colIdx } = fillQueue.pop();
      if (
        rowIdx < 0 ||
        rowIdx >= rows ||
        colIdx < 0 ||
        colIdx >= cols ||
        newGrid[rowIdx][colIdx] !== targetColor
      ) {
        continue;
      }

      newGrid[rowIdx][colIdx] = brushColor;

      fillQueue.push({ rowIdx: rowIdx + 1, colIdx });
      fillQueue.push({ rowIdx: rowIdx - 1, colIdx });
      fillQueue.push({ rowIdx, colIdx: colIdx + 1 });
      fillQueue.push({ rowIdx, colIdx: colIdx - 1 });
    }

    setGrid(newGrid);
  };

  const toggleEraseMode = () => {
    setIsErasing(!isErasing);
    setIsFilling(false);
  };

  const toggleFillMode = () => {
    setIsFilling(!isFilling);
    setIsErasing(false);
  };

  const handleColorChange = (e) => {
    setBrushColor(e.target.value);
    setIsErasing(false);
  };

  const clearBoard = () => {
    setGrid(Array(rows).fill(Array(cols).fill(defaultColor)));
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        ctx.fillStyle = grid[r][c];
        ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
      }
    }
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "painting.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  useEffect(() => {
    drawCanvas();
  }, [grid]);

  useEffect(() => {
    setCursor(isErasing ? erasePath : isFilling ? fillPath : brushPath);
  }, [isErasing, isFilling]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.1, ease: "easeIn" },
      }}
    >
      <h2 className="h2 text-accent pixel py-2">Draw A Simple Pixel Art!</h2>
      <main className="flex justify-center">
        <div className="w-[60px] text-center">
          <div>
            <div className="w-full text-xs">Color</div>
            <input
              type="color"
              value={brushColor}
              onChange={handleColorChange}
              className="w-8 h-8 p-0 border-none"
            />
          </div>
          <div className="text-center mt-4" onClick={toggleEraseMode}>
            <div className="w-full text-xs">Erase</div>
            <BsEraserFill
              color={isErasing ? "white" : "grey"}
              size={32}
              className={`mx-auto`}
            />
          </div>
          <div className="text-center relative mt-4" onClick={toggleFillMode}>
            <div className="w-full text-xs">Fill</div>
            <IoIosColorFill
              color={isFilling ? "white" : "grey"}
              size={32}
              className={`mx-auto`}
            />
            <div
              className="absolute left-[22px] top-[28px] w-3 h-3 rounded-full"
              style={{
                backgroundColor: isFilling ? brushColor : defaultColor,
              }}
            ></div>
          </div>
        </div>
        <div
          className="block bg-white"
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: `url(${cursor}), auto` }}
        >
          {grid.map((row, rowIdx) => (
            <div key={rowIdx} className="flex">
              {row.map((color, colIdx) => (
                <div
                  key={colIdx}
                  className={`w-3 h-3 border`}
                  style={{
                    backgroundColor: color,
                    borderColor:
                      color && color !== "transparent" ? color : "#eee",
                  }}
                  onMouseDown={(e) => handleMouseDown(e, { rowIdx, colIdx })}
                  onMouseEnter={(e) => handleMouseEnter(e, { rowIdx, colIdx })}
                />
              ))}
            </div>
          ))}
        </div>
        <canvas
          ref={canvasRef}
          width={cols * cellSize}
          height={rows * cellSize}
          className="hidden"
        />
        <div className="ml-2 w-[70px] flex flex-col gap-2">
          <Button
            className="w-full bg-red-500/70 text-white/80 rounded-xl text-xs hover:text-black"
            onClick={clearBoard}
          >
            Clear
          </Button>
          <Button
            className="w-full rounded-xl text-xs hover:bg-white/20 hover:text-accent-hover"
            onClick={downloadImage}
          >
            Export
          </Button>
        </div>
      </main>
    </motion.div>
  );
};

export default PaintingBoard;
