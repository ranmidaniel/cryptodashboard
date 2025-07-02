import React, { useState } from "react";

export function Tabs({ defaultValue, children, className = "" }) {
  const [value, setValue] = useState(defaultValue);
  const filteredChildren = React.Children.map(children, child =>
    React.cloneElement(child, { activeTab: value, setValue })
  );
  return <div className={className}>{filteredChildren}</div>;
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, setValue, activeTab }) {
  const isActive = value === activeTab;
  return (
    <button
      onClick={() => setValue(value)}
      className={`px-4 py-2 rounded ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, activeTab }) {
  return activeTab === value ? <div className="mt-4">{children}</div> : null;
}
