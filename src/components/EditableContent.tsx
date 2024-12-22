import React, { useState, useEffect } from 'react';
import { useEditable } from '@/contexts/EditableContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface EditableContentProps {
  content: string;
  contentKey: string;
  multiline?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const EditableContent = ({ 
  content, 
  contentKey, 
  multiline = false,
  className = "",
  as: Component = "div"
}: EditableContentProps) => {
  const { isEditMode, saveChanges, getContent } = useEditable();
  const [editedContent, setEditedContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContent = getContent(contentKey);
    if (savedContent) {
      setEditedContent(savedContent);
    }
  }, [contentKey]);

  if (!isEditMode) {
    return <Component className={className}>{editedContent}</Component>;
  }

  if (isEditing) {
    return (
      <div className="relative group">
        {multiline ? (
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full min-h-[100px]"
          />
        ) : (
          <Input
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full"
          />
        )}
        <div className="flex gap-2 mt-2">
          <Button
            size="sm"
            onClick={() => {
              saveChanges(contentKey, editedContent);
              setIsEditing(false);
            }}
          >
            Save
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Component
      className={`${className} relative group cursor-pointer`}
      onClick={() => setIsEditing(true)}
    >
      {editedContent}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Component>
  );
};