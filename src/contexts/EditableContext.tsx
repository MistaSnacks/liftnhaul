import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from "@/components/ui/use-toast";

interface EditableContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  saveChanges: (key: string, value: string) => void;
  getContent: (key: string) => string;
}

const EditableContext = createContext<EditableContextType | undefined>(undefined);

export const EditableProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { toast } = useToast();
  
  // Load saved content from localStorage
  const getContent = (key: string): string => {
    const savedContent = localStorage.getItem(`editable_${key}`);
    return savedContent || '';
  };

  const saveChanges = (key: string, value: string) => {
    localStorage.setItem(`editable_${key}`, value);
    toast({
      title: "Content saved",
      description: "Your changes have been saved successfully.",
    });
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    toast({
      title: isEditMode ? "Edit mode disabled" : "Edit mode enabled",
      description: isEditMode ? "Content is now read-only" : "You can now edit content",
    });
  };

  return (
    <EditableContext.Provider value={{ isEditMode, toggleEditMode, saveChanges, getContent }}>
      {children}
    </EditableContext.Provider>
  );
};

export const useEditable = () => {
  const context = useContext(EditableContext);
  if (context === undefined) {
    throw new Error('useEditable must be used within an EditableProvider');
  }
  return context;
};