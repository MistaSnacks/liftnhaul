import { useEditable } from "@/contexts/EditableContext";
import { Button } from "@/components/ui/button";
import { Edit, Eye } from "lucide-react";

export const EditableToggle = () => {
  const { isEditMode, toggleEditMode } = useEditable();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <Button
      className="fixed bottom-4 right-4 z-50"
      onClick={toggleEditMode}
      size="lg"
    >
      {isEditMode ? <Eye className="mr-2" /> : <Edit className="mr-2" />}
      {isEditMode ? 'View Mode' : 'Edit Mode'}
    </Button>
  );
};