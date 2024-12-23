import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { Pencil, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EditableTextProps {
  id: string;
  defaultText: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const EditableText = ({ id, defaultText, className = "", as: Component = "p" }: EditableTextProps) => {
  // Only enable editing in development mode
  if (import.meta.env.PROD) {
    return <Component className={className}>{defaultText}</Component>;
  }

  const { toast } = useToast();
  const storageKey = `editable-text-${id}`;
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    const savedText = localStorage.getItem(storageKey);
    if (savedText) {
      setText(savedText);
    }
  }, [storageKey]);

  const handleSave = () => {
    localStorage.setItem(storageKey, text);
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: "Your text changes have been saved successfully.",
    });
  };

  const handleCancel = () => {
    const savedText = localStorage.getItem(storageKey) || defaultText;
    setText(savedText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="relative group">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`w-full p-2 border rounded-md ${className}`}
          rows={3}
        />
        <div className="flex gap-2 mt-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleSave}
            className="flex items-center gap-1"
          >
            <Check className="h-4 w-4" />
            Save
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCancel}
            className="flex items-center gap-1"
          >
            <X className="h-4 w-4" />
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <Component className={className}>{text}</Component>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setIsEditing(true)}
        className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Pencil className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default EditableText;