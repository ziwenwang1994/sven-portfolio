"use client";
// src/PaintingBoard.js
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const PaintingBoard = () => {
  const rows = 64;
  const cols = 64;
  const cellSize = 20;
  const [grid, setGrid] = useState(
    Array(rows).fill(Array(cols).fill("transparent"))
  );
  const [isPainting, setIsPainting] = useState(false);
  const [brushColor, setBrushColor] = useState("black");
  const canvasRef = useRef(null);

  const handleMouseDown = (e, { rowIdx, colIdx }) => {
    e.preventDefault();
    setIsPainting(true);
    paintCell(rowIdx, colIdx);
  };

  const handleMouseUp = () => {
    setIsPainting(false);
  };

  const handleMouseEnter = (e, { rowIdx, colIdx }) => {
    e.preventDefault();
    if (isPainting) {
      paintCell(rowIdx, colIdx);
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

  const handleColorChange = (e) => {
    setBrushColor(e.target.value);
  };

  const clearBoard = () => {
    setGrid(Array(rows).fill(Array(cols).fill("transparent")));
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

  return (
    <div className="flex justify-center">
      <div className="w-[60px]">
        <div className="text-center">
          <div className="w-full text-xs">Color</div>
          <input
            type="color"
            value={brushColor}
            onChange={handleColorChange}
            className="w-8 h-8 p-0 border-none"
          />
        </div>
      </div>
      <div
        className="block  bg-white"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: `url('/assets/brush.png'), auto` }}
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
                    color && color !== "transparent"
                      ? color
                      : "#eee",
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
    </div>
  );
};

export default PaintingBoard;
