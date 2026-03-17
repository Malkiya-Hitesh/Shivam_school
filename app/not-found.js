"use client";
import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import Button from "./components/ui2/Button";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-[1024px]:mt-[8.1rem] mt-[7.5rem] max-[640px]:mt-[5.6rem] min-h-screen px-4 bg-[var(--color-bg-light)]"
      style={{ color: "var(--color-text)" }}
    >
      <div className="flex flex-col items-center max-w-lg w-full p-8 rounded-3xl shadow-lg text-center">
        <FiAlertCircle size={80} color="var(--color-primary)" />

        <h1
          className="text-5xl font-bold mt-6"
          style={{ color: "var(--color-primary-dark)" }}
        >
          404
        </h1>

        <h2
          className="text-2xl font-semibold mt-2"
          style={{ color: "var(--color-primary)" }}
        >
          Page Not Found
        </h2>

        <p
          className="mt-4 text-base"
          style={{ color: "var(--color-text-light)" }}
        >
          Oops! The page you are looking for doesn’t exist or has been moved.
          Please check the URL or go back home.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 justify-center">
          <Button
          theme='dark'
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>
          <Button
          theme="dark"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  )
}


