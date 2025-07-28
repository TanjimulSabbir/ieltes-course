import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center text-gray-700">
      <Loader2 className="animate-spin w-10 h-10 text-green-600 mb-4" />
      <p className="text-xl font-semibold">
        Preparing your learning experience...
      </p>
      <p className="text-sm text-gray-500 mt-2">Please wait a moment</p>
    </div>
  );
}
